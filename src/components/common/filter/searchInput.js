import React from 'react'

// Helpers
import i18n from '/config/i18n'

// Icons
import IconMaterial from '/src/components/common/icons/material'

import styled from 'styled-components'

const Input = styled.div.attrs({ id: 'searchInput' })`
  display: flex;
  justify-content: center;
  margin: 0;
  width: 100%;

  [type='search']::-webkit-search-cancel-button,
  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  label {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;

    input {
      font-size: inherit;
      width: 100%;
      padding: ${({ theme }) => theme.padding['1/4']} 0 ${({ theme }) => theme.padding['1/4']}
        ${({ theme }) => theme.padding['2xl']};
      /* border: 1px solid ${({ theme }) => theme.colors.card[300]}; */
      /* border: 1px solid ${({ theme }) => theme.colors.primary[600]};
      border: 1px solid ${({ theme }) => theme.colors.tertiary[600]}; */
      border: 1px solid transparent;

      border-radius: 999rem;
    }
    input:hover,
    input:focus {
      border: 1px solid ${({ theme }) => theme.colors.tertiary[600]};
    }

    > i {
      user-select: none;
      position: absolute;
      left: ${({ theme }) => theme.padding['1/2']};
      align-self: center;
    }
  }
`

const Reset = styled.button.attrs((props) => ({
  type: props.type || 'button',
  'aria-label': 'Reset search input',
}))`
  position: absolute;
  align-self: center;
  cursor: pointer;
  user-select: none;
  right: ${({ theme }) => theme.margin['1/2']};
  opacity: 0.5;

  i {
    pointer-events: none;
    position: relative;
    display: flex;
    align-self: center;
  }
  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.colors.tertiary.default};
  }
`

const Search = ({ currentLang, handleSearchChange, queryLength, resetFilters }) => {
  function resetSearch(e) {
    e.target.parentNode.querySelector('input').focus()
    resetFilters(e)
  }
  return (
    <Input>
      <label className={'search'} htmlFor="search">
        <input
          type="search"
          name="search"
          aria-label="Search"
          placeholder={`${i18n[currentLang].searchPlacholder}`}
          onChange={handleSearchChange}
        />
        <IconMaterial icon={'search'} />
        {queryLength > 0 && (
          <Reset onClick={resetSearch}>
            <IconMaterial icon={'close'} />
          </Reset>
        )}
      </label>
    </Input>
  )
}
export default Search
