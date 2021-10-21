import React from 'react'

// Helpers
import { RichText } from 'prismic-reactjs'
import linkResolver from '../../../../utils/linkResolver'

import styled from 'styled-components'

const ListPageTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: ${({ theme }) => theme.padding['1/4']};
  margin: 0 ${({ theme }) => theme.margin['4xl']};
  p {
    width: 66%;
  }
  @media (max-width: ${({ theme }) => theme.screens.md}) {
    p {
      width: 100%;
    }
  }
  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    margin: 0;
  }
`
const ListPageTitle = ({ pageIntro }) => {
  const title = pageIntro.title.text
  const intro = pageIntro.intro

  return (
    <ListPageTitleWrapper>
      {title && <h1>{title}</h1>}
      {intro.text && <RichText render={intro.raw} linkResolver={linkResolver} />}
    </ListPageTitleWrapper>
  )
}
export default ListPageTitle
