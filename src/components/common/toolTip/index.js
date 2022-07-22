import React from 'react'

import styled from 'styled-components'

const ToolTip = styled.div`
  position: absolute;
  /* visibility: hidden; */
  /* display: none; */
  /* visibility: hidden; */
  width: fit-content;
  white-space: nowrap;
  background-color: ${({ theme }) => theme.colors.grey[800]};
  color: #fff;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.grey[600]};
  border-radius: 2px;
  padding: ${({ theme }) => theme.padding['1/4']} ${({ theme }) => theme.padding['1/2']};
  bottom: 100%;
  margin-bottom: 10px;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.9s;

  & ::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -7px;
    border-width: 5px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.grey[800]} transparent transparent transparent;
  }

  &.show {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.3s;
  }
`

const ToolTipDefault = ({ content }) => {
  return <ToolTip className={'toolTip'}>{content}</ToolTip>
}

export default ToolTipDefault
