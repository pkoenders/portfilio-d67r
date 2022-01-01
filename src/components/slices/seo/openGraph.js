import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

const SEOOpenGraph = ({ slice }) => (
  <StaticQuery
    query={`${SEOquery}`}
    render={(data) => {
      const metaTitle = slice.primary.title.text
        ? `${slice.primary.title.text} | ${data.site.siteMetadata.title}`
        : data.site.siteMetadata.title

      return (
        <Helmet>
          {/* Open Graph data */}

          {/* <meta property="og:site_name" content="Site Name, i.e. Moz" /> */}
          {/* <meta property="og:url" content="http://www.example.com/" /> */}

          {slice.primary.title.text && <meta property="og:title" content={metaTitle} />}

          {slice.primary.type && <meta property="og:type" content={slice.primary.type} />}

          {slice.primary.image.url && (
            <meta property="og:image" content={slice.primary.image.url} />
          )}

          {slice.primary.description.text && (
            <meta property="og:description" content={slice.primary.description.text} />
          )}

          {/* <meta property="article:published_time" content="2014-08-12T00:01:56+00:00" /> */}

          {slice.primary.availability && (
            <meta property="og:availability" content={slice.primary.availability} />
          )}

          {slice.primary.price && (
            <meta property="product:price:amount" content={slice.primary.price} />
          )}

          {slice.primary.currency && (
            <meta property="product:price:currency" content={slice.primary.currency} />
          )}

          {/* <meta property="fb:admins" content="Facebook numeric ID" /> */}
        </Helmet>
      )
    }}
  />
)

export default SEOOpenGraph

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
