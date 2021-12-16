import React from 'react'

// Helepers
import { RichText } from 'prismic-reactjs'

// Icons
import IconMaterial from '/src/components/common/icons/material'

import styled from 'styled-components'

const BlockQuote = styled.blockquote`

  width: fit-content;
  display: flex;
  position: relative;
  flex-direction: column;
  grid-gap: ${({ theme }) => theme.padding['1/4']};
  align-items: flex-start;
  margin: 0 auto 0 0;
  border-left: 4px solid ${({ theme }) => theme.colors.tertiary.default};
 padding: ${({ theme }) => theme.padding.default};

  p {
    font-family: ${({ theme }) => theme.font.serif};
    font-style: italic;
    font-size:  110%;
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
    background-color: #fff;
    font-size: 28px;
    left:-16px;
    transform: scaleX(-1);
  }

}
`

const Quote = ({ slice }) => (
  <BlockQuote>
    <IconMaterial icon={'format_quote'} />
    <RichText render={slice.primary.quote.richText} />
    {slice.primary.reference !== undefined && <span>{slice.primary.reference}</span>}
    {slice.primary.reference_url.url !== null && (
      <a href={slice.primary.reference_url.url} className="visit">
        <IconMaterial icon={'open_in_new'} />
        {slice.primary.reference_url.url}
      </a>
    )}
  </BlockQuote>
)

export default Quote
