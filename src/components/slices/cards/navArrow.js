import React from 'react'

// Icons
import IconMaterial from '/src/components/common/icons/material'

import styled from 'styled-components'

const ArrowBtn = styled.button.attrs((props) => ({
  type: props.type || 'button',
}))`
  display: flex;
  align-items: center;
  /* cursor: pointer; */
  user-select: none;
  background-color: #ffffffa8 !important;
  padding: ${({ theme }) => theme.padding['1/2']} ${({ theme }) => theme.padding['1/4']};
  position: absolute;
  align-self: center;
  height: auto;
  z-index: 100;

  &.prev {
    left: 0px;
  }
  &.next {
    right: 0px;
  }
  &.disabled {
  }

  i {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.page.default};
  }
`
const NavArrow = (props) => {
  const disabeld = props.disabled ? 'disabled' : ''
  const direction = props.direction

  return (
    <>
      {direction === 'next' && (
        <ArrowBtn
          onClick={props.onClick}
          className={direction + ' ' + disabeld}
          aria-label="Slide to next item"
        >
          <IconMaterial icon={'arrow_forward_ios'} size={36} />
        </ArrowBtn>
      )}

      {direction === 'prev' && (
        <ArrowBtn
          onClick={props.onClick}
          className={direction + ' ' + disabeld}
          aria-label="Slide to previous item"
        >
          <IconMaterial icon={'arrow_back_ios'} size={36} />
        </ArrowBtn>
      )}
    </>
  )
}

export default NavArrow
