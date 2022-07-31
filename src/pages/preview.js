import * as React from 'react'
import { withPrismicPreviewResolver } from 'gatsby-plugin-prismic-previews'
import { linkResolver } from '/src/utils/linkResolver'

const PreviewPage = () => {
  return (
    <div>
      <h1>Loading preview…</h1>
    </div>
  )
}

export default withPrismicPreviewResolver(PreviewPage, [
  {
    // repositoryName: 'mlmv',
    repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
    linkResolver,
    // linkResolver: () => linkResolver,
  },
])
