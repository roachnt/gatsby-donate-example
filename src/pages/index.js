import React from 'react'
import Link from 'gatsby-link'
import { css, cx } from 'emotion'
import { PulseLoader } from 'react-spinners'
import { Elements } from 'react-stripe-elements'

import { stripeCheckoutConfig } from '../helpers/stripeHelper'
import PaymentRequestForm from '../components/PaymentRequestForm'

const amounts = [1, 5, 10, 15, 20, 50, 100]

class IndexPage extends React.Component {
  state = {
    amount: 0,
    responseMessage: null,
    responseColor: 'black',
    donateButtonDisabled: false,
  }

  preFetchAction = () => this.setState({ responseMessage: <PulseLoader /> })

  checkoutSuccessHandler = json => {
    const responseMessage = json.success
      ? `Success! Thank you for your donation of ${json.charge.amount /
          100} dollars!`
      : `Sorry! We couldn't process your donation!`
    const responseColor = json.success ? 'green' : 'red'
    this.setState({ responseMessage, responseColor })
  }

  checkoutErrorHandler = err => {
    this.setState({
      responseMessage: `Sorry! We couldn't process your donation!`,
      responseColor: `red`,
    })
  }

  handleCheckout = e => {
    this.setState({ donateButtonDisabled: true })
    this.handler = stripeCheckoutConfig(
      this.state.amount,
      this.preFetchAction,
      this.checkoutSuccessHandler,
      this.checkoutErrorHandler
    )
    window.addEventListener('popstate', this.handler.close)
    const donationAmount = this.state.amount
    // Open Checkout with further options:
    this.handler.open({
      name: 'Make a Donation',
      description: 'Thank you for your donation!',
      amount: donationAmount * 100,
      closed: () => this.setState({ donateButtonDisabled: false }),
    })
    e.preventDefault()
  }

  componentWillUnmount() {
    if (this.handler) window.removeEventListener('popstate', this.handler.close)
  }

  render = () => (
    <div className={contentContainerStyle}>
      <div style={{ marginBottom: 25, textAlign: 'center' }}>
        <p>
          welcome! <br />
          <br />how much would you like to donate?
        </p>
        {amounts.map((amount, i) => (
          <Amount
            amount={amount}
            amountState={this.state.amount}
            setAmount={amount => this.setState({ amount })}
            index={i}
          />
        ))}
      </div>
      <div
        className={css`
          width: 200px;
        `}
      >
        <Elements>
          <PaymentRequestForm
            amount={this.state.amount}
            preFetchHandler={this.preFetchAction}
            successHandler={this.checkoutSuccessHandler}
            errorHandler={this.checkoutErrorHandler}
            alternatePaymentComponent={
              <div
                onClick={this.handleCheckout}
                className={cx({
                  [donateButtonStyle]: true,
                  [donateButtonDisabledStyle]: this.state.donateButtonDisabled,
                })}
              >
                Donate
              </div>
            }
          />
        </Elements>
      </div>

      <Response
        responseColor={this.state.responseColor}
        responseMessage={this.state.responseMessage}
      />
    </div>
  )
}

const Response = props => (
  <div
    className={css`
      color: ${props.responseColor};
      margin-top: 20px;
      text-align: center;
    `}
  >
    {props.responseMessage}
  </div>
)

const Amount = props => (
  <div
    key={`amount-${props.index}`}
    className={cx({
      [amountContainerSelectedStyle]: props.amountState === props.amount,
      [amountContainerStyle]: true,
    })}
    onClick={() => props.setAmount(props.amount)}
  >
    <div
      className={cx({
        [amountStyle]: true,
        [amountSelectedStyle]: props.amountState === props.amount,
      })}
    >
      ${props.amount}
    </div>
  </div>
)

const contentContainerStyle = css`
  height: 90vh;
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const amountContainerSelectedStyle = css`
  box-shadow: 1px 0px 5px grey;
`

const amountContainerStyle = css`
  transition: 0.3s;
  display: inline-block;
  margin: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  vertical-align: top;
  &:hover {
    vertical-align: middle;
    box-shadow: 1px 0px 5px;
    font-size: 19px;
  }
`

const amountSelectedStyle = css`
  color: black;
`

const amountStyle = css`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: top;
  color: grey;
  &:hover {
    color: black;
  }
`

const donateButtonDisabledStyle = css`
  background: grey;
`

const donateButtonStyle = css`
  cursor: pointer;
  height: 50px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 50px;
  background-size: 100%;
  background-image: linear-gradient(120deg, #7c66ff, #c074fd);
  position: relative;
  z-index: 100;
  transition: 0.5s;
  &:before {
    border-radius: 50px;
    background-image: linear-gradient(120deg, #c074fd, #7c66ff);
    content: '';
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    z-index: -100;
    transition: 0.5s;
  }
  &:hover {
    letter-spacing: 5px;
    &:before {
      opacity: 1;
      box-shadow: 0px 0px 8px grey;
    }
  }
`

export default IndexPage
