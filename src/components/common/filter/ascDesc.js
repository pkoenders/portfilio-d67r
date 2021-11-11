import React from 'react'

// Icons
import IconMaterial from '/src/components/common/icons/material'

import styled from 'styled-components'

const AscDescBtnWrapper = styled.button.attrs((props) => ({
  type: props.type || 'button',
  'aria-label': 'Sort by ascending or descending',
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  /* cursor: pointer; */
  padding: ${({ theme }) => theme.padding['1/4']};
  user-select: none;
  background-color: ${({ theme }) => theme.colors.page.bground.default};
  /* border: 1px solid ${({ theme }) => theme.colors.card[300]};
  border: 1px solid ${({ theme }) => theme.colors.primary[600]};
  border: 1px solid ${({ theme }) => theme.colors.tertiary[600]}; */
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.borderRadius.sm};

  i {
    pointer-events: none;
  }
  &.desc {
    i {
      transform: rotate(180deg);
    }
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary.default};
    border-color: ${({ theme }) => theme.colors.tertiary[600]};
    i {
      color: ${({ theme }) => theme.colors.tertiary.default};
    }
  }
`
const AscDesc = ({ onClick }) => {
  return (
    <AscDescBtnWrapper onClick={onClick} className="order" aria-live="polite">
      <IconMaterial icon={'filter_list'} />
    </AscDescBtnWrapper>
  )
}

export default AscDesc
