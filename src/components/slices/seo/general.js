import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

const SEOGeneral = ({ slice }) => (
  <StaticQuery
    query={`${SEOquery}`}
    render={(data) => {
      const metaTitle = slice.primary.title.text
        ? `${slice.primary.title.text} | ${data.site.siteMetadata.title}`
        : data.site.siteMetadata.title

      return (
        <Helmet>
          {/* Page Title. Maximum length 60-70 characters */}
          {/* <script
            async
            defer
            src="https://static.cdn.prismic.io/prismic.js?new=true&repo=mlmv"
          ></script> */}
          <title>{metaTitle}</title>

          <meta
            name="google-site-verification"
            content="OeOzruvqni3pGyA2GZn_UZLmsY8AP8itjoCLA3ncwsY"
          />

          {/* Page description. No longer than 155 characters. */}
          {slice.primary.description.text ? (
            <meta name="description" content={slice.primary.description.text} />
          ) : (
            <meta name="description" content={data.site.siteMetadata.description} />
          )}

          {slice.primary.image.url && <meta name="image" content={slice.primary.image.url} />}
        </Helmet>
      )
    }}
  />
)

export default SEOGeneral

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
