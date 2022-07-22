import React from 'react'

import FontProps from './fontProps'
import StyleA2Z from './fontA2Z'

import styled from 'styled-components'

const FontWrapper = styled.div`
  margin: ${({ theme }) => theme.margin['1/2']} 0;

  p {
    margin-bottom: 0 !important;
  }
  div {
    border: 1px solid ${({ theme }) => theme.colors.grey['200']};
    border-bottom: none;
    padding: ${({ theme }) => theme.padding['1/2']};
    /* border: 1px solid ${({ theme }) => theme.colors.grey['200']}; */
    /* border-left: 4px solid ${({ theme }) => theme.colors.grey['200']}; */
    display: flex;
    flex-direction: column;
    /* padding: 0 ${({ theme }) => theme.padding['1/2']}; */
    margin-top: ${({ theme }) => theme.margin['1/4']};
  }

  .serif {
    font-family: ${({ theme }) => theme.font.serif};
  }

  .mono {
    font-family: ${({ theme }) => theme.font.mono};
  }
`

const FontType = ({ fontType, fontBase }) => {
  return (
    <FontWrapper>
      {fontType === 'h1' && (
        <h1 id={fontType}>
          Heading 1
          <StyleA2Z />
        </h1>
      )}
      {fontType === 'h2' && (
        <h2 id={fontType}>
          Heading 2
          <StyleA2Z />
        </h2>
      )}
      {fontType === 'h3' && (
        <h3 id={fontType}>
          Heading 3
          <StyleA2Z />
        </h3>
      )}
      {fontType === 'h4' && (
        <h4 id={fontType}>
          Heading 4
          <StyleA2Z />
        </h4>
      )}
      {fontType === 'h5' && (
        <h5 id={fontType}>
          Heading 5
          <StyleA2Z />
        </h5>
      )}
      {fontType === 'h6' && (
        <h6 id={fontType}>
          Heading 6
          <StyleA2Z />
        </h6>
      )}
      {fontType === 'p' && (
        <p id={fontType}>
          Paragraph
          <StyleA2Z />
        </p>
      )}
      {fontType === 'serif' && (
        <p id={fontType} className="serif">
          Serif
          <StyleA2Z />
        </p>
      )}
      {fontType === 'mono' && (
        <p id={fontType} className="mono">
          Mono
          <StyleA2Z />
        </p>
      )}

      {/* Now render the properties for that fontType */}
      <FontProps fontType={fontType} fontBase={fontBase} />
    </FontWrapper>
  )
}

export default FontType
