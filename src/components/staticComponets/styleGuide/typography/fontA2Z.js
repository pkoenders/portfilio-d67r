import React from 'react'

import styled from 'styled-components'

const StyleA2Z = styled.div`
  background-color: ${({ theme }) => theme.colors.page.bground.default};

  &.dark {
    margin-top: 0px;
    color: ${({ theme }) => theme.colors.page.bground.default};
    background-color: ${({ theme }) => theme.colors.page['900']};
  }
  .upperCase {
    text-transform: uppercase;
  }
`
const FontA2Z = ({ fontType }) => {
  return (
    <>
      <StyleA2Z>
        <span className="upperCase">abcdefghijklamnopqrstuvwxyz</span>
        <span>abcdefghijklamnopqrstuvwxyz</span>
        <span>0123456789</span>
        <span>ā, ē, ī, ō, ū, Ā, Ē, Ī, Ō and Ū</span>
      </StyleA2Z>
      <StyleA2Z className="dark">
        <span>Almost before we knew it, we had left the ground.</span>
      </StyleA2Z>
    </>
  )
}

export default FontA2Z
