import React, { useState, useLayoutEffect } from 'react'

import styled from 'styled-components'

const FontPropsWrapper = styled.div`
  margin-top: 0 !important;
  /* border: 1px solid ${({ theme }) => theme.colors.grey['200']}; */
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey['200']} !important;
  padding: ${({ theme }) => theme.padding['1/2']} !important;
  background-color: #ffffff;
`

const FontProps = ({ fontType, fontBase }) => {
  // Set states
  const [fontPropsFam, setfontPropsFam] = useState()
  const [fontPropsWeight, setfontPropsWeight] = useState()
  const [fontPropsSize, setfontPropsSize] = useState()

  // getComputedStyles
  const setFontProps = (fontPropsSrc) => {
    setfontPropsFam(getComputedStyle(fontPropsSrc).fontFamily)
    setfontPropsWeight(getComputedStyle(fontPropsSrc).fontWeight)
    setfontPropsSize(getComputedStyle(fontPropsSrc).fontSize)
  }

  useLayoutEffect(() => {
    let fontPropsSrc = document.getElementById(fontType)
    setFontProps(fontPropsSrc)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <FontPropsWrapper>
      <span>
        Font type: <strong>{fontType}</strong>
        <br />
        Font family: <strong>{fontPropsFam}</strong>
        <br />
        Font weight: <strong>{fontPropsWeight}</strong>
        <br />
        {(fontBase === true && (
          <>
            Font size (base): <strong>{fontPropsSize}</strong>
          </>
        )) || (
          <>
            Font size: <strong>{fontPropsSize}</strong>
          </>
        )}
      </span>
    </FontPropsWrapper>
  )
}

export default FontProps
