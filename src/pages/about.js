import React from 'react'
import Link from 'gatsby-link'
import { css } from 'emotion'

const AboutPage = () => (
  <div
    className={css`
      height: 90vh;
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
      @media (max-width: 768px) {
        display: block;
      }
    `}
  >
    <div
      className={css`
        background-size: 100%;
        background-image: linear-gradient(120deg, #7c66ff, #c074fd);
        padding: 20px;
        border-radius: 5px;
        color: white;
        @media (max-width: 768px) {
          border-radius: 0;
        }
      `}
    >
      <h1
        className={css`
          font-family: Pacifico;
          text-align: center;
          margin: 0;
        `}
      >
        welcome to don8t!
      </h1>
      <p
        className={css`
          text-align: center;
          margin: 0;
          color: lightgreen;
        `}
      >
        <i>a proof of concept</i>
      </p>
      <div
        className={css`
          width: 750px;
          margin-top: 25px;
          line-height: 30px;
          @media (max-width: 768px) {
            width: 100%;
          }
        `}
      >
        don8t is a sample react application that uses stripe, an online
        transaction service, to accept donations over the browser in a simple
        and elegant way using the payment request api. You'll notice that don8t
        behaves a little differently when you use it on different browsers and
        devices. Stripe's use of the payment request api adapts to fit the best
        payment method for your particular situation. If the payment request api
        isn't available for some reason (e.g. maybe you're on an older or
        unsupported browser) don8t falls back to stripe's checkout
        functionality, and I think you'll find that pretty easy to work with
        too! It's important to note that the stripe account being used for this
        application is set to <Important>test mode</Important>, meaning that it{' '}
        <Important>can't</Important>and <Important>won't</Important> accept real
        debit or credit cards (Unless you use apple pay, and it still won't
        charge you!). If you want to try don8t, I suggest using one of the{' '}
        <a
          className={css`
            text-decoration: none;
            color: blue;
            transition: 0.5s;
            position: relative;
            &:after {
              transition: 0.5s;
              content: '';
              position: absolute;
              display: inline-block;
              background: blue;
              width: 0px;
              height: 2px;
              left: 0;
              right: 0;
              bottom: 0;
              margin: 0 auto;
            }
            &:hover {
              &:after {
                width: 130px;
              }
            }
          `}
          href="https://stripe.com/docs/testing"
        >
          test card numbers
        </a>, like <Important>4242 4242 4242 4242</Important>. If you use a test
        card, you can put in any expiration date and cvc number and your
        donation will be accepted. Give it a try!
      </div>
    </div>
  </div>
)

const Important = ({ children }) => (
  <b
    className={css`
      color: lightgreen;
    `}
  >
    <i>{children} </i>
  </b>
)

export default AboutPage
