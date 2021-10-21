import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SeoZone from '/src/components/slices/seoZone'
import SliceZone from '/src/components/slices/sliceZone'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
// import { linkResolver } from '../utils/linkResolver'

const HomeTemplate = ({ data, location }) => {
  //Validate data for Gastby Build Gatsby Build breaks here for Deleate / createPages  - see  https://github.com/birkir/gatsby-source-prismic-graphql/issues/174
  const primaryNavData = data.allPrismicMainNavigation.edges.slice(0, 1).pop()

  if (!data || !primaryNavData) return null

  const document = data.prismicHomepage

  const primaryNav = primaryNavData.node.data.nav
  const currentLang = primaryNavData.node.lang

  return (
    <Layout currentLang={currentLang} primaryNav={primaryNav}>
      <SeoZone currentLang={currentLang} seoZone={document.data.body1} />
      <SliceZone location={location} sliceZone={document.data.body} />
    </Layout>
  )
}

// export default HomeTemplate

export default withPrismicPreview(HomeTemplate, [
  {
    repositoryName: `${process.env.GATSBY_PRISMIC_REPO_NAME}`,
    // linkResolver,
  },
])

export const query = graphql`
  query Homepage($locale: String) {
    sitePlugin(name: { eq: "gatsby-plugin-prismic-previews" }) {
      pluginOptions {
        repositoryName
      }
    }

    ## Get the main nav in local context
    allPrismicMainNavigation(filter: { lang: { eq: $locale } }) {
      edges {
        node {
          type
          lang
          id
          data {
            nav {
              ... on PrismicMainNavigationDataNavNavItem {
                id
                primary {
                  link {
                    uid
                    type
                    lang
                  }
                  label {
                    text
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
      }
    }

    prismicHomepage(lang: { eq: $locale }) {
      lang
      type
      uid
      id
      _previewable

      alternate_languages {
        lang
        uid
        type
        id
      }

      data {
        # Page data
        body {
          ##
          ## Hero image
          ... on PrismicHomepageDataBodyHeroImage {
            slice_type
            primary {
              title {
                text
                raw
              }
              description {
                raw
              }
              button_label
              button_link {
                raw
                uid
                type
                lang
              }
              button_style
              button_icon
              button_icon_align
              secondary_button_label
              secondary_button_link {
                raw
                uid
                type
                lang
              }
              secondary_button_style
              secondary_button_icon
              secondary_button_icon_align
              align_content
              vertical_align_content
              width
              height
              v_height
              default_margin
              margin_bottom
              margin_top
              overlay_from
              overlay_from_opacity
              overlay_to
              overlay_to_opacity
              overlay_direction
              align_image
              image {
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      quality: 80
                      layout: FULL_WIDTH
                      transformOptions: { fit: COVER, cropFocus: ATTENTION }
                      placeholder: BLURRED
                      formats: [AUTO, WEBP, AVIF]
                    )
                  }
                }
              }
            }
          }

          ##
          ## Body text
          ... on PrismicHomepageDataBodyText {
            id
            slice_type
            primary {
              default_padding
              v_padding_top
              v_padding_bottom
              background_color
              background_tint
              font_sizing
              text_alignment
              width
              columns
              animate_scroll
              content {
                text
                raw
              }
              button_alignment
              button_label
              button_link {
                raw
                uid
                type
                lang
              }
              button_style
              button_icon
              button_icon_align
              secondary_button_label
              secondary_button_link {
                raw
                uid
                type
                lang
              }
              secondary_button_style
              secondary_button_icon
              secondary_button_icon_align
              button_alignment
            }
          }

          ##
          ## Body quote
          ... on PrismicHomepageDataBodyQuote {
            id
            slice_type
            primary {
              title {
                text
                raw
              }
              width
              default_padding
              v_padding_top
              v_padding_bottom
              background_color
              background_tint
            }
            items {
              title
              content {
                text
                raw
              }
              active
            }
          }

          ##
          ## Card items
          ... on PrismicHomepageDataBodyCards {
            slice_type
            id
            primary {
              card_title {
                raw
                text
              }
              align
              presentation_type
              width
              default_padding
              v_padding_top
              v_padding_bottom
              background_color
              background_tint
              animate_scroll
            }
            items {
              format
              title
              description {
                raw
                text
              }
              link_label {
                text
              }
              link {
                link_type
                type
                lang
                uid
              }
              image {
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      ## aspectRatio: 1.777777
                      quality: 80
                      width: 564
                      layout: CONSTRAINED
                      formats: [AUTO, WEBP, AVIF]
                      placeholder: BLURRED
                      transformOptions: { cropFocus: ATTENTION }
                    )
                  }
                }
              }
            }
          }

          ##
          ## Media Highlight (Position shared media to top, left, bottom, right)
          ... on PrismicHomepageDataBodyMediaHighlight {
            primary {
              content {
                text
                raw
              }
              button_label
              button_link {
                raw
                uid
                type
                lang
              }
              button_style
              button_icon
              button_icon_align
              secondary_button_label
              secondary_button_link {
                raw
                uid
                type
                lang
              }
              secondary_button_style
              secondary_button_icon
              secondary_button_icon_align
              font_size
              align_content
              width
              default_padding
              v_padding_top
              v_padding_bottom
              background_color
              background_tint

              ## Shared media paramerters
              position_media
              media_size
              animate_scroll

              ## Add shared media item

              add_media {
                document {
                  ... on PrismicSharedContent {
                    data {
                      body {
                        ## Image
                        ... on PrismicSharedContentDataBodyImage {
                          slice_type
                          primary {
                            image {
                              localFile {
                                childImageSharp {
                                  gatsbyImageData(
                                    aspectRatio: 1.777777
                                    quality: 80
                                    #width:735,
                                    #layout: CONSTRAINED,
                                    layout: FULL_WIDTH
                                    formats: [AUTO, WEBP, AVIF]
                                    placeholder: BLURRED
                                    transformOptions: { cropFocus: CENTER }
                                  )
                                }
                              }
                            }
                          }
                        }
                        ## End image

                        ## Embedded cloud media
                        ... on PrismicSharedContentDataBodyEmbeddedCloudMedia {
                          slice_type
                          primary {
                            media
                            name {
                              text
                            }
                          }
                        }
                        ## End Embedded media

                        ## Text
                        ... on PrismicSharedContentDataBodyText {
                          slice_type
                          primary {
                            text {
                              raw
                            }
                          }
                        }
                        ## End Text

                        ## Geopoint
                        ... on PrismicSharedContentDataBodyGeopoint {
                          slice_type
                          primary {
                            description {
                              raw
                              text
                            }
                            geopoint {
                              latitude
                              longitude
                            }
                            name {
                              text
                            }
                            zoom_level
                          }
                        }
                        ## End Geopoint

                        ## Alert
                        ... on PrismicSharedContentDataBodyAlertBanner {
                          slice_type
                          id
                          primary {
                            content {
                              raw
                              text
                            }
                            width
                            align
                            expiry_date
                            level
                            user_can_close
                            button_label
                            button_link {
                              raw
                              uid
                              type
                              lang
                            }
                            button_icon
                            button_icon_align
                            secondary_button_label
                            secondary_button_link {
                              raw
                              uid
                              type
                              lang
                            }
                            secondary_button_style
                            secondary_button_icon
                            secondary_button_icon_align
                          }
                        }
                        ## End Alert
                      }
                    }
                  }
                }
              }
              ## End - Shared content
            }
            id
            slice_type
          }
          ##
          ## End media highlight

          ##
          ## Form select
          ... on PrismicHomepageDataBodyForm {
            id
            slice_type
            primary {
              content {
                raw
                text
              }
              width
              default_padding
              v_padding_top
              v_padding_bottom
              background_color
              background_tint
              select_form {
                document {
                  ##
                  ## Form
                  ... on PrismicForms {
                    data {
                      form_name {
                        text
                      }
                      from_content {
                        raw
                      }
                      body {
                        ## Button
                        ... on PrismicFormsDataBodyButton {
                          id
                          slice_type
                          primary {
                            button_type
                            button_name {
                              text
                            }
                          }
                        }

                        ## Text area
                        ... on PrismicFormsDataBodyTextAreaInput {
                          id
                          slice_type
                          primary {
                            required
                            field_name {
                              text
                            }
                          }
                        }

                        ## Text input
                        ... on PrismicFormsDataBodyTextInput {
                          id
                          slice_type
                          primary {
                            required
                            field_type
                            field_name {
                              text
                            }
                          }
                        }

                        ## Rich text area
                        ... on PrismicFormsDataBodyRichText {
                          id
                          slice_type
                          primary {
                            align_with_input
                            text {
                              text
                              raw
                            }
                          }
                        }

                        ## Checkbox
                        ... on PrismicFormsDataBodyCheckbox {
                          id
                          slice_type
                          primary {
                            title {
                              text
                            }
                            required
                            align
                          }
                          items {
                            item {
                              text
                            }
                          }
                        }

                        ## Radio buttons
                        ... on PrismicFormsDataBodyRadioButton {
                          id
                          slice_type
                          items {
                            item {
                              text
                            }
                          }
                          primary {
                            title {
                              text
                            }
                            required
                            align
                          }
                        }

                        ## Select list
                        ... on PrismicFormsDataBodySelectList {
                          id
                          items {
                            item {
                              text
                            }
                          }
                          primary {
                            title {
                              text
                            }
                            required
                          }
                          slice_type
                        }
                      }
                    }
                  }
                  ##
                  ## End form
                }
              }
            }
          }
          ##
          ## End form select

          ##
          ## Styled list
          ... on PrismicHomepageDataBodyStyledList {
            id
            slice_type
            items {
              uncheck
              item {
                raw
                text
              }
            }
            primary {
              width
              list_type
              font_size
              default_padding
              v_padding_bottom
              v_padding_top
              theme
              background_color
              background_tint
            }
          }

          ##
          ## Static component
          ... on PrismicHomepageDataBodyStaticComponent {
            primary {
              component_name
            }
            slice_type
          }
        }
        ##
        ## Page data - ends

        ##
        ## SEO Start
        body1 {
          ... on PrismicHomepageDataBody1GeneralSeoCard {
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

          ... on PrismicHomepageDataBody1OpenGraph {
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

          ... on PrismicHomepageDataBody1TwitterCard {
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
