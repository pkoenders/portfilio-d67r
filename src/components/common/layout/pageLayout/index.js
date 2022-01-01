import React from 'react'
import styled from 'styled-components'

const Page = styled.div`
  // Section - For other templates that are not Homepage and General page
  display: block;
  display: flex;
  flex-direction: column;
  grid-gap: ${({ theme }) => theme.padding['1/2']};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.padding['1/2']} ${({ theme }) => theme.padding['2xl']};
  max-width: ${({ theme }) => theme.screens.xl};
  width: 100%;

  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    padding: ${({ theme }) => theme.padding['1/2']} !important;
  }

  &.withSecondaryNav {
    margin-top: ${({ theme }) => theme.header.withSecondaryNav.height};
    padding: ${({ theme }) => theme.padding.default} ${({ theme }) => theme.padding['1/2']}
      ${({ theme }) => theme.padding['2xl']};
  }

  /* &.list {
    grid-gap: 0;
  } */

  &.xs {
    max-width: ${({ theme }) => theme.screens.xs};
  }
  &.sm {
    max-width: ${({ theme }) => theme.screens.sm};
  }
  &.md {
    max-width: ${({ theme }) => theme.screens.md};
  }
  &.lg {
    max-width: ${({ theme }) => theme.screens.lg};
  }
  &.xl {
    max-width: ${({ theme }) => theme.screens.xl};
  }
  &.xxl {
    max-width: ${({ theme }) => theme.screens.xxl};
  }
  &.full {
    max-width: ${({ theme }) => theme.screens.full};
    padding: 0;
  }
`

const PageLayout = ({ children, classOverides }) => {
  return <Page className={classOverides}>{children}</Page>
}

export default PageLayout
