import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  // Section - For other templates that are not Homepage and General page
  display: block;
  margin-top: 0;
  padding: ${({ theme }) => theme.padding.default} 0 ${({ theme }) => theme.padding['2xl']};

  &.hasSecondaryNav {
    margin-top: ${({ theme }) => theme.header.height};
  }

  > div {
    max-width: ${({ theme }) => theme.screens.xl};
    margin: 0px auto;
    padding: 0 ${({ theme }) => theme.padding['1/2']};
  }

  &.xs > div {
    max-width: ${({ theme }) => theme.screens.xs};
  }
  &.sm > div {
    max-width: ${({ theme }) => theme.screens.sm};
  }
  &.md > div {
    max-width: ${({ theme }) => theme.screens.md};
  }
  &.lg > div {
    max-width: ${({ theme }) => theme.screens.lg};
  }
  &.xl > div {
    max-width: ${({ theme }) => theme.screens.xl};
  }
  &.xxl > div {
    max-width: ${({ theme }) => theme.screens.xxl};
  }
  &.full > div {
    max-width: ${({ theme }) => theme.screens.full};
    padding: 0;
  }
`

const PageLayout = ({ children, classOverides }) => {
  return (
    <Section className={classOverides}>
      <div>{children}</div>
    </Section>
  )
}

export default PageLayout
