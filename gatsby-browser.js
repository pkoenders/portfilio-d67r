import * as React from 'react'
// Import our Prismic Preview Provider
import { PrismicPreviewProvider } from 'gatsby-plugin-prismic-previews'

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
  <PrismicPreviewProvider>{element}</PrismicPreviewProvider>
)
