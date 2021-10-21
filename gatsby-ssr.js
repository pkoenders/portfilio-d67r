import * as React from 'react'

// Import our Theme and wrap in the Them Provider
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, theme } from '/src/themes/globalStyles'

// Import our Prismic Preview Provider
import { PrismicPreviewProvider } from 'gatsby-plugin-prismic-previews'

// Styling for the preview modals.
import 'gatsby-plugin-prismic-previews/dist/styles.css'
// Adds a shared React Context for Prismic preview sessions.

export const wrapPageElement = ({ element }) => (
  // export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <PrismicPreviewProvider>{element}</PrismicPreviewProvider>
  </ThemeProvider>
)
