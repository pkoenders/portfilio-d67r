import React from 'react'

// Layout
import styled from 'styled-components'

const Section = styled.section`
  > div {
    margin-top: 64px !important;
  }
`

const StyleSection = ({ spyID }) => {
  return (
    <Section id={spyID}>
      <div>
        <h1>Style guide</h1>
        <p>
          This style guide is a living document to reference key design elements and draws on the
          styles predefined on this web. The guide also includes{' '}
          <strong>Colour information, Typography, Icons, Spacing, Accessibility information</strong>
          &nbsp;and&nbsp;<strong>references to best practice</strong>.
        </p>
        <p>
          Site administrators, developers and designers should update new and modified styles in
          this guide.
        </p>
      </div>
    </Section>
  )
}

export default StyleSection
