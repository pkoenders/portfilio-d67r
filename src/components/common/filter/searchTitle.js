import React from 'react'

import styled from 'styled-components'

const SearchTitleWrapper = styled.h3`
  display: flex;
  text-align: center;
  width: fit-content;
  margin: -${({ theme }) => theme.margin['1/4']} auto;
`

const SearchTitle = ({ filteredData, queryValue, queryLength }) => {
  return (
    <>
      {queryLength >= 1 &&
        (filteredData.length > 0 ? (
          <SearchTitleWrapper>
            <strong> {queryValue} </strong>
          </SearchTitleWrapper>
        ) : (
          <SearchTitleWrapper>
            Sorry, no results found for '<strong> {queryValue} </strong>'
          </SearchTitleWrapper>
        ))}
    </>
  )
}

export default SearchTitle
