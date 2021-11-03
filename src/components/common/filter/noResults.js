import React from 'react'

// Buttons
import Button from '/src/components/common/buttons/linkButton'

import styled from 'styled-components'

const NoResultsWrapper = styled.div`
  margin: ${({ theme }) => theme.margin.default} auto;
  display: flex;
  flex-direction: column;
  text-align: center;

  span:first-of-type {
    margin: 0;
    font-size: 133px;
    font-weight: ${({ theme }) => theme.fontWeight.meduim};
    color: ${({ theme }) => theme.colors.tertiary.default};
  }

  button {
    margin: 0 auto;
    cursor: default !important;
  }
`
const NoResults = ({ resetFilters, query }) => {
  return (
    <NoResultsWrapper>
      <span>(·_·)</span>
      <Button
        onClick={resetFilters}
        buttonLabel={'Clear your filters and try again'}
        buttonStyle={'tertiary'}
        buttonType={'button'}
      />
    </NoResultsWrapper>
  )
}

export default NoResults
