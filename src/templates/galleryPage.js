import * as React from 'react'
import { graphql } from 'gatsby'

// Helpers
import { validateString } from '/src/utils/helpers'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'

// Layout
import Layout from '../components/layout'
import SeoZone from '/src/components/slices/seoZone'
import GalleryItem from '../components/gallery/item'
import SecondaryNav from '../components/common/secondaryNav'

const GalleryItemTemplate = ({ data, pageContext }) => {
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

  const document = data.allPrismicGalleryItem.edges[0].node
  // const dataList = document.data.body[0]
  const primaryNav = data.prismicMainNavigation.data.nav
  const currentLang = data.prismicMainNavigation.lang

  return (
    <Layout currentLang={currentLang} primaryNav={primaryNav}>
      <SeoZone currentLang={currentLang} seoZone={document.data.body} />
      <SecondaryNav
        currentLang={currentLang}
        next={next}
        nextTitle={nextTitle}
        previous={previous}
        previousTitle={previousTitle}
      />{' '}
      <GalleryItem itemData={document} />
    </Layout>
  )
}

export default withPrismicPreview(GalleryItemTemplate, [
  {
    repositoryName: `${process.env.GATSBY_PRISMIC_REPO_NAME}`,
  },
])

export const query = graphql`
  query GalleryItemQuery($uid: String, $locale: String) {
    ##
    ##Main navigation
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
              }
            }
            items {
              sub_nav_link {
                uid
                type
                lang
              }
              sub_nav_link_label {
                text
              }
            }
          }
        }
      }
    }
    ##
    ## End main navigtion

    allPrismicGalleryItem(filter: { lang: { eq: $locale }, uid: { eq: $uid } }) {
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
          alternate_languages {
            lang
            uid
            type
            id
          }

          tags
          data {
            #Template data
            title {
              text
            }
            creation_date(formatString: "MMMM YYYY")
            intro
            description {
              raw
            }
            link {
              url
            }
            width
            height
            main_image {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    quality: 90
                    breakpoints: [768, 992, 1200, 1366]
                    layout: CONSTRAINED
                    formats: [AUTO, WEBP]
                    placeholder: BLURRED
                    transformOptions: { cropFocus: CENTER }
                  )
                }
              }
              #alt
            }

            body1 {
              ... on PrismicGalleryItemDataBody1ImageList {
                items {
                  image {
                    localFile {
                      childImageSharp {
                        gatsbyImageData(
                          quality: 90
                          breakpoints: [768, 992, 1200, 1366]
                          layout: CONSTRAINED
                          formats: [AUTO, WEBP]
                          placeholder: BLURRED
                          transformOptions: { cropFocus: CENTER }
                        )
                      }
                    }
                  }
                }
                slice_type
              }
            }

            #Template data - ends

            #SEO Start
            body {
              ... on PrismicGalleryItemDataBodyGeneralSeoCard {
                primary {
                  description {
                    text
                  }
                  title {
                    text
                  }
                  image {
                    localFile {
                      publicURL
                    }
                  }
                }
                slice_type
              }

              ... on PrismicGalleryItemDataBodyOpenGraph {
                primary {
                  availability
                  currency
                  description {
                    text
                  }
                  image {
                    localFile {
                      publicURL
                    }
                  }
                  price
                  title {
                    text
                  }
                  type
                }
                slice_type
              }

              ... on PrismicGalleryItemDataBodyTwitterCard {
                primary {
                  description {
                    text
                  }
                  image {
                    localFile {
                      publicURL
                    }
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
            #SEO - ends
          }
        }
      }
    }
  }
`
