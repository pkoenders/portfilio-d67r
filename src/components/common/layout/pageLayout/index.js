import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
  // Section - For other templates that are not Homepage and General page
  display: flex;
  flex-direction: column;
  padding: 0 0 ${({ theme }) => theme.padding['2xl']};

  &.withSecondaryNav {
    margin-top: 124px;
  }

  > div,
  > nav,
  > article {
    max-width: ${({ theme }) => theme.screens.xl};
    margin: 0px auto;
    padding: 0 ${({ theme }) => theme.padding['1/2']};
  }

  &.xs > div,
  &.xs > nav,
  &.xs > article {
    max-width: ${({ theme }) => theme.screens.xs};
  }
  &.sm > div,
  &.sm > nav,
  &.sm > article {
    max-width: ${({ theme }) => theme.screens.sm};
  }
  &.md > div,
  &.md > nav,
  &.md > article {
    max-width: ${({ theme }) => theme.screens.md};
  }
  &.lg > div,
  &.lg > nav,
  &.lg > article {
    max-width: ${({ theme }) => theme.screens.lg};
  }
  &.xl > div,
  &.xl > nav,
  &.xl > article {
    max-width: ${({ theme }) => theme.screens.xl};
  }
  &.xxl > div,
  &.xxl > nav,
  &.xxl > article {
    max-width: ${({ theme }) => theme.screens.xxl};
  }
  &.full > div,
  &.full > nav,
  &.full > article {
    max-width: ${({ theme }) => theme.screens.full};
    padding: 0;
  }
`

const PageLayout = ({ children, classOverides, marginTop, paddingTop }) => {
  return (
    <Section className={classOverides} style={{ marginTop: marginTop, paddingTop: paddingTop }}>
      {children}
    </Section>
  )
}

export default PageLayout
