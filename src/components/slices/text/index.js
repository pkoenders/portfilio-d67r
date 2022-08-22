import React, { useEffect, useState } from 'react'

// Helpers
import { RichText } from 'prismic-reactjs'
import linkResolver from '../../../utils/linkResolver'
import {
  getContentWidth,
  getFontSize,
  getPostionAlign,
  getColumnCount,
  getContentOverrideStyle,
  validateString,
  getStyle,
  getAutoSpacing,
  getManualSpacing,
  getBgColor,
  getColorTint,
  getRgb2Hex,
  getContrast,
} from '/src/utils/helpers'

// Buttons
import Button from '/src/components/common/buttons/linkButton'

// import './index.scss'

import styled from 'styled-components'

const TextBlock = styled.section`
  padding: 0 ${({ theme }) => theme.padding['1/2']};

  > div {
    padding: 0;
  }

  .col1,
  .col2 {
  }

  .col2 {
    column-count: 2;
    grid-gap: ${({ theme }) => theme.padding.default};

    @media (max-width: ${({ theme }) => theme.screens.sm}) {
      column-count: 1;
    }
  }

  .col1 p:last-child,
  .col1 p:last-child {
    margin-bottom: 0;
  }

  .cta {
    display: flex;
    flex-direction: row;
    width: fit-content;
    align-items: center;
    justify-content: left;
    grid-gap: ${({ theme }) => theme.padding['1/2']};

    span {
      width: fit-content;
      margin: ${({ theme }) => theme.margin['1/2']} 0 0;
    }

    @media (max-width: ${({ theme }) => theme.screens.sm}) {
      flex-direction: column;
      align-items: flex-start;
      margin-top: ${({ theme }) => theme.margin.default};
      span {
        margin: 0;
      }
    }
  }

  .cta.left {
    margin-left: 0;
    margin-right: auto;
  }

  .cta.center {
    margin-left: auto;
    margin-right: auto;
  }

  .cta.right {
    margin-left: auto;
    margin-right: 0;
  }

  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    .cta.left {
      align-items: flex-start;
    }
    .cta.center {
      align-items: center;
    }
    .cta.right {
      align-items: flex-end;
    }
  }
`

const Text = ({ slice }) => {
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
    //  console.log('bgColor = ' + bgColor)
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

  //Text colunm count
  var columnCount = getColumnCount(slice.primary.columns)

  // Alignment
  var txtAlign = getPostionAlign(slice.primary.text_alignment)

  // Font sizing
  var fontSize = getFontSize(slice.primary.font_sizing)

  // Content
  const content = slice.primary.content

  // Validate content style
  const contentOverrideStyle = getContentOverrideStyle(slice.primary.override_content_style)

  // For screen reader only?
  const screenReaderOnly = slice.primary.screen_reader_only

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

  // Validate button align
  const buttonAlign = getPostionAlign(slice.primary.button_alignment)

  return (
    <TextBlock
      id={sectionID}
      className={`section-layout ${sectionWidth} ${forGroundColor} ${bgColor}`}
      style={{
        paddingTop: vPaddingTop,
        paddingBottom: vPaddingBottom,
      }}
    >
      <div>
        {content.text && (
          <article
            // className={columnCount}
            className={`${screenReaderOnly === true ? '.sr-only ' : ''}${columnCount}`}
            style={{
              fontSize: fontSize,
              textAlign: txtAlign,
            }}
          >
            {contentOverrideStyle === null ? (
              content.text && (
                <RichText
                  // className={`${screenReaderOnly === true ? '.sr-only' : ''}`}
                  render={content.richText}
                  linkResolver={linkResolver}
                />
              )
            ) : (
              <p
                // className={`${screenReaderOnly === true ? '.sr-only' : ''} ${contentOverrideStyle}`}
                className={contentOverrideStyle}
              >
                {content.text}
              </p>
            )}
          </article>
        )}

        {(primaryButtonLabel || secondaryButtonLabel) && (
          <span className={`cta ${buttonAlign}`}>
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
    </TextBlock>
  )
}

export default Text
