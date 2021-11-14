import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SeoZone from '/src/components/slices/seoZone'
import SliceZone from '/src/components/slices/sliceZone'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import BlogList from '/src/components/blog/list/'

const BlogListTemplate = ({ data }) => {
  if (!data) return null

  const document = data.prismicBlogList
  const pageIntro = document.data
  const dataList = document.data.body[0]
  const primaryNav = data.prismicMainNavigation.data.nav
  const currentLang = data.prismicMainNavigation.lang

  return (
    <Layout currentLang={currentLang} primaryNav={primaryNav}>
      <SeoZone currentLang={currentLang} seoZone={document.data.body1} />
      <SliceZone sliceZone={document.data.body} />
      <BlogList currentLang={currentLang} pageIntro={pageIntro} dataList={dataList} />
    </Layout>
  )
}

export default withPrismicPreview(BlogListTemplate, [
  {
    repositoryName: `${process.env.GATSBY_PRISMIC_REPO_NAME}`,
  },
])

export const query = graphql`
  query BlogList($uid: String, $locale: String) {
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
    ## End main navigtion
    ##

    ##
    ## Blog list
    prismicBlogList(lang: { eq: $locale }, uid: { eq: $uid }) {
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
          ... on PrismicBlogListDataBodyBlogItems {
            slice_type
            items {
              item {
                id
                tags
                document {
                  ... on PrismicBlogPost {
                    id
                    uid
                    type
                    tags
                    lang
                    data {
                      title {
                        text
                      }
                      intro
                      release_date(formatString: "DD MMMM YYYY")
                    }
                  }
                }
              }
            }
          }
        }
        ## Blog list - ends
        ##

        ##
        ## SEO Start
        body1 {
          ... on PrismicBlogListDataBody1GeneralSeoCard {
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

          ... on PrismicBlogListDataBody1OpenGraph {
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

          ... on PrismicBlogListDataBody1TwitterCard {
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
        ## SEO - ends
        ##
      }
    }
  }
`
