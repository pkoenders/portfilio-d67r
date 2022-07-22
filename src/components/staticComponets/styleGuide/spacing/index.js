import React from 'react'

// Layout
import styled from 'styled-components'

const Section = styled.section`
  > div {
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      grid-gap: ${({ theme }) => theme.padding['1/4']};

      span {
        aspect-ratio: 1;
        margin: ${({ theme }) => theme.padding['1/4']} 0;
        background-color: ${({ theme }) => theme.colors.card.default};
      }
      span.default {
        width: ${({ theme }) => theme.padding.default};
      }
      span.half {
        width: ${({ theme }) => theme.padding['1/2']};
      }
      span.quarter {
        width: ${({ theme }) => theme.padding['1/4']};
      }
      span.eighth {
        width: ${({ theme }) => theme.padding['1/8']};
      }
      span.sixteenth {
        width: ${({ theme }) => theme.padding['1/16']};
      }
      span.xl {
        width: ${({ theme }) => theme.padding['1xl']};
      }
      span.xxl {
        width: ${({ theme }) => theme.padding['2xl']};
      }
      span.xxxl {
        width: ${({ theme }) => theme.padding['3xl']};
      }
      span.xxxxl {
        width: ${({ theme }) => theme.padding['4xl']};
      }
    }
  }
`

const StyleSection = ({ spyID }) => {
  return (
    <Section id={spyID}>
      <div>
        <h2>Padding and margins</h2>
        <p>The default padding and margin is 32px with variants to reduce or expand.</p>

        <div>
          <span className="padding sixteenth"></span>
          1/16 - 2px
        </div>
        <div>
          <span className="padding eighth"></span>
          1/8 - 4px
        </div>
        <div>
          <span className="padding quarter"></span>
          1/4 - 8px
        </div>
        <div>
          <span className="padding half"></span>
          1/2 - 16px
        </div>
        <div>
          <span className="padding default"></span>
          Default - 32px
        </div>
        <div>
          <span className="padding xl"></span>
          1XL - 40px
        </div>
        <div>
          <span className="padding xxl"></span>
          2XL - 48px
        </div>
        <div>
          <span className="padding xxxl"></span>
          3XL - 56px
        </div>
        <div>
          <span className="padding xxxxl"></span>
          4XL - 64px
        </div>
      </div>
    </Section>
  )
}

export default StyleSection
