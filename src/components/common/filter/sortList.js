import React from 'react'

// Helpers
import i18n from '/config/i18n'

// Icons
import IconMaterial from '/src/components/common/icons/material'

// Filter componetent styles
import AscDesc from './ascDesc'

import styled from 'styled-components'

const SortListWrapper = styled.div.attrs((props) => ({
  'aria-label': 'Sort list',
}))`
  z-index: 200;
  position: relative;
  display: flex;
  flex-direction: row;
  grid-gap: ${({ theme }) => theme.margin['1/4']};
  width: auto;
  align-items: center;
  margin-left: 0;
  user-select: none;
  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    min-width: 100%;
  }

  > span {
    margin: 0;
    white-space: nowrap;
  }
  div {
    display: flex;
    flex-grow: 1;
    flex-basis: 0;
    align-items: center;
    user-select: none;
    min-width: 160px;
    position: relative;
    /* cursor: pointer; */
    background-color: ${({ theme }) => theme.colors.page.bground.default};
    border: 1px solid transparent;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    button {
      display: flex;
      /* cursor: pointer; */
      width: 100%;
      white-space: nowrap;
      align-items: center;
      padding: ${({ theme }) => theme.padding['1/4']} ${({ theme }) => theme.padding['1/2']};
    }

    div {
      /* min-width: fit-content; */
      background-color: inherit;
      border: inherit;
      border-top: none;
      border-radius: 0 0 ${({ theme }) => theme.borderRadius.sm}
        ${({ theme }) => theme.borderRadius.sm};
      position: absolute;
      left: -1px;
      right: -1px;
      top: 100%;
      width: auto;
      visibility: hidden;
      display: block;
      flex-direction: column;
      margin: -2px 0 0 0;
      padding: 2px 0 0 0;
      box-shadow: ${({ theme }) => theme.boxShadow.md} !important;

      button {
        display: flex;
        /* cursor: pointer; */
        white-space: nowrap;
        text-align: left;
        width: 100%;
        padding: 10px ${({ theme }) => theme.padding['1/2']};
        border-top: 1px solid ${({ theme }) => theme.colors.card[300]};
      }
      button.hide {
        display: none;
      }

      button:hover {
        background-color: ${({ theme }) => theme.colors.tertiary[100]};
        border-top: 1px solid ${({ theme }) => theme.colors.tertiary[600]};
      }
    }
    div.isActive {
      visibility: visible;
      border-color: ${({ theme }) => theme.colors.tertiary[600]};
    }
  }

  div.isActive,
  div:hover {
    border-color: ${({ theme }) => theme.colors.tertiary[600]};
    button {
      i {
        color: ${({ theme }) => theme.colors.tertiary.default};
      }
    }
  }

  div.isActive {
    button {
      i {
        transform: rotate(180deg);
      }
    }
  }
`

const SortSelect = styled.button.attrs((props) => ({
  type: props.type || 'button',
  // 'aria-label': 'Sort results',
}))`
  & span,
  i {
    pointer-events: none;
  }

  i {
    margin: 0 -${({ theme }) => theme.padding['1/4']} 0 auto;
  }
`
const SortItem = styled.button.attrs((props) => ({
  type: props.type || 'button',
  // 'aria-label': 'Select item',
}))``

// Toggle sort list - ariaExpanded
function toggleAria(e) {
  e.target.getAttribute('aria-expanded') === 'true'
    ? e.target.setAttribute('aria-expanded', 'false')
    : e.target.setAttribute('aria-expanded', 'true')
}

const Sort = ({ currentLang, items, toggleSortListClick, sortItemClick, sortAscDescClick }) => {
  return (
    <SortListWrapper className="sort">
      <span>{i18n[currentLang].sortBy}</span>

      <div>
        <SortSelect
          onClick={(e) => {
            toggleSortListClick(e)
            toggleAria(e)
          }}
          aria-label={`Sort by ${items[0].title}`}
        >
          <span>{items[0].title}</span>
          <IconMaterial icon={'expand_more'} />
        </SortSelect>

        <div>
          {items.map((node, i) => (
            <SortItem
              type="button"
              onClick={sortItemClick}
              data-nodepath={items[i].nodePath}
              key={'list-item'[i]}
            >
              {items[i].title}
            </SortItem>
          ))}
        </div>
      </div>
      <AscDesc onClick={sortAscDescClick} />
    </SortListWrapper>
  )
}

export default Sort
