import React from 'react'
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
  getHexToRGB,
  getStyle,
  getPostionAlign,
  getGradientDirection,
} from '../../../utils/helpers'

// Buttons
import Button from '/src/components/common/buttons/linkButton'

import styled from 'styled-components'

const WrapperHeroImage = styled.section`
  padding-top: 0px;
  padding-bottom: 0px;
  position: relative;
  z-index: 100;

  > div {
    max-width: ${({ theme }) => theme.screens.md};
  }

  .full {
    > div {
      max-width: 100%;
    }
  }

  .wide {
    > div {
      max-width: ${({ theme }) => theme.screens.xl};
    }
  }

  .slim {
    > div {
      max-width: ${({ theme }) => theme.screens.md};
    }
  }

  > div {
    padding: 0;
    color: #ffffff;
    position: relative;

    .wrapper {
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
    .wrapper.centre {
      align-items: center;
    }

    .wrapper.bottom {
      align-items: flex-end;
    }

    .wrapper.top {
      align-items: flex-start;
    }

    .wrapper.bottom {
      align-items: flex-end;
    }

    .wrapper {
      content * {
        margin: 0 auto;
        text-align: center;
        justify-content: center;
      }
      .content.left * {
        margin: 0 auto 0 0;
        text-align: left;
        justify-self: flex-start;
      }

      .content.centre * {
        margin: 0 auto;
        text-align: center;
        justify-content: center;
      }

      .content.right * {
        margin: 0 0 0 auto;
        text-align: right;
        justify-content: flex-end;
      }

      .content {
        /* width: 100%; */
        width: fit-content;
        margin: 0 auto;
        display: grid;
        padding: 0;
        padding: ${({ theme }) => theme.padding.default} ${({ theme }) => theme.padding['2xl']};
        color: #ffffff;
        background-color: ${({ theme }) => theme.colors.header.default};
        border-radius: ${({ theme }) => theme.borderRadius.default};

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

const FullWidthImage = ({ slice }) => {
  // Container width
  var sectionWidth = getContentWidth(slice.primary.width)

  // Hero image height
  var sectionHeight = getHeroImgHeight(slice.primary.height, slice.primary.v_height)

  // if (slice.primary.v_height === true) {
  //   sectionHeight = parseFloat(100 - (60 / 100) * 10) + 'vh'
  // }

  // console.log('sectionHeight = ' + sectionHeight)

  // Overlay colors
  var overlayFrom = getColor(slice.primary.overlay_from)
  var overlayTo = getColor(slice.primary.overlay_to)

  if (overlayFrom === null || overlayFrom === 'transparent') {
    overlayFrom = '#000000'
  }
  if (overlayTo === null || overlayTo === 'transparent') {
    overlayTo = '#000000'
  }

  // Overlay opacity values
  var overlayFromOpacity = getOpacity(slice.primary.overlay_from_opacity)
  var overlayToOpacity = getOpacity(slice.primary.overlay_to_opacity)

  // Overlay colors to RGBA
  overlayFrom = getHexToRGB(overlayFrom, overlayFromOpacity)
  overlayTo = getHexToRGB(overlayTo, overlayToOpacity)

  // Banner overlay (gradient) direction
  var overlayDirection = getGradientDirection(slice.primary.overlay_direction)

  // Background color
  var bgroundColor = getColor(slice.primary.background_color)
  if (bgroundColor === null || bgroundColor === 'transparent') {
    bgroundColor = '#000000'
  }

  // Background opacity
  var bgroundOpacity = getOpacity(slice.primary.background_opacity)

  // Background colors to RGBA
  bgroundColor = getHexToRGB(bgroundColor, bgroundOpacity)

  // console.log('bgroundColor = ' + bgroundColor)

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

  const image = getImage(slice.primary.image.gatsbyImageData)
  const bgImage = convertToBgImage(image)

  // Add some inline styles
  const imageMargin = {
    marginTop: `${vMarginTop}px`,
    marginBottom: `${vMarginBottom}px`,
  }

  const imageHeight = {
    height: sectionHeight,
    // height: '450px',
  }

  const bgroundStyle = {
    height: sectionHeight,
    // height: '450px',
    with: '100%',
    backgroundPosition: `center ${alignBGround}`,
    backgroundImage: `linear-gradient(${overlayDirection}, rgba(${overlayFrom}), rgba(${overlayTo}))`,
  }

  const contentBgroundColor = {
    backgroundColor: `rgb(${bgroundColor})`,
  }

  return (
    <WrapperHeroImage
      aria-label="Hero image"
      className={'section-layout heroImage ' + sectionWidth}
      style={imageMargin}
    >
      <div>
        {slice.primary.image.gatsbyImageData && (
          <BackgroundImage
            // Tag="section"
            Tag="div"
            // Spread bgImage into BackgroundImage:
            {...bgImage}
            preserveStackingContext
            style={bgroundStyle}
          />
        )}

        <div
          className={'wrapper ' + `${slice.primary.vertical_align_content}`.toLowerCase()}
          style={imageHeight}
        >
          <div
            className={'content ' + `${slice.primary.align_content}`.toLowerCase()}
            style={contentBgroundColor}
          >
            {(title || description) !== null && (
              <span>
                {title !== null && <RichText render={title} />}
                {description !== null && (
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

export default FullWidthImage
