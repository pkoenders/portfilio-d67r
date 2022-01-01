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
          richText
        }
        show_tags
        show_input
        show_sorting
        show_grid_layout

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
                        alt
                        gatsbyImageData(
                          width: 992
                          layout: CONSTRAINED
                          placeholder: BLURRED
                          imgixParams: {
                            q: 90
                            fm: "avif, webp"
                            nr: 100
                            dpr: 2
                            auto: "compress,enhance,format"
                          }
                        )
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
                url
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

          ... on PrismicGalleryPageDataBody1TwitterCard {
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
        #SEO - ends
      }
    }
  }
`
