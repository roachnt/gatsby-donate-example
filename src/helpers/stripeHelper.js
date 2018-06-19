export const submitTokenAction = (
  token,
  amount,
  preFetchAction,
  successHandler,
  errorHandler
) => {
  preFetchAction()
  fetch('https://donation-backend-nfwxafrjhw.now.sh/donate', {
    method: 'POST', // or 'PUT'
    body: JSON.stringify({ token, amount }), // data can be `string` or {object}!
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(json => successHandler(json))
    .catch(err => errorHandler(err))
}

export const stripeCheckoutConfig = (
  amount,
  preFetchAction,
  checkoutSuccessHandler,
  checkoutErrorHandler
) =>
  StripeCheckout.configure({
    key: 'your-stripe-key',
    image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
    locale: 'auto',
    token: token => {
      preFetchAction()
      fetch('https://donation-backend-nfwxafrjhw.now.sh/donate', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify({ token, amount }), // data can be `string` or {object}!
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => res.json())
        .then(json => checkoutSuccessHandler(json))
        .catch(err => checkoutErrorHandler(err))
    },
  })

export const paymentRequestConfig = {
  country: 'US',
  currency: 'usd',
  total: {
    label: 'Donation',
    amount: this.props.amount * 100,
  },
  requestPayerName: true,
  requestPayerEmail: true,
}
