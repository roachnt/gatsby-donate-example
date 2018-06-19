import React, { Component } from 'react'
import { cx, css } from 'emotion'
import {
  PaymentRequestButtonElement,
  injectStripe,
} from 'react-stripe-elements'

import { submitTokenAction } from '../helpers/stripeHelper'

class PaymentRequestForm extends Component {
  state = {
    canMakePayment: false,
    paymentRequest: this.paymentRequest,
  }
  // For full documentation of the available paymentRequest options, see:
  // https://stripe.com/docs/stripe.js#the-payment-request-object
  paymentRequest = this.props.stripe.paymentRequest({
    country: 'US',
    currency: 'usd',
    total: {
      label: 'Donation',
      amount: this.props.amount * 100,
    },
    requestPayerName: true,
    requestPayerEmail: true,
  })

  componentDidMount() {
    this.paymentRequest.on('token', ({ complete, token, ...data }) => {
      submitTokenAction(
        token,
        this.props.amount,
        this.props.preFetchHandler,
        this.props.successHandler,
        this.props.errorHandler
      )
      console.log('Received Stripe token: ', token)
      console.log('Received customer information: ', data)
      complete('success')
    })
    this.paymentRequest
      .canMakePayment()
      .then(result => this.setState({ canMakePayment: !!result }))
  }

  render() {
    return this.state.canMakePayment ? (
      <div
        onClick={() => {
          this.paymentRequest.update({
            total: {
              label: 'Donation',
              amount: this.props.amount * 100,
            },
          })
          this.paymentRequest.show()
        }}
        className={cx({
          [donateButtonStyle]: true,
          [donateButtonDisabledStyle]: this.state.donateButtonDisabled,
        })}
      >
        Donate
      </div>
    ) : (
      this.props.alternatePaymentComponent
    )
  }
}

export default injectStripe(PaymentRequestForm)

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
  border-radius: 5px;
  background-size: 100%;
  background-image: linear-gradient(120deg, #7c66ff, #c074fd);
  position: relative;
  z-index: 100;
  transition: 0.5s;
  &:before {
    border-radius: 5px;
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

/*  
      <PaymentRequestButtonElement
        onClick={() =>
          this.paymentRequest.update({
            total: {
              label: 'Donation',
              amount: this.props.amount * 100,
            },
          })
        }
        paymentRequest={this.paymentRequest}
        className="PaymentRequestButton"
        style={{
          paymentRequestButton: {
            type: 'donate',
            theme: 'dark',
            height: '64px',
          },
        }}
      /> */
