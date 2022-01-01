import React from 'react'

import styled from 'styled-components'

const SkipFilterWrapper = styled.span.attrs({
  'aria-label': 'Skip filter',
})`
  
    position: absolute;
    top: -100%;
/* transform: translateY(-100%); */ 
    left: 0px;
    right: 0px;
    display: flex;
    justify-content: center;
    height: 60px;
    background-color: ${({ theme }) => theme.colors.card[200]};
    z-index: 100000;

    .skipLink {
      margin: 0 ${({ theme }) => theme.margin['1/2']};
      white-space: nowrap;
      display: inherit;
      width: fit-content;
      align-self: center;
      text-transform: uppercase;
      padding: ${({ theme }) => theme.padding['1/4']} ${({ theme }) => theme.padding.default};

      color: ${({ theme }) => theme.colors.grey[100]};
      background-color: ${({ theme }) => theme.colors.header.default};

      border-radius: ${({ theme }) => theme.borderRadius.sm};
      box-shadow: ${({ theme }) => theme.boxShadow.lg} !important;
    }
    .skipLink:focus {
    }
  }
  &&:focus-within {
    top: ${({ theme }) => theme.padding['1/8']};
    .skipLink:focus {
    }
  }
`
const SkipFilter = ({ showTags }) => {
  function KeepLocation() {
    setTimeout(function () {
      window.scrollTo(0, 0)
    }, 10)

    // window.scrollTo(0, 0)
    // console.log('Scroll to top')
  }

  return (
    <SkipFilterWrapper>
      <a className="skipLink" href="#listResults" onClick={KeepLocation}>
        Skip filter
      </a>

      {showTags === true && (
        <a className="skipLink" href="#searchInput" onClick={KeepLocation}>
          Skip filter tags
        </a>
      )}
    </SkipFilterWrapper>
  )
}

export default SkipFilter
