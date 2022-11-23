import React, { useEffect, useState, useCallback } from 'react'

// Icons
import IconMaterial from '/src/components/common/icons/material'

import styled from 'styled-components'

const ListTagBtnsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10000;
  max-width: ${({ theme }) => theme.screens.md};
  margin: 0 auto;

  button {
    pointer-events: all;
    display: flex;
    position: absolute;
    width: fit-content;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    aspect-ratio: 1;
    padding: ${({ theme }) => theme.padding['1/4']};
    /* cursor: pointer; */
    user-select: none;
    background-color: #fff;
    color: ${({ theme }) => theme.colors.pageHold.default};
    border: 1px solid ${({ theme }) => theme.colors.pageHold[300]};
    border-radius: 999rem;

    position: absolute;
    top: -${({ theme }) => theme.margin['1/8']};

    left: 0px;
    font-size: 20px;

    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.primary[600]};
      box-shadow: ${({ theme }) => theme.boxShadow.default};
    }
    i {
      font-size: inherit;
      pointer-events: none;
    }

    &.tagReset {
      right: 0px;
      left: auto !important;

      i {
        pointer-events: none;
        @keyframes rotation {
          from {
            transform: rotate(0deg);
            transform: scale(1.25);
          }
          to {
            transform: rotate(180deg);
            opacity: 0;
          }
        }
      }
      &.rotate {
        i {
          animation: rotation 0.25s linear;
        }
      }
    }
  }

  .wrapper {
    height: 34px;
    display: flex;
    overflow: hidden;
    min-width: 100%;

    .inner {
      list-style: none;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      grid-gap: ${({ theme }) => theme.padding['1/4']};
      justify-content: flex-start;
      margin: 0 ${({ theme }) => theme.padding['2xl']};
      height: fit-content;
    }
  }

  .wrapper.showMore {
    height: auto;
    max-height: 100%;
    padding-bottom: 2px;
    /* transition: all 3.5s ease-in; */
  }

  .tagButton {
    font-size: 80%;
    display: flex;
    cursor: default;
    text-transform: uppercase;
    letter-spacing: ${({ theme }) => theme.letterSpacing.wide};
    height: fit-content;
    padding: ${({ theme }) => theme.padding['1/8']} ${({ theme }) => theme.padding['1/2']};
    white-space: nowrap;
    color: ${({ theme }) => theme.colors.pageHold.default};
    background-color: #fff;

    /* border: 1px solid ${({ theme }) => theme.colors.tertiary[400]}; */
    border: 1px solid transparent;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    box-shadow: ${({ theme }) => theme.boxShadow.default};
  }

  .tagButton:hover {
    /* background-color: ${({ theme }) => theme.colors.card[400]}; */
    border: 1px solid ${({ theme }) => theme.colors.primary[700]};
  }

  .tagButton[aria-checked='true'] {
    font-variation-settings: 'GRAD' 100;
    background-color: ${({ theme }) => theme.colors.tertiary[600]};
    border: 1px solid transparent;
    box-shadow: none;
  }
`

const ListTagBtns = ({ resetFilters, resetFilterBtns, tagList }) => {
  const _ = require('lodash')
  const [tagBtnsReset, setTagBtnsReset] = useState(false) // Toggle tag btns reset
  const [moreBtns, setMoreBtns] = useState(false)

  // Concat the tag lists
  var allTags = [].concat.apply([], tagList)

  // Filter duplicates
  tagList = uniq(allTags)
  function uniq(a) {
    var seen = {}
    return a.filter(function (item) {
      return seen.hasOwnProperty(item) ? false : (seen[item] = true)
    })
  }

  // Sort tag list (A-Z)
  tagList.sort()

  // Filter list items

  // Reset?
  function handleTagReset() {
    const searchInput = document.querySelector('.search input')
    if (searchInput.value.length > 0) {
      resetFilters('')
    }
  }

  function handleTagSelect(e) {
    if (!e.key) {
      toggleCheckBox(e)
    } else {
      switch (e.key) {
        case 'Enter':
        case 'Spacebar':
        case ' ':
          e.stopPropagation()
          e.preventDefault()
          toggleCheckBox(e)
          break

        case 'Escape':
          window.location.href = '#listResults'
          break

        default:
          break
      }
    }
  }

  function toggleCheckBox(e) {
    const tagBtn = e.target

    // Select filter btn
    tagBtn.getAttribute('aria-checked') === 'false'
      ? tagBtn.setAttribute('aria-checked', 'true')
      : tagBtn.setAttribute('aria-checked', 'false')

    //  var activeFilterBtns = document.getElementsByClassName('tagButton isActive')
    var allCards = document.getElementsByClassName('item')

    for (var i = 0; i < allCards.length; ++i) {
      // Check tag list for each card

      var allCardTags = document.getElementsByClassName('tagName')
      for (var x = 0; x < allCardTags.length; ++x) {
        var cardTag = allCardTags[x]

        // Select any tags in list and set its parent card to active
        if (cardTag.classList.contains(tagBtn.id)) {
          cardTag.classList.add('isActive')
          cardTag.closest('.item').classList.add('isActive')
        }

        // Unselect any tags in list
        // if (cardTag.classList.contains(tagBtn.id) && !tagBtn.classList.contains('isActive')) {
        if (
          cardTag.classList.contains(tagBtn.id) &&
          tagBtn.getAttribute('aria-checked') === 'false'
        ) {
          cardTag.classList.remove('isActive')
          cardTag.closest('.item').classList.remove('isActive')

          // Check all other tag lists. Get the nodes from each parent.
          // Overwite previous setting if active
          var localCardTags = cardTag.closest('.tagNames').childNodes
          for (var j = 0; j < localCardTags.length; ++j) {
            //Overwite previous setting if active
            localCardTags[j].classList.contains('isActive') &&
              cardTag.closest('.item').classList.add('isActive')
          }
        }
      }
    }

    updateAllCards()
  }

  const updateAllCards = useCallback(() => {
    var allCards = document.getElementsByClassName('item')
    var activeFilterBtns = document.querySelectorAll(".tagButton[aria-checked^='true']")

    // If all filter buttons are inActive Reset the cards to visible
    for (var i = 0; i < allCards.length; ++i) {
      allCards[i].classList.remove('show')
      if (activeFilterBtns.length === 0) {
        allCards[i].classList.add('show')
        allCards[i].classList.remove('isActive')
        allCards[i].setAttribute('aria-hidden', 'false')
      }

      if (allCards[i].classList.contains('isActive')) {
        allCards[i].setAttribute('aria-hidden', 'false')
      } else {
        allCards[i].setAttribute('aria-hidden', 'true')
      }
    }

    // Check if filter btns are active and display the reset btn
    activeFilterBtns.length === 0 ? setTagBtnsReset(false) : setTagBtnsReset(true)
  }, [])

  // Hide the reset btn
  const hideTagReset = useCallback(() => {
    updateAllCards()
    // console.log('Show/hide tag reset')

    var tagResetBtn = document.querySelector('.tagReset')

    if (tagResetBtn) {
      resetFilters('')
      tagResetBtn.classList.add('rotate')
      var delay = 245 // CSS rotate set to .250 - Shave a few millesonds off to protect any visual bumps?
      setTimeout(function () {
        tagResetBtn.classList.remove('rotate')
        setTagBtnsReset(false)
      }, delay)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetFilters, updateAllCards])

  // Toggle full view of btn list on browser size
  useEffect(() => {
    // Hide reset if input has a value
    const searchInput = document.querySelector('.search input')

    const tagWrapper = document.querySelector('.wrapper')
    const innerHeight = document.querySelector('.inner').offsetHeight
    const tagBtnHeight = document.querySelector('.tagButton').offsetHeight

    searchInput.addEventListener('keydown', function () {
      if (searchInput.value.length >= 0) {
        hideTagReset()
      }
    })

    // Check list height
    checkBtnsListHeight()
    'resize, keydown, mousedown, orientationchange'.split(', ').forEach(function (e) {
      window.addEventListener(e, () => {
        checkBtnsListHeight()
      })
    })

    function checkBtnsListHeight() {
      if (!document.querySelector('.tagButton')) {
        return
      }

      if (!tagWrapper.classList.contains('showMore')) {
        tagWrapper.style.height = tagBtnHeight + 2 + 'px' /* allow for drop shadow */
      }
      innerHeight > tagBtnHeight && setMoreBtns(true)

      if (innerHeight <= tagBtnHeight) {
        setMoreBtns(false)
        document.querySelector('.wrapper').classList.remove('showMore')
      }
    }

    return () => {
      // cancel the subscription
      setMoreBtns()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hideTagReset])

  // Toggle full view of btn list
  function toggleMoreTagBtns(e) {
    var tagWrapper = document.querySelector('.wrapper')
    var tagBtnHeight = document.querySelector('.tagButton').offsetHeight

    tagWrapper.classList.toggle('showMore')

    if (tagWrapper.classList.contains('showMore')) {
      tagWrapper.style.height = '100%'
    } else {
      tagWrapper.style.height = tagBtnHeight + 2 + 'px'
    }

    e.target.firstChild.innerHTML === 'unfold_more'
      ? (e.target.firstChild.innerHTML = 'unfold_less')
      : (e.target.firstChild.innerHTML = 'unfold_more')

    e.target.getAttribute('aria-expanded') === 'false'
      ? e.target.setAttribute('aria-expanded', 'true')
      : e.target.setAttribute('aria-expanded', 'false')
  }

  return (
    <ListTagBtnsWrapper>
      {moreBtns === true && (
        <button
          type="button"
          aria-label="Toggle to view all tags"
          aria-expanded="false"
          aria-controls="tagWrapper"
          onClick={toggleMoreTagBtns}
        >
          <IconMaterial icon={'unfold_more'} />
        </button>
      )}
      <p className="sr-only">Filter list by tags</p>
      <div
        id="tagWrapper"
        className="wrapper"
        role="group"
        aria-labelledby="group-label"
        // style={{ height: tagBtnHeight }}
      >
        <ul className="inner">
          {tagList.map((node, index) => (
            <li key={`tagButton` + index}>
              <span
                className="tagButton"
                role="checkbox"
                aria-checked="false"
                id={_.camelCase(node)}
                tabIndex="0"
                onClick={handleTagSelect}
                onKeyDown={handleTagSelect}
                onMouseUp={handleTagReset}
                onKeyUp={handleTagReset}
              >
                {node}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="utils">
        {tagBtnsReset === true && (
          <button type="button" className="tagReset" aria-label="Reset tags" onClick={hideTagReset}>
            <IconMaterial icon={'loop'} />
          </button>
        )}
      </div>
    </ListTagBtnsWrapper>
  )
}

export default ListTagBtns
