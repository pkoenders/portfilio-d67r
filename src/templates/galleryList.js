import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SeoZone from '/src/components/slices/seoZone'
import SliceZone from '/src/components/slices/sliceZone'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import GalleryPageList from '/src/components/gallery/list/'

const GalleryTemplate = ({ data }) => {
  if (!data) return null

  const document = data.prismicGalleryPage
  const pageIntro = document.data
  const dataList = document.data.body[0]
  const primaryNav = data.prismicMainNavigation.data.nav
  const currentLang = data.prismicMainNavigation.lang

  return (
    <Layout currentLang={currentLang} primaryNav={primaryNav}>
      <SeoZone currentLang={currentLang} seoZone={document.data.body1} />
      <SliceZone sliceZone={document.data.body} />
      <GalleryPageList currentLang={currentLang} pageIntro={pageIntro} dataList={dataList} />
    </Layout>
  )
}

export default withPrismicPreview(GalleryTemplate, [
  {
    repositoryName: `${process.env.GATSBY_PRISMIC_REPO_NAME}`,
  },
])

export const query = graphql`
  query GalleryPage($uid: String, $locale: String) {
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

    prismicGalleryPage(lang: { eq: $locale }, uid: { eq: $uid }) {
      lang
      type
      uid
      id
      data {
        title {
          text
        }
        intro {
          text
          raw
        }
        show_filters
        show_input
        show_sorting
        show_tags

        body {
          ... on PrismicGalleryPageDataBodyGalleryItem {
            id
            items {
              name {
                text
              }
              item {
                id
                tags
                document {
                  ... on PrismicGalleryItem {
                    id
                    uid
                    type
                    tags
                    lang
                    data {
                      title {
                        text
                      }

                      main_image {
                        localFile {
                          childImageSharp {
                            gatsbyImageData(
                              quality: 90
                              width: 992
                              layout: CONSTRAINED
                              formats: [AUTO, WEBP, AVIF]
                              placeholder: BLURRED
                              transformOptions: { cropFocus: CENTER }
                              # aspectRatio: 1.77
                            )
                          }
                        }
                        alt
                      }
                      intro
                    }
                    id
                    uid
                    type
                    lang
                  }
                }
              }
            }
            slice_type
          }
        }
        #Page data - ends

        #SEO Start
        body1 {
          ... on PrismicGalleryPageDataBody1GeneralSeoCard {
            primary {
              title {
                text
              }
              description {
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

          ... on PrismicGalleryPageDataBody1OpenGraph {
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

          ... on PrismicGalleryPageDataBody1TwitterCard {
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
`
