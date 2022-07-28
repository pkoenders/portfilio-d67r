import React, { useState, useEffect, useRef, useCallback } from 'react'

// Helpers
import i18n from '/config/i18n'

// Layout
import PageLayout from '/src/components/common/layout/pageLayout/'
import ListWrapper from '/src/components/common/layout/listResults/listWrapper'
import ListGrid from '/src/components/common/layout/listResults/listGrid'
import GridItem from './item'

// Filter componetent styles
import Filter from '/src/components/common/filter/filter'
import SkipFilter from '/src/components/common/filter/skipFilter'
import ListTagBtns from '/src/components/common/filter/tagBtns'
import SearchBox from '/src/components/common/filter/searchBox'
import SortList from '/src/components/common/filter/sortList'
import BtnListAscDesc from '/src/components/common/filter/btnListAscDesc'
import SearchInput from '/src/components/common/filter/searchInput'
import SearchTitle from '/src/components/common/filter/searchTitle'
import NoResults from '/src/components/common/filter/noResults'
import ListStyleWrapper from '/src/components/common/filter/listStyleWrapper'
import BtnListStyle from '/src/components/common/filter/btnListStyle'

const BlogList = ({ currentLang, pageIntro, dataList }) => {
  // A little loDash for sorting assistance
  var _ = require('lodash')

  // Page title
  const pageTitle = pageIntro.title.text

  // Set up some states
  // And set the intial sort by title
  var [sourceList, setSourceList] = useState(
    _.sortBy(dataList.items, 'item.document.data.creation_date').reverse()
  )
  let [allPosts, setAllPosts] = useState(dataList.items)
  let [queryValue, setQueryValue] = useState('')
  let [queryLength, setQueryLength] = useState(0)
  const [ascDesc, setAscDescSort] = useState(true) // false for Acs. true for Desc
  const ascDescRef = useRef()
  ascDescRef.current = ascDesc

  // If user has set the layout style, it is saved to sessionStorage
  // When you're rendering on the server, you do not have a browser and thus we do not have access to all the APIs that the browser provides, including localStorage. We need to check if the window is defined.
  if (typeof window !== 'undefined') {
    var currentLayoutStyle = sessionStorage.getItem('Layout style')
  } else {
    currentLayoutStyle = 'list'
  }
  // Initiate layout style - 'list || grid' - default is 'list'
  const [layoutStyle, updateLayoutStlye] = useState('list')
  useEffect(() => {
    currentLayoutStyle !== null
      ? updateLayoutStlye(currentLayoutStyle)
      : updateLayoutStlye(layoutStyle)
  }, [currentLayoutStyle, layoutStyle])

  // Toggle sort order - Asc / Desc
  const sortAscDescClick = useCallback(() => {
    setAscDescSort(ascDesc === true ? false : true)
    setAllPosts(allPosts.reverse())
  }, [ascDesc, allPosts])

  // Select sort item
  const sortItemClick = useCallback(
    (e) => {
      // console.log('event')

      // Add the node to be sorted to the node path
      const filterNode = e.getAttribute('data-nodepath')

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

        // Check  AscDesc state
        ascDescRef.current === false && sortPosts.reverse()

        // Update the states of 'allposts' and 'filteredData'
        setAllPosts(sortPosts)
        setState({ filteredData: sortPosts })
      } else {
        // Else sort the 'sourceList'
        sortPosts = _.cloneDeep([...dataList.items])
        sortPosts = _.sortBy(dataList.items, filterNode)

        // Check AscDesc state
        ascDescRef.current === false && sortPosts.reverse()

        setSourceList(sortPosts)
        setAllPosts(sortPosts)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [allPosts, ascDesc]
  )

  // Get tag data
  const allItems = dataList.items

  // Tags: Create a tag list of all items
  var tagList = []
  allItems.map((node, index) => tagList.push(allItems[index].item.tags))

  // Reset functions

  // Reset filters
  function resetFilters(e) {
    resetSearchQuery()
    resetFilterBtns()
    resetCards()
    handleSearchChange(e)
  }

  // Reset card state (on filter - mouseDown)
  const resetCards = () => {
    const filteredData = allItems
    const query = ''
    setState({
      query,
      filteredData,
    })
  }

  // Reset search query
  function resetSearchQuery() {
    var searchInput = document.querySelector('.search input')
    if (searchInput) {
      searchInput.value = ''
    }
  }

  // Reset filter btns
  function resetFilterBtns() {
    // console.log('reset')

    var filterBtns = document.getElementsByClassName('tagButton')

    for (var x = 0; x < filterBtns.length; ++x) {
      filterBtns[x].setAttribute('aria-checked', 'false')
    }

    var allCards = document.getElementsByClassName('item')
    for (var y = 0; y < allCards.length; ++y) {
      allCards[y].classList.add('show')
      allCards[y].classList.remove('isActive')
    }

    var tagName = document.getElementsByClassName('tagName')
    for (var z = 0; z < tagName.length; ++z) {
      tagName[z].classList.remove('isActive')
    }
  }

  // Input filter:
  const emptyQuery = ''

  const [state, setState] = useState({
    filteredData: [''],
    query: emptyQuery,
  })

  const handleSearchChange = (e) => {
    // Get the search value
    var searchVal = e
    searchVal === '' ? (searchVal = '') : (searchVal = e.target.value)

    // Reset any active tags - When  searching by input
    searchVal.length > 0 && resetFilterBtns()

    // Set the search value and length
    setQueryValue(searchVal)
    setQueryLength(searchVal.length)

    // Consts for the filtered data array
    const query = searchVal
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
      <Filter>
        {pageTitle !== null && <h1>{pageTitle}</h1>}

        {pageIntro.show_tags === true && tagList.length > 0 && (
          <>
            <SkipFilter showTags={pageIntro.show_tags} />
            <ListTagBtns
              resetFilterBtns={resetFilterBtns}
              resetFilters={resetFilters}
              tagList={tagList}
              resetCards={resetCards}
            />
          </>
        )}

        {pageIntro.show_input === true && (
          <SearchBox className="search">
            <SearchInput
              currentLang={currentLang}
              handleSearchChange={handleSearchChange}
              queryLength={queryLength}
              resetFilters={resetFilters}
            />
          </SearchBox>
        )}
      </Filter>

      {/* Set content width - xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'full', 'marginTopInital' = 0, 'paddingTopInital' = 0 */}
      <PageLayout
        classOverides={`md list marginTopInital ${
          pageIntro.show_sorting || pageIntro.show_input === true ? 'paddingTopInital' : ''
        }`}
      >
        <ListWrapper>
          {/* Set the filter / list style */}

          <ListStyleWrapper>
            <div>
              <SearchTitle
                filteredData={filteredData}
                queryValue={queryValue}
                queryLength={queryLength}
              />
            </div>

            {allPosts.length > 0 && (
              <div>
                {pageIntro.show_sorting === true && (
                  <SortList
                    currentLang={currentLang}
                    sortItemClick={sortItemClick}
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
                  <BtnListAscDesc sortAscDescClick={sortAscDescClick} />
                )}

                {pageIntro.show_grid_layout === true && (
                  <>
                    <BtnListStyle
                      ariaPressed={`${layoutStyle}` === 'list' ? 'true' : 'false'}
                      itemID="list"
                      ariaLabel={'View by list'}
                      buttonIcon={'list'}
                      updateLayoutStlye={updateLayoutStlye}
                    />

                    <BtnListStyle
                      ariaPressed={`${layoutStyle}` === 'grid' ? 'true' : 'false'}
                      itemID="grid"
                      ariaLabel={'View by grid'}
                      buttonIcon={'grid_view'}
                      updateLayoutStlye={updateLayoutStlye}
                    />
                  </>
                )}
              </div>
            )}
          </ListStyleWrapper>

          {allPosts.length > 0 ? (
            <ListGrid
              defaultColCount={2}
              className={
                layoutStyle === 'list' ? 'list' : pageIntro.show_grid_layout === true ? '' : 'list'
              }
            >
              {allPosts.map((node, index) => (
                <GridItem
                  listStyle={
                    layoutStyle === 'list'
                      ? 'list'
                      : pageIntro.show_grid_layout === true
                      ? ''
                      : 'list'
                  }
                  defaultColCount={3}
                  thisItem={allPosts[index]}
                  showTags={pageIntro.show_tags}
                  key={allPosts[index].item.id}
                  id={allPosts[index].item.id}
                  index={index}
                  listLength={allPosts.length}
                />
              ))}
            </ListGrid>
          ) : (
            <NoResults resetFilters={resetFilters} query={query} />
          )}
        </ListWrapper>
      </PageLayout>
    </>
  )
}

export default BlogList
