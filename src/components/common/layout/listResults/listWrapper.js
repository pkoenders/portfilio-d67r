import styled from 'styled-components'

const ListWrapper = styled.div.attrs({ id: 'listResults' })`
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
  grid-gap: ${({ theme }) => theme.padding['1/2']};
  z-index: 99;
`
export default ListWrapper
