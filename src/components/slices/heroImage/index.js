import React, { useEffect } from 'react'

// Helpers
import { getImage } from 'gatsby-plugin-image'
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

const WrapperHeroImage = styled.section.attrs({
  className: 'heroBanner',
})`
  padding-top: 0px;
  padding-bottom: 0px;
  position: relative;
  z-index: 100;

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
    color: #ffffff;
    position: relative;
    margin: 0 auto;

    .contentWrapper {
      background: none;
      position: absolute;
      max-width: ${({ theme }) => theme.screens.md};
      margin: 0 auto;
      z-index: 100;

      top: 0;
      left: 0;
      right: 0;
      display: flex;
      text-align: center;
      padding: ${({ theme }) => theme.padding.default} ${({ theme }) => theme.padding['1/2']};

      align-items: center;
    }
    .contentWrapper.centre {
      align-items: center;
    }

    .contentWrapper.bottom {
      align-items: flex-end;
    }

    .contentWrapper.top {
      align-items: flex-start;
    }

    .contentWrapper {
      height: 100%;
      .content,
      .content.centre {
        /* flex-direction: row; */
        margin: 0 auto;
        text-align: center;
        justify-content: center;
        .cta {
          justify-self: center;
        }
      }

      .content.left {
        margin: 0 auto 0 0;
        text-align: left;
        justify-self: flex-start;
        .cta {
          justify-self: flex-start;
        }
      }

      .content.right {
        margin: 0 0 0 auto;
        text-align: right;
        justify-content: flex-end;
        .cta {
          justify-self: flex-end;
        }
      }

      .content {
        /* width: 100%; */
        width: fit-content;
        display: grid;
        padding: ${({ theme }) => theme.padding['1/2']} ${({ theme }) => theme.padding.default};
        color: #ffffff;
        background-color: ${({ theme }) => theme.colors.header.default};
        border-radius: ${({ theme }) => theme.borderRadius.default};
        overflow-wrap: break-word;
        word-wrap: break-word;
        hyphens: none;
        @media (max-width: ${({ theme }) => theme.screens.sm}) {
          padding: ${({ theme }) => theme.padding['1/2']}};
        }
        h1 {
          hyphens: auto;
        }

        span * {
          margin: 0;
        }
        span {
          display: grid;
          grid-gap: ${({ theme }) => theme.padding['1/2']};

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
          margin-top: ${({ theme }) => theme.margin.default};
          grid-gap: ${({ theme }) => theme.padding['1/2']};
          width: fit-content;

          @media (max-width: ${({ theme }) => theme.screens.sm}) {
            flex-direction: column;
          }
        }
      }
    }
  }
`

const HeroImg = ({ slice }) => {
  // Get the image
  const image = getImage(slice.primary.image.gatsbyImageData)
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
  // Set up image props -  ovelay of image, height and margins
  useEffect(() => {
    // Overlay colors - from & to
    var overlayFrom = getColor(slice.primary.overlay_from)
    var overlayTo = getColor(slice.primary.overlay_to)

    // The styled color of header bground
    var headerWrapper = document.querySelector('.headerNavWrapper')
    var headerBgColor = window
      .getComputedStyle(headerWrapper, null)
      .getPropertyValue('background-color')

    // Convert background color to #hex
    headerBgColor = getRgb2Hex(headerBgColor)

    // If spcecified color - set to the styled color else set the header bground color
    if (overlayFrom === null || overlayFrom === 'transparent') {
      overlayFrom = headerBgColor
    }
    if (overlayTo === null || overlayTo === 'transparent') {
      overlayTo = headerBgColor
    }

    // Overlay opacity values
    var overlayFromOpacity = getOpacity(slice.primary.overlay_from_opacity)
    var overlayToOpacity = getOpacity(slice.primary.overlay_to_opacity)

    // Overlay colors to RGBA
    overlayFrom = getHexToRGB(overlayFrom, overlayFromOpacity)
    overlayTo = getHexToRGB(overlayTo, overlayToOpacity)

    // Banner overlay (gradient) direction
    var overlayDirection = getGradientDirection(slice.primary.overlay_direction)

    // Set inline styles attrs
    var heroImageInner = document.querySelector('.heroImage')
    heroImageInner.setAttribute(
      `style`,
      `background-image: linear-gradient(${overlayDirection}, rgba(${overlayFrom}), rgba(${overlayTo}));
       height: ${sectionHeight};
       with: '100%'; 
       background-position: center ${alignBGround};
       margin-top: ${vMarginTop};
       margin-bottom: ${vMarginBottom}
      `
    )
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
    <WrapperHeroImage className={`section-layout ${sectionWidth}`}>
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
            {(title || description) && (
              <span>
                {title && title[0].text.length > 0 && <RichText render={title} />}
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
    </WrapperHeroImage>
  )
}

export default HeroImg
