import * as React from 'react'
// Import our Theme and wrap in the Them Provider
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, theme } from '/src/themes/globalStyles'

// Import our Prismic Preview Provider
import { PrismicPreviewProvider } from 'gatsby-plugin-prismic-previews'

// const React = require('react')
// const Layout = require('./src/components/layout')

// Styling for the preview modals.
// import 'gatsby-plugin-prismic-previews/dist/styles.css'
// Adds a shared React Context for Prismic preview sessions.

// Provide an update message
// export const onServiceWorkerUpdateReady = () => {
//   const answer = window.confirm(
//     'This application has been updated. Reload to display the latest version?'
//   )
//   if (answer === true) {
//     window.location.reload()
//   }
// }

export const wrapPageElement = ({ element }) => (
  // export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <PrismicPreviewProvider>{element}</PrismicPreviewProvider>
  </ThemeProvider>
)
