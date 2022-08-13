import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

const HTMLHeader = ({ currentLang }) => (
  <StaticQuery
    query={`${SEOquery}`}
    render={(data) => {
      const metaTitle = data.site.siteMetadata.title

      return (
        <Helmet>
          {/* set lang - default 'en-nz' */}
          <html lang={currentLang ? currentLang : 'en-nz'} />
          {/* set default title */}
          <title>{metaTitle}</title>
          <meta
            name="google-site-verification"
            content="IEc3M4dn1WAD587hXAeNTEion1kcNSPTrC7CUAcGo74"
          />

          {/* Add Google fonts - Pre connect warm-up */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Bitter:wght@500&family=Merriweather&family=Roboto+Flex:opsz,wght,GRAD@8..144,300,0;8..144,400,100;8..144,500,0;8..144,600,0&display=swap"
            rel="stylesheet"
          />
        </Helmet>
      )
    }}
  />
)

export default HTMLHeader

const SEOquery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
