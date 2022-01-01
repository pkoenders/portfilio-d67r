import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

const SEOTwitter = ({ slice }) => (
  <StaticQuery
    query={`${SEOquery}`}
    render={(data) => {
      const metaTitle = slice.primary.title.text
        ? `${slice.primary.title.text} | ${data.site.siteMetadata.title}`
        : data.site.siteMetadata.title

      return (
        <Helmet>
          {/* Twitter Card data */}
          {/* The card type, which will be one of “summary”, “summary_large_image”, “app”, or “player”. */}
          {slice.primary.card_type && (
            <meta name="twitter:card" content={slice.primary.card_type} />
          )}

          {/* @publisher_handle */}
          {slice.primary.twitter_handle && (
            <meta name="twitter:site" content={slice.primary.twitter_handle} />
          )}

          {/* Maximum length 60-70 characters */}
          {slice.primary.title.text && <meta name="twitter:title" content={metaTitle} />}

          {/* Page description less than 200 characters */}
          {slice.primary.description.text && (
            <meta name="twitter:description" content={slice.primary.description.text} />
          )}

          {/* <meta name="twitter:creator" content="@author_handle" /> */}

          {/* Twitter Summary card images must be at least 120x120px */}
          {slice.primary.image.url && (
            <meta name="twitter:image" content={slice.primary.image.url} />
          )}
        </Helmet>
      )
    }}
  />
)

export default SEOTwitter

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
