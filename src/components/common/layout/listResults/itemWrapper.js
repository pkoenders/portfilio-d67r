import styled from 'styled-components'

const ItemWrapper = styled.li`
  display: none;

  a,
  a:link,
  a:hover,
  a:visited {
    text-decoration: none !important;
    width: 100%;
  }

  &.show,
  &.isActive {
    display: flex;
    height: fit-content;
  }
`
export default ItemWrapper
