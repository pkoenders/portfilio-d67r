import React from 'react'
import styled from 'styled-components'

const Tags = styled.div`
  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
    grid-gap: ${({ theme }) => theme.margin['1/4']};
    align-self: flex-start;
    margin: 0;
    li {
      font-size: 80%;
      line-height: initial;
      text-transform: uppercase;
      letter-spacing: ${({ theme }) => theme.letterSpacing.wide};
      padding: ${({ theme }) => theme.padding['1/8']} ${({ theme }) => theme.padding['1/4']};
      white-space: nowrap;

      /* background-color: ${({ theme }) => theme.colors.card[300]}; */
      background-color: ${({ theme }) => theme.colors.tertiary[200]};
      /* border: 1px solid ${({ theme }) => theme.colors.secondary[400]}; */
      border: 1px solid transparent;
      color: ${({ theme }) => theme.colors.page.default};
      white-space: nowrap;
      text-transform: uppercase;
      border-radius: ${({ theme }) => theme.borderRadius.sm};
    }
    li.isActive {
      /* color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.primary.default}; */
      color: ${({ theme }) => theme.colors.page.default};
      background-color: ${({ theme }) => theme.colors.tertiary.default};
      background-color: ${({ theme }) => theme.colors.secondary[600]};
      /* border: 1px solid ${({ theme }) => theme.colors.secondary[800]}; */
      border: 1px solid transparent;
    }
  }
`

const SupporterTags = ({ tagData }) => {
  const _ = require('lodash')
  return (
    <Tags className="tags">
      <ul className="tagNames">
        {tagData.map((node, index) => (
          <li className={'tagName ' + _.camelCase(node)} key={`supporter-tags` + index}>
            {node}
          </li>
        ))}
      </ul>
    </Tags>
  )
}

export default SupporterTags
