import React, { useEffect } from 'react'

//Helpers
import { GatsbyImage } from 'gatsby-plugin-image'
import { convertToBgImage } from 'gbimage-bridge'
import BackgroundImage from 'gatsby-background-image'
import linkResolver from '../../../utils/linkResolver'
import { RichText } from 'prismic-reactjs'
import {
  validateString,
  getContentWidth,
  getHeroImgHeight,
  getAutoSpacing,
  getManualSpacing,
  getOpacity,
  getColor,
  getRgb2Hex,
  getHexToRGB,
  getStyle,
  getPostionAlign,
  getGradientDirection,
} from '../../../utils/helpers'

// Buttons
import Button from '/src/components/common/buttons/linkButton'

import styled from 'styled-components'

const HeroImage = styled.section.attrs({
  className: 'heroBanner',
})`
  padding-top: 0px;
  padding-bottom: 0px;
  z-index: 100;

  display: flex;
  flex-grow: 1;
  flex-direction: column;

  > div {
    max-width: ${({ theme }) => theme.screens.md};
  }

  &.full {
    > div {
      max-width: 100%;
    }
  }

  &.wide {
    > div {
      max-width: ${({ theme }) => theme.screens.xl};
    }
  }

  &.slim {
    > div {
      max-width: ${({ theme }) => theme.screens.md};
    }
  }

  div {
    padding: 0;
    position: relative;
    margin: 0 auto;
    width: 100%;

    .contentWrapper {
      display: flex;
      position: absolute;
      max-width: ${({ theme }) => theme.screens.md};
      height: 100%;
      overflow: visible;
      z-index: 101;
      top: 0;
      left: 0;
      right: 0;
      text-align: center;
      align-self: center;
      align-items: center;
      margin: 0 auto;
      padding: ${({ theme }) => theme.padding.default} ${({ theme }) => theme.padding['1/2']};
    }
    .contentWrapper.centre {
      align-items: center;
    }

    .contentWrapper.bottom {
      align-items: flex-end;
      padding: ${({ theme }) => theme.padding['1/2']};
    }

    .contentWrapper.top {
      align-items: flex-start;
      padding: ${({ theme }) => theme.padding['1/2']};
    }

    .contentWrapper {
      .content,
      .content.centre {
        margin: 0 auto;
        text-align: center;
        justify-content: center;
        .cta {
          justify-self: center;
          align-items: center;
        }
      }

      .content.left {
        margin: 0 auto 0 0;
        text-align: left;
        justify-self: flex-start;
        .cta {
          justify-self: flex-start;
          align-items: flex-start;
        }
      }

      .content.right {
        margin: 0 0 0 auto;
        text-align: right;
        justify-content: flex-end;
        .cta {
          justify-self: flex-end;
          align-items: flex-end;
        }
      }

      .content {
        /* width: 100%; */
        width: fit-content;
        height: fit-content;
        display: grid;
        grid-gap: ${({ theme }) => theme.padding.default};
        padding: ${({ theme }) => theme.padding['1/2']} ${({ theme }) => theme.padding.default};
        color: #ffffff;
        background-color: ${({ theme }) => theme.colors.header.default};
        border-radius: ${({ theme }) => theme.borderRadius.default};
        overflow-wrap: break-word;
        word-wrap: break-word;
        hyphens: none;

        @media (max-width: ${({ theme }) => theme.screens.sm}) {
          padding: ${({ theme }) => theme.padding['1/2']};
        }
      }

      span * {
        margin: 0;
      }

      span.hide {
        display: none;
      }
      span {
        display: grid;
        grid-gap: ${({ theme }) => theme.padding['1/2']};

        .leadImage {
          display: flex;
          max-width: fit-content;
          /* min-width:auto !important; */
          object-fit: contain !important;
          margin: ${({ theme }) => theme.padding['1/2']} auto 0 auto;
          > div {
            max-width: 100% !important;
            /* max-width:auto !important */
          }
          img {
            object-fit: contain !important;
          }
        }

        h1 {
          overflow-wrap: break-word;
          word-wrap: break-word;
          hyphens: auto;
        }

        p {
          color: inherit;
          width: 100%;
          margin-bottom: 0px;
          font-size: 115%;

          a,
          a:hover {
            color: #ffffff;
            text-decoration: underline;
          }
        }
      }

      span.cta {
        display: flex;
        grid-gap: ${({ theme }) => theme.padding['1/2']};
        width: fit-content;

        @media (max-width: ${({ theme }) => theme.screens.sm}) {
          flex-direction: column;
        }
      }
    }
  }
`

const HeroImg = ({ slice }) => {
  // Get leading image
  const leadImage = slice.primary.leading_image.gatsbyImageData
  const leadImage_alt = slice.primary.leading_image.alt
  var leadImageHeight = slice.primary.leading_image_height

  if (leadImageHeight === null) {
    leadImageHeight = 64 + 'px'
  } else {
    leadImageHeight = leadImageHeight + 'px'
  }

  // Get the image
  const image = slice.primary.image.gatsbyImageData
  const bgImage = convertToBgImage(image)

  // Container width
  var sectionWidth = getContentWidth(slice.primary.width)

  // Get image height
  var sectionHeight = getHeroImgHeight(slice.primary.height, slice.primary.v_height)

  // Banner bGround postion
  var alignBGround = getPostionAlign(slice.primary.align_image)

  // Banner margins
  var defaultMargin = getAutoSpacing(slice.primary.default_margin)
  var vMarginTop = getManualSpacing(slice.primary.margin_top)
  var vMarginBottom = getManualSpacing(slice.primary.margin_bottom)
  if (vMarginTop === null) {
    vMarginTop = defaultMargin + 'px'
  }

  if (vMarginBottom === null) {
    vMarginBottom = defaultMargin + 'px'
  }

  //
  // Set up image props - ovelay of image, height, margins and check the content height to adjust container height
  useEffect(() => {
    // Overlay colors - from & to
    var overlayFrom = getColor(slice.primary.overlay_from)
    var overlayTo = getColor(slice.primary.overlay_to)

    // The styled color of header bground to use on content background & gradients if not specified
    var headerWrapper = document.querySelector('.headerNavWrapper')
    var headerBgColor = window
      .getComputedStyle(headerWrapper, null)
      .getPropertyValue('background-color')

    // Convert headerBgColor color to #hex
    headerBgColor = getRgb2Hex(headerBgColor)

    // If spcecified color - set to the styled color else set the header bground color
    // We are going to write a gradient in any case. Null or transparent will have 0 opacity
    // Content editors can just add opacity and no color, the default color will be the header color
    if (overlayFrom === null || overlayFrom === 'transparent') {
      overlayFrom = headerBgColor
    }
    if (overlayTo === null || overlayTo === 'transparent') {
      overlayTo = headerBgColor
    }

    // Overlay opacity values
    var overlayFromOpacity = getOpacity(slice.primary.overlay_from_opacity)
    var overlayToOpacity = getOpacity(slice.primary.overlay_to_opacity)

    // Set overlay colors to RGBA
    overlayFrom = getHexToRGB(overlayFrom, overlayFromOpacity)
    overlayTo = getHexToRGB(overlayTo, overlayToOpacity)

    // Banner overlay (gradient) direction
    var overlayDirection = getGradientDirection(slice.primary.overlay_direction)

    // Check contentHeight - if content overflows the set height of the banner
    var checkContentHeight = document.querySelector('.content')
    var contentHeight = checkContentHeight.offsetHeight
    'load, resize, orientationchange'.split(', ').forEach(function (e) {
      window.addEventListener(e, () => {
        contentHeight = checkContentHeight.offsetHeight
        setHeroImageStyles()
      })
    })

    // Set inline styles attrs
    setHeroImageStyles()
    function setHeroImageStyles() {
      contentHeight = contentHeight + 32 * 2 // Allow for top and bottom margins
      var heroImageInner = document.querySelector('.heroImage')

      if (heroImageInner) {
        heroImageInner.setAttribute(
          `style`,
          `background-image: linear-gradient(${overlayDirection}, rgba(${overlayFrom}), rgba(${overlayTo}));
        min-height: ${sectionHeight};
        height: ${contentHeight}px;
        width: 100%; 
        background-position: center ${alignBGround};
        margin-top: ${vMarginTop};
        margin-bottom: ${vMarginBottom}
        `
        )
      }
    }
    // Done
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slice, sectionHeight, alignBGround, vMarginTop, vMarginBottom])

  //
  // Set background color+opacity of content
  useEffect(() => {
    // The specified color
    var bgroundColor = getColor(slice.primary.content_background_color)

    // The styled color of content bground
    var contentWrapper = document.querySelector('.content')
    var contentBgColor = window
      .getComputedStyle(contentWrapper, null)
      .getPropertyValue('background-color')

    // Convert background color to #hex
    contentBgColor = getRgb2Hex(contentBgColor)

    // contentBgColor = getRgb2Hex(contentBgColor)

    // If spcecified color - set to the styled color else set the content bground color
    if (bgroundColor === null || bgroundColor === 'transparent') {
      bgroundColor = contentBgColor
    }

    // Get the opacity
    var bgroundOpacity = getOpacity(slice.primary.content_background_opacity)
    // console.log(bgroundOpacity)

    // Convert background color to RGBA -  include opacity
    bgroundColor = getHexToRGB(bgroundColor, bgroundOpacity)

    // console.log(contentBgColor)
    // console.log(bgroundColor)

    // Set inline styles attrs
    contentWrapper.setAttribute('style', `background-color:rgb(${bgroundColor})`)
  }, [slice])

  // Validate title
  const title = validateString(slice.primary.title.richText)
  const titleColor = validateString(slice.primary.title_color)

  // Validate description
  const description = validateString(slice.primary.description.richText)

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

  // console.log(secondaryButtonLink.raw.link_type)

  return (
    <HeroImage className={`section-layout ${sectionWidth}`}>
      <div className="heroImageWrapper">
        {slice.primary.image.gatsbyImageData && (
          <BackgroundImage
            Tag="div"
            className="heroImage"
            // Spread bgImage into BackgroundImage:
            {...bgImage}
            preserveStackingContext
          />
        )}

        <div
          className={'contentWrapper ' + `${slice.primary.vertical_align_content}`.toLowerCase()}
        >
          <div className={'content ' + `${slice.primary.align_content}`.toLowerCase()}>
            {(title || description || leadImage) && (
              <span>
                {leadImage && (
                  <GatsbyImage
                    className="leadImage"
                    image={leadImage}
                    alt={leadImage_alt ? leadImage_alt : 'Placeholder image'}
                    style={{
                      height: leadImageHeight,
                    }}
                  />
                )}

                {title && title[0].text.length > 0 && (
                  <span
                    className={slice.primary.display_title === false ? 'sr-only' : undefined}
                    style={{ color: titleColor !== null && titleColor }}
                  >
                    <RichText render={title} />
                  </span>
                )}
                {description && description[0].text.length > 0 && (
                  <RichText render={description} linkResolver={linkResolver} />
                )}
              </span>
            )}

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
          </div>
        </div>
      </div>
    </HeroImage>
  )
}

export default HeroImg
