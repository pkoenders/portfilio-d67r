import * as React from 'react'
import { graphql } from 'gatsby'

// Helpers
import { validateString } from '/src/utils/helpers'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'

// Layout
import Layout from '/src/components/layout'
import HTMLHeader from '/src/components/common/htmlheader/'
import SeoZone from '/src/components/slices/seoZone'
import BlogPost from '/src/components/blog/item'
import SecondaryNav from '/src/components/common/secondaryNav'

const BlogPostTemplate = ({ data, pageContext }) => {
  if (!data) return null

  const { next, previous } = pageContext
  // Validate and create Next title
  var nextTitle
  if (!next) {
    nextTitle = null
  } else {
    nextTitle = validateString(next.data.title.text)
  }

  // Validate and create Previous title
  var previousTitle
  if (!previous) {
    previousTitle = null
  } else {
    previousTitle = validateString(previous.data.title.text)
  }

  const document = data.allPrismicBlogPost.edges[0].node
  // const dataList = document.data.body[0]
  const primaryNav = data.prismicMainNavigation.data.nav
  const currentLang = data.prismicMainNavigation.lang

  return (
    <Layout currentLang={currentLang} primaryNav={primaryNav}>
      <HTMLHeader currentLang={currentLang} />
      <SeoZone seoZone={document.data.body1} />
      <SecondaryNav
        currentLang={currentLang}
        next={next}
        nextTitle={nextTitle}
        previous={previous}
        previousTitle={previousTitle}
      />
      <BlogPost itemData={document} />
    </Layout>
  )
}

export default withPrismicPreview(BlogPostTemplate, [
  {
    repositoryName: `${process.env.GATSBY_PRISMIC_REPO_NAME}`,
  },
])

export const query = graphql`
  query BlogPostQuery($uid: String, $locale: String) {
    ##
    ## Main navigation
    prismicMainNavigation(lang: { eq: $locale }) {
      _previewable
      type
      lang
      data {
        nav {
          ... on PrismicMainNavigationDataNavNavItem {
            id
            primary {
              label {
                text
              }
              link {
                uid
                lang
                type
                raw
              }
            }
            items {
              sub_nav_link {
                uid
                type
                lang
                raw
              }
              sub_nav_link_label {
                text
              }
            }
          }
        }
      }
    }
    ## End main navigtion
    ##

    ##
    ## Blog post starts
    allPrismicBlogPost(filter: { lang: { eq: $locale }, uid: { eq: $uid } }) {
      edges {
        next {
          uid
          type
          lang
          data {
            title {
              text
            }
          }
        }
        previous {
          uid
          type
          lang
          data {
            title {
              text
            }
          }
        }
        node {
          lang
          type
          uid
          id

          ## _previewable
          ## Page data
          data {
            title {
              text
            }
            release_date(formatString: "DD MMMM YYYY")
            body {
              ... on PrismicBlogPostDataBodyTextBlog {
                id
                primary {
                  text {
                    richText
                  }
                }
                slice_type
              }

              ... on PrismicBlogPostDataBodyImageBlog {
                slice_type
                primary {
                  image {
                    alt
                    gatsbyImageData(
                      width: 992
                      layout: CONSTRAINED
                      placeholder: BLURRED
                      imgixParams: {
                        q: 90
                        fm: "jpg, avif, webp"
                        nr: 100
                        dpr: 2
                        auto: "compress,enhance,format"
                      }
                    )
                  }
                }
              }

              ... on PrismicBlogPostDataBodyQuoteBlog {
                id
                primary {
                  quote {
                    richText
                  }
                  reference
                  reference_url {
                    raw
                    url
                  }
                }
                slice_type
              }

              ... on PrismicBlogPostDataBodyReferences {
                slice_type
                primary {
                  references {
                    richText
                  }
                }
              }
            }
            ## Blog post - ends
            ##

            ##
            ## SEO Start
            body1 {
              ... on PrismicBlogPostDataBody1GeneralSeoCard {
                primary {
                  description {
                    text
                  }
                  title {
                    text
                  }
                  image {
                    url
                  }
                }
                slice_type
              }

              ... on PrismicBlogPostDataBody1OpenGraph {
                primary {
                  availability
                  currency
                  description {
                    text
                  }
                  image {
                    url
                  }
                  price
                  title {
                    text
                  }
                  type
                }
                slice_type
              }

              ... on PrismicBlogPostDataBody1TwitterCard {
                primary {
                  description {
                    text
                  }
                  image {
                    url
                  }
                  card_type
                  twitter_handle
                  title {
                    text
                  }
                }
                slice_type
              }
            }
            ## SEO - ends
            ##
          }
        }
      }
    }
  }
`
