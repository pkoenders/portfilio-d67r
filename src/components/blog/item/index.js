import React from 'react'

// Helpers
import { validateString } from '/src/utils/helpers'

// Layout
import Section from '/src/components/common/layout/pageLayout/'
import SliceZone from '/src/components/slices/sliceZone'

import styled from 'styled-components'

const Header = styled.header`
  /* max-width: ${({ theme }) => theme.screens.sm};
  padding: 0 ${({ theme }) => theme.margin['1/2']}; */
  display: flex;
  position: relative;
  grid-gap: ${({ theme }) => theme.padding.default};
  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    flex-direction: column;
    grid-gap: ${({ theme }) => theme.padding['1/2']};
  }
  margin: ${({ theme }) => theme.padding['4xl']} auto ${({ theme }) => theme.padding['1/2']} auto;
  /* border-bottom: 4px solid ${({ theme }) => theme.colors.secondary[300]}; */

  color: ${({ theme }) => theme.colors.accent.default};

  &::after {
    position: absolute;
    content: '';
    height: 1px;
    left: 0;
    right: 0;
    bottom: 0px;
    background: ${({ theme }) => theme.colors.primary[400]};
    /* background: rgb(255, 255, 255);
    background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(81, 191, 235, 1) 100%); */
  }

  & .intro {
    width: 100%;
    display: flex;
    flex-direction: column;
    grid-gap: ${({ theme }) => theme.padding['1/2']};
    margin-bottom: ${({ theme }) => theme.margin['1/4']};
  }
`

const Body = styled.article`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  grid-gap: ${({ theme }) => theme.padding['1/2']};
  width: 100%;

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    grid-gap: ${({ theme }) => theme.padding['1/4']};
    width: fit-content;
  }

  time {
    color: ${({ theme }) => theme.colors.page[600]};
  }
`

const BlogPost = ({ currentLang, itemData }) => {
  const blogItem = itemData.data
  const title = validateString(blogItem.title.text)
  const date = blogItem.release_date
  // const content = validateString(blogItem.conent.raw)

  return (
    // Set content width - xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'full'
    <Section classOverides={'sm hasSecondaryNav'}>
      <div>
        <Header>
          <div className="intro">{title && <h1>{title}</h1>}</div>
        </Header>

        <Body>
          {date && <time>{date}</time>}
          <SliceZone currentLang={currentLang} sliceZone={itemData.data.body} />
        </Body>
      </div>
    </Section>
  )
}

export default BlogPost
