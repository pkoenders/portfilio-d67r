import React from 'react'
import styled from 'styled-components'

const Input = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;

  label {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;

    @include respond-below(sm) {
      margin: 0 0;
    }

    input {
      padding: ${({ theme }) => theme.padding['1/4']} 0 ${({ theme }) => theme.padding['1/4']}
        ${({ theme }) => theme.padding['2xl']};
    }

    i {
      position: absolute;
      left: ${({ theme }) => theme.margin['1/2']};
      align-self: center;
    }
  }
`

const Search = ({ handleSearchChange }) => {
  return (
    <Input>
      <label className={'search'} htmlFor="search">
        <input
          type="search"
          name="search"
          //value=''
          aria-label="Search"
          placeholder="Type to filter results..."
          //required
          onChange={handleSearchChange}
        />
        <i className="material-icons-round" aria-hidden="true">
          search
        </i>
        {/* <i className='material-icons-round' aria-hidden="true">autorenew</i> */}
      </label>
    </Input>
  )
}
export default Search
