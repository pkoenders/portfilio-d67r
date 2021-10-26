import styled from 'styled-components'

const ListWrapper = styled.div.attrs({ id: 'listResults' })`
  display: flex;
  flex-direction: column;
  grid-gap: ${({ theme }) => theme.padding.default};
`
export default ListWrapper
