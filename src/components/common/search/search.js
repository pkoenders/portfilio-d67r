import React, { useState } from 'react'
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

const Search = ({ allPostsData, resetFilterBtns }) => {
  // Input filter
  const allPosts = allPostsData
  const emptyQuery = ''

  const [state, setState] = useState({
    filteredData: [''],
    query: emptyQuery,
  })

  const handleSearchChange = (event) => {
    //console.log(event.target.value)
    resetFilterBtns()
    const query = event.target.value
    const posts = allPosts || []

    const filteredData = posts.filter((post) => {
      // Filter by...
      const { title, content, location } = post.link.document.data
      // And filter by tags
      const { tags } = post.link.document

      return (
        title.text.toLowerCase().includes(query.toLowerCase()) ||
        content.text.toLowerCase().includes(query.toLowerCase()) ||
        location.toLowerCase().includes(query.toLowerCase()) ||
        // fullName.toLowerCase().includes(query.toLowerCase()) ||
        // intro.text.toLowerCase().includes(query.toLowerCase()) ||
        (tags && tags.join(' ').toLowerCase().includes(query.toLowerCase()))
      )
    })

    setState({
      query,
      filteredData,
    })
  }

  // Set state of posts
  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts

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
