import React, { useState, useCallback } from 'react'

// Helpers
import i18n from '/config/i18n'

// Layout
import Section from '/src/components/common/layout/pageLayout/'
// import PageTitle from '/src/components/common/layout/listResults/listPageTitle'
import ListWrapper from '/src/components/common/layout/listResults/listWrapper'
import ListGrid from '/src/components/common/layout/listResults/listGrid'
// import ItemWrapper from './itemWrapper'
import GridItem from './item'

// Filter componetent styles
import Filter from '/src/components/common/filter/filter'
import ListTagBtns from '/src/components/common/filter/tagBtns'
import SearchBox from '/src/components/common/filter/searchBox'
import SortList from '/src/components/common/filter/sortList'
import AscDesc from '/src/components/common/filter/ascDesc'
import SearchInput from '/src/components/common/filter/searchInput'
import SearchTitle from '/src/components/common/filter/searchTitle'
import NoResults from '/src/components/common/filter/noResults'

const BlogList = ({ currentLang, pageIntro, dataList }) => {
  // A little loDash for sorting assistance
  var _ = require('lodash')

  // Set up some states
  // And set the intial sort by title
  var [sourceList, setSourceList] = useState(
    _.sortBy(dataList.items, 'item.document.data.creation_date').reverse()
  )
  var [allPosts, setAllPosts] = useState(dataList.items)
  var [queryValue, setQueryValue] = useState('')
  var [queryLength, setQueryLength] = useState(0)
  const [ascDesc, setAscDescSort] = useState(true) // false for Acs. true for Desc

  // Toggle sort order - Asc / Desc
  const sortAscDescClick = useCallback(
    (e) => {
      e.target.classList.toggle('desc')
      setAscDescSort(!ascDesc)
      setAllPosts(allPosts.sort().reverse())
    },
    [allPosts, ascDesc]
  )

  // Toggle sort list
  const toggleSortListClick = useCallback((e) => {
    e.stopPropagation()

    const selectListBtn = e.target
    const selectListLabel = selectListBtn.querySelector('span').innerText
    const selectList = selectListBtn.nextSibling

    selectListBtn.parentNode.classList.toggle('isActive')
    selectList.classList.toggle('isActive')

    // Set the buttons state, if matched sort label? then hide
    let btns = selectList.childNodes
    for (let i = 0; i < btns.length; i++) {
      btns[i].innerText === selectListLabel && btns[i].classList.add('hide')
    }
  }, [])

  // Select sort item
  const sortItemClick = useCallback(
    (e) => {
      // Update the label title to the selected title
      const sortLabel = e.target.parentNode.previousSibling.querySelector('span')
      sortLabel.innerText = e.target.innerText

      // Add the node to be sorted to the node path
      const filterNode = e.target.getAttribute('data-nodepath')

      // If filter by date, we srt a flag to reverse order to show latested at top of list
      const filterDate = filterNode.includes('date')

      // https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value?page=1&tab=votes#tab-top
      // Sort the node with lodash
      // First create an enpty array to hold a cloned list
      var sortPosts = []

      // Sort 'filteredData' or 'allPost'
      // Has the user entered search txt?
      if (queryLength > 0) {
        // If there is search txt, we get the 'filteredData' array
        sortPosts = _.cloneDeep([...filteredData]) // Use deep to ensure state updates?
        sortPosts = _.sortBy(filteredData, filterNode)
        ascDesc === false && sortPosts.reverse()
        // Update the states of 'allposts' and 'filteredData'
        setAllPosts(sortPosts)
        setState({ filteredData: sortPosts })
      } else {
        // Else sort the 'sourceList'
        sortPosts = _.cloneDeep([...dataList.items])
        sortPosts = _.sortBy(dataList.items, filterNode)
        ascDesc === false && sortPosts.reverse()
        filterDate === true && sortPosts.reverse()
        setSourceList(sortPosts)
        setAllPosts(sortPosts)
      }
      // console.log(ascDesc)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [allPosts, ascDesc]
  )

  // Close the sort list from window click
  if (typeof window !== 'undefined') {
    window.addEventListener('click', function () {
      handleCloseSortList()
    })
  }
  function handleCloseSortList() {
    const selectList = document.querySelector('.sort div')
    const sortList = document.querySelector('.sort div div')
    if (selectList) {
      selectList.classList.remove('isActive')
      sortList.classList.remove('isActive')

      // Reset the buttons
      let btns = sortList.childNodes
      for (let i = 0; i < btns.length; i++) {
        btns[i].classList.remove('hide')
      }
    }
  }

  // Get tag data
  const allItems = dataList.items

  // Tags: Create a tag list of all items
  var tagList = []
  allItems.map((node, index) => tagList.push(allItems[index].item.tags))

  // Reset functions
  // Reset card state (on filter - mouseDown)
  const resetCards = () => {
    const filteredData = allItems
    const query = ''
    setState({
      query,
      filteredData,
    })
  }

  function resetFilters(evt) {
    resetFilterBtns()
    resetSearchQuery()
    handleSearchChange(evt)
  }

  function resetFilterBtns() {
    var filterBtns = document.getElementsByClassName('tagButton')
    for (var x = 0; x < filterBtns.length; ++x) {
      filterBtns[x].classList.remove('isActive')
    }

    var allCards = document.getElementsByClassName('item')
    for (var y = 0; y < allCards.length; ++y) {
      allCards[y].classList.add('show')
    }

    var tagName = document.getElementsByClassName('tagName')
    for (var z = 0; z < tagName.length; ++z) {
      tagName[z].classList.remove('isActive')
    }
  }

  function resetSearchQuery() {
    var searchInput = document.querySelector('.search input')
    if (searchInput) {
      searchInput.value = ''
    }
    setQueryValue(0)
    setQueryLength(0)
  }

  // Input filter:
  const emptyQuery = ''

  const [state, setState] = useState({
    filteredData: [''],
    query: emptyQuery,
  })

  const handleSearchChange = (event) => {
    //console.log(event.target.value)

    // Reset any active tags - Where eith searching by tag or by input
    resetFilterBtns()

    // Set the search value and lenth
    setQueryValue(event.target.value)
    setQueryLength(event.target.value.length)

    // Consts for the filtered data array
    const query = event.target.value
    const data = sourceList

    // Create an array for the filtered that matches the query
    const filteredData = data.filter((data) => {
      // Filter by...
      const { title, intro } = data.item.document.data
      // And filter by tags
      const { tags } = data.item.document

      return (
        title.text.toLowerCase().includes(query.toLowerCase()) ||
        intro.toLowerCase().includes(query.toLowerCase()) ||
        (tags && tags.join(' ').toLowerCase().includes(query.toLowerCase()))
      )
    })

    // And set the state of the query / filted data
    setState({
      query,
      filteredData,
    })

    // Set a state of allPosts to be filteredData. We set it here so can access it for Asc/Desc sorting
    setAllPosts(filteredData)
  }

  // Set state of allPosts. If empty, reset allPosts back to the sourceList
  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  allPosts = hasSearchResults ? filteredData : sourceList

  // Done - We can log the results
  // console.log(allPosts)

  return (
    // Set content width - xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'full'
    <>
      {pageIntro.show_filters === true && (
        <Filter>
          <div>
            {pageIntro.show_tags === true && tagList.length > 0 && (
              <ListTagBtns
                resetFilterBtns={resetFilterBtns}
                tagList={tagList}
                resetCards={resetCards}
                resetSearchQuery={resetSearchQuery}
              />
            )}

            <SearchBox className="search">
              {pageIntro.show_input === true && (
                <SearchInput
                  currentLang={currentLang}
                  handleSearchChange={handleSearchChange}
                  queryLength={queryLength}
                  resetFilters={resetFilters}
                />
              )}

              {pageIntro.show_sorting === true && (
                <SortList
                  currentLang={currentLang}
                  toggleSortListClick={toggleSortListClick}
                  sortItemClick={sortItemClick}
                  // Pass the 'Sort by' properties. First being the default. Will display Asc order
                  items={[
                    {
                      title: `${i18n[currentLang].sortByDate}`,
                      nodePath: 'item.document.data.creation_date',
                    },

                    {
                      title: `${i18n[currentLang].sortByTitle}`,
                      nodePath: 'item.document.data.title.text',
                    },
                    {
                      title: `Description`,
                      nodePath: 'item.document.data.intro',
                    },
                    // { title: 'URL', nodePath: 'link.document.data.web_address.url' },
                  ]}
                  sortAscDescClick={sortAscDescClick}
                />
              )}
              {(pageIntro.show_sorting === false && pageIntro.show_input === true) === true && (
                <AscDesc onClick={sortAscDescClick} />
              )}
            </SearchBox>
          </div>
        </Filter>
      )}

      <Section
        // style={{
        //   marginTop: '0px',
        // }}
        contentSize={'lg marginTopInital'}
      >
        {/* <PageTitle pageIntro={pageIntro} /> */}
        <ListWrapper>
          <SearchTitle
            filteredData={filteredData}
            queryValue={queryValue}
            queryLength={queryLength}
          />

          {allPosts.length > 0 ? (
            <ListGrid defaultColCount={2}>
              {allPosts.map((node, index) => (
                <GridItem
                  thisItem={allPosts[index]}
                  showTags={pageIntro.show_tags}
                  key={allPosts[index].item.id}
                  id={allPosts[index].item.id}
                />
              ))}
            </ListGrid>
          ) : (
            <NoResults resetFilters={resetFilters} query={query} />
          )}
        </ListWrapper>
      </Section>
    </>
  )
}

export default BlogList
