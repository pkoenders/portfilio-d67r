import React, { useEffect, useState } from 'react'

// Helpers
import { RichText } from 'prismic-reactjs'
import linkResolver from '../../../utils/linkResolver'
import {
  getContentWidth,
  getFontSize,
  getLineHeight,
  getAutoSpacing,
  getManualSpacing,
  getBgColor,
  getColorTint,
  getRgb2Hex,
  getContrast,
  getListStyle,
  getStyle,
} from '/src/utils/helpers'

// Icons
import IconMaterial from '/src/components/common/icons/material'

import styled from 'styled-components'

const List = styled.section`
  padding: 0 ${({ theme }) => theme.padding['1/2']};
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    grid-gap: ${({ theme }) => theme.padding.default};
    li {
      display: flex;
      flex-direction: row;
      grid-gap: ${({ theme }) => theme.padding.default};
      align-items: center;
      /* font-size: ${({ theme }) => theme.fontSize.lg}; */
      p {
        margin-bottom: 0;
      }
      span {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        aspect-ratio: 1/1;
        text-align: center;
        padding: 0;
        height: ${({ theme }) => theme.padding['1/2']};
        width: ${({ theme }) => theme.padding['1/2']};
        border-radius: 999rem;
        box-shadow: ${({ theme }) => theme.boxShadow.md};
        background-color: ${({ theme }) => theme.colors.grey[300]};
        border: 1px solid ${({ theme }) => theme.colors.grey[400]};
      }

      span.uncheck {
        i {
          /* opacity: 0.66; */
        }
      }
    }
  }

  ul.primary {
    li {
      span {
        color: ${({ theme }) => theme.colors.grey.default};
        background-color: ${({ theme }) => theme.colors.primary[300]};
        border: 1px solid ${({ theme }) => theme.colors.primary[400]};
        i {
          color: ${({ theme }) => theme.colors.primary.default};
        }
      }
    }
  }

  ul.secondary {
    li {
      span {
        color: ${({ theme }) => theme.colors.grey.default};
        border: 1px solid ${({ theme }) => theme.colors.secondary[400]};
        background-color: ${({ theme }) => theme.colors.secondary[300]};
        i {
          color: ${({ theme }) => theme.colors.secondary.default};
        }
      }
    }
  }
  ul.tertiary {
    li {
      span {
        color: #fff;
        border: 1px solid ${({ theme }) => theme.colors.tertiary[400]};
        background-color: ${({ theme }) => theme.colors.tertiary[500]};
        i {
          color: ${({ theme }) => theme.colors.tertiary.default};
        }
      }
    }
  }

  ul.grey {
    li {
      span {
        color: ${({ theme }) => theme.colors.grey.default};
        border: 1px solid ${({ theme }) => theme.colors.grey[400]};
        background-color: ${({ theme }) => theme.colors.grey[300]};
        i {
          color: ${({ theme }) => theme.colors.grey.default};
        }
      }
    }
  }

  ul.numbered {
    li {
      span {
        border-radius: ${({ theme }) => theme.borderRadius.sm};
        height: ${({ theme }) => theme.padding.default};
        width: ${({ theme }) => theme.padding.default};
        i {
          display: none;
        }
      }
    }
  }

  ul.disc {
    li {
      span {
        height: ${({ theme }) => theme.padding['1/2']};
        width: ${({ theme }) => theme.padding['1/2']};
        i {
          display: none;
        }
      }
    }
  }
  ul.square {
    li {
      span {
        border-radius: ${({ theme }) => theme.borderRadius.sm};
        height: ${({ theme }) => theme.padding['1/2']};
        width: ${({ theme }) => theme.padding['1/2']};
        i {
          display: none;
        }
      }
    }
  }
  ul.checked {
    li {
      span {
        border-radius: ${({ theme }) => theme.borderRadius.sm};
        height: ${({ theme }) => theme.padding['1/2']};
        width: ${({ theme }) => theme.padding['1/2']};
        border: none;
        background-color: transparent;
        box-shadow: none;

        i {
          font-weight: 600;
          font-size: ${({ theme }) => theme.fontSize['3xl']};
        }
      }
    }
  }
  &.dark {
    ul.checked {
      li {
        span {
          i {
            color: ${({ theme }) => theme.colors.grey[100]};
          }
        }
      }
    }
  }
`

const StyledList = ({ slice }) => {
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
  bgColor = 'background-' + bgColor + '-' + bGroundTint
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

  // List style
  const listStyle = getListStyle(slice.primary.list_type)

  // Font sizing
  const fontSize = getFontSize(slice.primary.font_size)

  // Line height
  const lineHeight = getLineHeight(slice.primary.font_size)

  // Validate Theme
  const listTheme = getStyle(slice.primary.theme)

  return (
    <List
      id={sectionID}
      className={`section-layout ${sectionWidth} ${forGroundColor} ${bgColor}`}
      style={{
        paddingTop: vPaddingTop,
        paddingBottom: vPaddingBottom,
      }}
    >
      <div>
        <div
          style={{
            fontSize: fontSize,
            lineHeight: lineHeight,
          }}
        >
          {slice.items.length > 0 && (
            <>
              <ul className={`${listTheme} ${listStyle}`}>
                {slice.items.map((node, index) => (
                  <li key={slice.id + index}>
                    {slice.items[index].item.richText && (
                      <>
                        {listStyle === 'numbered' && <span>{index + 1}</span>}
                        {listStyle === 'disc' && <span></span>}
                        {listStyle === 'square' && <span></span>}
                        {listStyle === 'checked' && (
                          <>
                            {slice.items[index].uncheck !== true ? (
                              <span>
                                <IconMaterial icon={'check'} />
                              </span>
                            ) : (
                              <span className="uncheck">
                                <IconMaterial icon={'close'} />
                              </span>
                            )}
                          </>
                        )}
                        <RichText
                          render={slice.items[index].item.richText}
                          linkResolver={linkResolver}
                        />
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </List>
  )
}

export default StyledList
