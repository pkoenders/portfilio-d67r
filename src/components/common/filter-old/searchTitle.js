import React from 'react'

import styled from 'styled-components'

const SearchTitleWrapper = styled.p`
  display: block;

  /* font-weight: 600; */
  text-align: left;

  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
  padding: 0 ${({ theme }) => theme.padding['1/2']} 0 0;
  margin: ${({ theme }) => theme.margin['1/8']} 0 !important;
  width: auto;
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    margin: ${({ theme }) => theme.margin['1/8']} 0 ${({ theme }) => theme.margin['1/2']}!important;
  }

  strong {
    width: auto;
    overflow-wrap: inherit;
    word-wrap: break-word;
    hyphens: auto;
    font-weight: 400;
    /* font-size: 1.2rem; */
  }
`

const SearchTitle = ({ filteredData, queryValue, queryLength }) => {
  return (
    <>
      {queryLength >= 1 &&
        (filteredData.length > 0 ? (
          <SearchTitleWrapper>{queryValue}</SearchTitleWrapper>
        ) : (
          <SearchTitleWrapper>
            Sorry, no results found for '<strong> {queryValue} </strong>'
          </SearchTitleWrapper>
        ))}
    </>
  )
}

export default SearchTitle
