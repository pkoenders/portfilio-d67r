import React, { useEffect, useState } from 'react'

// Helpers
import { RichText } from 'prismic-reactjs'
// import linkResolver from '../../../utils/linkResolver'
import {
  getContentWidth,
  getAutoSpacing,
  getManualSpacing,
  getBgColor,
  getColorTint,
  getRgb2Hex,
  getContrast,
} from '/src/utils/helpers'

// Icons
// import IconMaterial from '/src/components/common/icons/material'

import styled from 'styled-components'

const QuoteWrapper = styled.section`
  padding: 0 ${({ theme }) => theme.padding['1/2']};

  div {
    margin: 0 auto;
    .title {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-bottom: ${({ theme }) => theme.margin.default};
      text-align: center;
      font-size: 130%;
    }

    div {
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      grid-gap: ${({ theme }) => theme.padding.default};
      > div {
        display: inherit;
        flex-direction: inherit;
        width: auto;
        grid-gap: ${({ theme }) => theme.padding.default};
      }
    }

    &.dark {
      blockquote:before,
      blockquote:after {
        color: ${({ theme }) => theme.colors.grey.default};
      }
    }
  }
`

const BlockQuote = styled.blockquote`

  width: fit-content;
  display: flex;
  position: relative;
  flex-direction: column;
  grid-gap: ${({ theme }) => theme.padding['1/4']};
  align-items: flex-start;
  margin: 0 ;
  border-left: 4px solid ${({ theme }) => theme.colors.tertiary.default};
  padding: ${({ theme }) => theme.padding['1/2']} ${({ theme }) => theme.padding.default};

  p {
    font-family: ${({ theme }) => theme.font.serif};
    font-style: italic;
    font-size:  100%;
  }

  span,
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    grid-gap: ${({ theme }) => theme.padding['1/4']};
    font-family: ${({ theme }) => theme.font.sans};
    font-style: initial;
    font-size: initial;
    text-decoration: none;
  }
  span {
      font-weight: 500;
  }

 > i {
    align-self: center;
    position: absolute;
    color: ${({ theme }) => theme.colors.page.default};
    background-color: ${({ theme }) => theme.colors.tertiary.default};
    font-size: 28px;
    left:-16px;
    transform: scaleX(-1);
    border-radius: 999rem;
  }

}
`

const Quotes = ({ slice }) => {
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

  // Content
  const title = slice.primary.title

  return (
    <QuoteWrapper
      id={sectionID}
      className={`section-layout ${sectionWidth} ${forGroundColor} ${bgColor}`}
      style={{
        paddingTop: vPaddingTop,
        paddingBottom: vPaddingBottom,
      }}
    >
      <div>
        {title.text && (
          <span className="title">
            <p>{title.text}</p>
          </span>
        )}

        {slice.items.length > 0 && (
          <div aria-label="Quotes">
            {slice.items.map(
              (node, index) =>
                slice.items[index].active === true && (
                  <div key={slice.id + index}>
                    {slice.items[index].content.richText && (
                      <>
                        <BlockQuote>
                          {/* <IconMaterial icon={'format_quote'} />{' '} */}
                          <RichText render={slice.items[index].content.richText} />
                          {slice.items[index].title !== undefined && (
                            <span>{slice.items[index].title}</span>
                          )}
                        </BlockQuote>
                      </>
                    )}
                  </div>
                )
            )}
          </div>
        )}
      </div>
    </QuoteWrapper>
  )
}

export default Quotes
