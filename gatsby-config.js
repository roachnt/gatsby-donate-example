module.exports = {
  siteMetadata: {
    title: 'Don8t',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-stripe-elements',
    'gatsby-plugin-stripe-checkout',
    'gatsby-plugin-well-known',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
  ],
}
