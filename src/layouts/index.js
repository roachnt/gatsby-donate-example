import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { injectGlobal, css } from 'emotion'
import { StripeProvider, injectStripe } from 'react-stripe-elements'

import Header from '../components/header'

injectGlobal`
  body, html {height: 100%; margin: 0;}
  body {
    background-repeat: no-repeat;
    font-family: Capriola;
  }
`

class Layout extends React.Component {
  state = {
    rendered: false,
  }

  componentDidMount() {
    this.setState({ rendered: true })
  }
  render = () => (
    <div>
      <Helmet
        title={this.props.data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Donation website' },
          { name: 'keywords', content: 'donation, funding, money' },
        ]}
        link={[
          {
            href: 'https://fonts.googleapis.com/css?family=Pacifico',
            rel: 'stylesheet',
          },
          {
            href: 'https://fonts.googleapis.com/css?family=Capriola',
            rel: 'stylesheet',
          },
          {
            rel: 'icon',
            type: 'image/png',
            href: '../static/favicon.ico',
            sizes: '16x16',
          },
        ]}
      />
      <div
        className={css`
          height: 100vh;
        `}
      >
        <Header siteTitle={this.props.data.site.siteMetadata.title} />
        {this.state.rendered ? (
          <StripeProvider apiKey="pk_test_cfwyi1i2UVURudxM3G3lKieh">
            {this.props.children()}
          </StripeProvider>
        ) : (
          <div />
        )}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
