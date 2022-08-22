import React, { useEffect, useState } from 'react'

//Helpers
import { GatsbyImage } from 'gatsby-plugin-image'
import { gsap, Power3 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import linkResolver from '../../../utils/linkResolver'
import { RichText } from 'prismic-reactjs'

// Laout
import GoogleMap from '/src/components/common/maps'
import YouTube from '/src/components/common/video/youtube'
import Alert from '/src/components/slices/alert'

// Buttons
import Button from '/src/components/common/buttons/linkButton'

import {
  validateString,
  getStyle,
  getContentWidth,
  getPostionAlign,
  getAutoSpacing,
  getManualSpacing,
  getBgColor,
  getColorTint,
  getRgb2Hex,
  getContrast,
  getPercentage,
  getFontSize,
  getLineHeight,
  getZoomLevel,
  getImgFormat,
} from '/src/utils/helpers'

import styled from 'styled-components'
// import { Form } from 'react-final-form'

const Highlight = styled.section`
  display: flex;
  z-index: 10000;

  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    margin: 0;
    padding-top: 0 !important;
    .content {
      padding: 0 ${({ theme }) => theme.padding['1/2']};
    }
  }

  > div {
    display: flex;
    /* width: 100%; */
    margin: 0 auto;
    padding: 0;
    align-items: center;
    flex-direction: row;
    flex-grow: 1;
    flex-basis: 0;
    grid-gap: ${({ theme }) => theme.padding['4xl']};

    @media (max-width: ${({ theme }) => theme.screens.sm}) {
      flex-direction: column-reverse;
      grid-gap: ${({ theme }) => theme.padding['1/2']};
    }

    .content {
      width: 100%;
      align-items: center;

      .textBlock {
        aspect-ratio: auto;
        padding-left: ${({ theme }) => theme.padding['1/2']};
        padding-right: ${({ theme }) => theme.padding['1/2']};
      }

      span.cta {
        font-size: initial;
        display: flex;
        grid-gap: ${({ theme }) => theme.padding['1/2']};
        width: fit-content;

        @media (max-width: ${({ theme }) => theme.screens.sm}) {
          flex-direction: column;
          margin-top: ${({ theme }) => theme.margin['1/2']};
          span {
            margin: 0;
          }
        }
      }
    }

    .media {
      /* display: contents; */
      display: block;

      .imageWrapper {
        /* width: 100%; */
        display: contents;
        > div {
          width: 100%;
        }
      }
    }

    .imageWrapper.landscape {
      > div {
        aspect-ratio: 16/9;
      }
    }

    .imageWrapper.portrait {
      > div {
        aspect-ratio: 3/4;
      }
    }

    .imageWrapper.square,
    .imageWrapper.attention {
      > div {
        aspect-ratio: 1;
        margin: 0 ${({ theme }) => theme.padding['1/2']};
        @media (max-width: ${({ theme }) => theme.screens.sm}) {
          margin: ${({ theme }) => theme.margin.default} auto 0 auto;
        }
      }
    }

    .imageWrapper.attention {
      > div {
        z-index: 0;
        border-radius: 999rem;
        box-shadow: ${({ theme }) => theme.boxShadow.outlineRight};
        width: auto;

        @media (max-width: ${({ theme }) => theme.screens.sm}) {
          margin: 0 ${({ theme }) => theme.margin['4xl']};
          margin-bottom: ${({ theme }) => theme.margin['1/2']};
        }
      }
    }

    .content.txt-left {
      text-align: left;

      .btn {
        margin-left: 0;
      }
    }

    .content.txt-right {
      text-align: right;

      span.cta {
        margin-left: auto;
      }
    }

    .content.txt-center {
      text-align: center;

      span.cta {
        margin-right: auto;
        margin-left: auto;
        /* @media (max-width: ${({ theme }) => theme.screens.sm}) {
          margin-left: 0;
        } */
      }
    }

    .content,
    .content.txt-left,
    .content.txt-right,
    .content.txt-center {
      @media (max-width: ${({ theme }) => theme.screens.sm}) {
        text-align: left;

        span.cta {
          margin-left: 0;
        }
      }
    }
  }

  &.media-right {
    > div {
      .content {
        padding-left: ${({ theme }) => theme.padding['1/2']};
      }
      @media (max-width: ${({ theme }) => theme.screens.sm}) {
        flex-direction: column-reverse;
        .content {
          padding: ${({ theme }) => theme.padding['1/2']};
          padding-top: 0px;
        }
      }
    }
  }

  &.media-left {
    > div {
      flex-direction: row-reverse;
      @media (max-width: ${({ theme }) => theme.screens.sm}) {
        flex-direction: column-reverse;
        .content {
          padding: ${({ theme }) => theme.padding['1/2']};
          padding-top: 0px;
        }
      }

      .content {
        padding-right: ${({ theme }) => theme.padding['1/2']};
      }
    }
  }

  &.media-top,
  &.media-bottom {
    > div {
      flex-direction: column-reverse;
      grid-gap: ${({ theme }) => theme.padding.default};

      .content {
        padding: 0 ${({ theme }) => theme.padding.default} 0;
      }

      @media (max-width: ${({ theme }) => theme.screens.sm}) {
        grid-gap: ${({ theme }) => theme.padding['1/2']};
        .content {
          padding: ${({ theme }) => theme.padding['1/2']};
          padding-top: 0px;
        }
      }
    }
  }

  &.media-bottom {
    > div {
      flex-direction: column;
    }
  }

  &.media-left,
  &.media-right,
  &.media-top,
  &.media-bottom {
    @media (max-width: ${({ theme }) => theme.screens.sm}) {
      /* padding-left: 0px;
        padding-right: 0px; */
      padding: 0px !important;

      div {
        .content {
          padding: ${({ theme }) => theme.padding['1/2']};
          padding-top: 0px;
          font-size: 100% !important;
          margin-bottom: 0px;
        }

        .media {
          .textBlock {
            padding-left: ${({ theme }) => theme.padding['1/2']};
            padding-right: ${({ theme }) => theme.padding['1/2']};
          }

          padding: 0;
          width: 100% !important;
          min-width: 100%;
          min-width: 100%;
        }
      }
    }
  }
`

const ImageHighlight = ({ slice }) => {
  // Set up the section with an id and some classes and styles
  // Add a page ID to reference
  const sectionID = slice.id
  // Set the content width class
  const sectionWidth = getContentWidth(slice.primary.width)
  // Set default contrast color class
  const setContrast = 'light'
  // Set the bgColor class
  var bgColor = getBgColor(slice.primary.background_color)
  const bGroundTint = getColorTint(slice.primary.background_tint)
  bgColor === 'page'
    ? (bgColor = 'background-' + bgColor)
    : (bgColor = 'background-' + bgColor + '-' + bGroundTint)
  // Set the vertical padding - inline style
  const defaultPadding = getAutoSpacing(slice.primary.default_padding)
  var vPaddingTop = getManualSpacing(slice.primary.v_padding_top)
  var vPaddingBottom = getManualSpacing(slice.primary.v_padding_bottom)
  if (vPaddingTop === null) {
    vPaddingTop = defaultPadding + 'px'
  }
  if (vPaddingBottom === null) {
    vPaddingBottom = defaultPadding + 'px'
  }

  // Set the state of the forGroundColor
  const [forGroundColor, setForgroundColor] = useState(setContrast)
  // Find the current bground color of the section and update the forground color class
  useEffect(() => {
    var objBground = document.getElementById(`${sectionID}`)
    let bgColor = window.getComputedStyle(objBground).backgroundColor
    // Convert it a hex value
    bgColor = getRgb2Hex(bgColor)

    // If there is a bGround color - return the contrast mode  - 'dark' or 'light'
    let updateContrast
    bgColor !== '#00000000' ? (updateContrast = getContrast(bgColor)) : (updateContrast = '')

    // Update contrast color and set it as a class in the section
    setForgroundColor(updateContrast)
    // Disable warinings of missing dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Validate content
  const content = validateString(slice.primary.content.richText)

  // Validate primary button
  const primaryButtonLabel = validateString(slice.primary.button_label)
  const primaryButtonLink = slice.primary.button_link.raw
  const primaryButtonStyle = getStyle(slice.primary.button_style)
  const primaryButtonIcon = slice.primary.button_icon
  const primaryButtonIconAlign = getPostionAlign(slice.primary.button_icon_align)

  // Validate secondary button label
  const secondaryButtonLabel = validateString(slice.primary.secondary_button_label)
  const secondaryButtonLink = slice.primary.secondary_button_link.raw
  const secondaryButtonStyle = getStyle(slice.primary.secondary_button_style)
  const secondaryButtonIcon = slice.primary.secondary_button_icon
  const secondaryButtonIconAlign = getPostionAlign(slice.primary.secondary_button_icon_align)

  // Horizontal align content - left, center, right (To do: top, bottom?)
  const alignContent = getPostionAlign(slice.primary.align_content)

  // Font sizing
  const fontSize = getFontSize(slice.primary.font_size)

  // Line height
  const lineHeight = getLineHeight(slice.primary.font_size)

  // Position media - top, left, bottom, right
  const positionMedia = getPostionAlign(slice.primary.position_media)

  // Image sizing (scale width)
  const mediaSize = getPercentage(slice.primary.media_size)

  // What kind of media to add if any has been chosen. Will display none if null
  if (slice.primary.add_media.document) {
    var mediaContent = slice.primary.add_media.document
    var mediaContentObj = ''
    var mediaType = ''

    let i = 0

    do {
      mediaType += mediaContent.data.body[i].slice_type
      i++

      if (mediaType === 'image') {
        mediaContentObj = mediaContent.data.body[0].primary.image.gatsbyImageData
        mediaType = 'Image'
        var imagFormat = getImgFormat(mediaContent.data.body[0].primary.format)
      }

      if (mediaType === 'embedded_cloud_media') {
        mediaContentObj = mediaContent.data.body[0].primary.media
        mediaType = 'Embedded cloud'
      }

      if (mediaType === 'text') {
        mediaContentObj = mediaContent.data.body[0].primary.text.richText
        mediaType = 'Text'
      }

      if (mediaType === 'geopoint') {
        mediaType = 'Geopoint'
        var mediaDescription = mediaContent.data.body[0].primary.description.richText
        var mediaGeoPoint = mediaContent.data.body[0].primary.geopoint
        // Zoom level (For Google maps)
        var mediaZoomLevel = getZoomLevel(mediaContent.data.body[0].primary.zoom_level)
        //mediaZoomLevel = mediaContent.data.body[0].primary.zoom_level
      }

      // Alert banner
      if (mediaType === 'alert_banner') {
        mediaType = 'Alert'
        var alertID = mediaContent.data.body[0].id
        var alertContent = mediaContent.data.body[0].primary.content
        var alertWidth = mediaContent.data.body[0].primary.width
        var alertAlign = mediaContent.data.body[0].primary.align
        var alertLevel = mediaContent.data.body[0].primary.level
        var alertExpiry = mediaContent.data.body[0].primary.expiry_date
        var alertClose = mediaContent.data.body[0].primary.user_can_close

        var alertBtnLabel = mediaContent.data.body[0].primary.button_label
        var alertBtnLink = mediaContent.data.body[0].primary.button_link
        var alertBtnIcon = mediaContent.data.body[0].primary.button_icon
        var alertBtnIconAlign = mediaContent.data.body[0].primary.button_icon_align

        var alertBtnSecondaryLabel = mediaContent.data.body[0].primary.secondary_button_label
        var alertBtnSecondaryLink = mediaContent.data.body[0].primary.secondary_button_link
        var alertBtnSecondaryStyle = mediaContent.data.body[0].primary.secondary_button_style
        var alertBtnSecondaryIcon = mediaContent.data.body[0].primary.secondary_button_icon
        var alertBtnSecondaryIconAlign =
          mediaContent.data.body[0].primary.secondary_button_icon_align
      }
    } while (i < mediaContent.data.body.length)
  }

  // Animate on scoll if active
  if (typeof window !== `undefined`) {
    gsap.registerPlugin(ScrollTrigger)
  }
  if (slice.primary.animate_scroll === true) {
    var animItem = 'animActive'
  } else {
    animItem = 'animInActive'
  }

  useEffect(() => {
    // console.log("animation activated = " + slice.primary.animate_scroll)
    if (slice.primary.animate_scroll !== true) return

    gsap.config({
      nullTargetWarn: false,
    })

    const aninItems = gsap.utils.toArray('.animActive')
    aninItems.forEach((item) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: 1,
          //markers: true
        },
      })

      tl.fromTo(
        item.querySelector('.highlight div'),
        { x: item.classList.contains('media-right') ? 64 : -64 },
        { x: 0, ease: Power3.easeOut }
      )
      tl.fromTo(
        item.querySelector('.content'),
        { y: +96, opacity: 0 },
        { y: 0, opacity: 1, ease: Power3.easeOut },
        '-=.3'
      )

      return () => {
        aninItems.item.kill()
      }
    })
  }, [slice])

  return (
    <Highlight
      id={sectionID}
      className={`highlight section-layout ${sectionWidth} media-${positionMedia} ${forGroundColor} ${bgColor} ${animItem}`}
      style={{
        paddingTop: vPaddingTop,
        paddingBottom: vPaddingBottom,
      }}
    >
      <div>
        {(content || primaryButtonLabel || secondaryButtonLabel) && (
          <article
            className={'content txt-' + alignContent}
            style={{
              fontSize: fontSize,
              lineHeight: lineHeight,
            }}
          >
            {content && <RichText render={content} linkResolver={linkResolver} />}

            {(primaryButtonLabel || secondaryButtonLabel) && (
              <span className="cta">
                {/* Primary Button */}
                {primaryButtonLabel && (
                  <Button
                    buttonLabel={primaryButtonLabel}
                    buttonType={primaryButtonLink}
                    buttonStyle={primaryButtonStyle}
                    buttonIcon={primaryButtonIcon}
                    buttonIconAlign={primaryButtonIconAlign}
                  />
                )}

                {/* Secondary Button */}
                {secondaryButtonLabel && (
                  <Button
                    buttonLabel={secondaryButtonLabel}
                    buttonType={secondaryButtonLink}
                    buttonStyle={secondaryButtonStyle}
                    buttonIcon={secondaryButtonIcon}
                    buttonIconAlign={secondaryButtonIconAlign}
                  />
                )}
              </span>
            )}
          </article>
        )}

        <div
          className={`media media-${positionMedia}`}
          style={{
            width: mediaSize + '%',
          }}
        >
          {mediaType === 'Image' && (
            <div className={`imageWrapper ${imagFormat}`}>
              <GatsbyImage
                image={mediaContentObj}
                alt={mediaContentObj.alt ? mediaContentObj.alt : 'Placeholder image'}
                // style={{
                //   width: mediaSize + '%',
                // }}
              />
            </div>
          )}

          {/* Done - but test for a11y errors! - To do: Swap this to url and add custom iframe with a title etc for validation - default Youtube breaks! */}
          {mediaType === 'Embedded cloud' && <YouTube embedURL={mediaContentObj} />}

          {mediaType === 'Text' && (
            <div className={'textBlock'}>
              <RichText render={mediaContentObj} linkResolver={linkResolver} />
            </div>
          )}

          {/* Geopoint - To complete this pin position. */}
          {mediaType === 'Geopoint' && (
            <GoogleMap
              geopoint={mediaGeoPoint}
              description={mediaDescription}
              zoomLevel={mediaZoomLevel}
            />
          )}

          {/* Alert notice */}
          {mediaType === 'Alert' && (
            <Alert
              alertID={alertID}
              alertContent={alertContent}
              alertWidth={alertWidth}
              alertAlign={alertAlign}
              alertLevel={alertLevel}
              alertExpiry={alertExpiry}
              alertClose={alertClose}
              alertBtnLabel={alertBtnLabel}
              alertBtnLink={alertBtnLink}
              alertBtnIcon={alertBtnIcon}
              alertBtnIconAlign={alertBtnIconAlign}
              alertBtnSecondaryLabel={alertBtnSecondaryLabel}
              alertBtnSecondaryLink={alertBtnSecondaryLink}
              alertBtnSecondaryStyle={alertBtnSecondaryStyle}
              alertBtnSecondaryIcon={alertBtnSecondaryIcon}
              alertBtnSecondaryIconAlign={alertBtnSecondaryIconAlign}
            />
          )}
        </div>
      </div>
    </Highlight>
  )
}

export default ImageHighlight
