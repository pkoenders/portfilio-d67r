import styled from 'styled-components'

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${({ theme }) => theme.screens.md};
  grid-column-gap: ${({ theme }) => theme.margin.default};
  grid-row-gap: ${({ theme }) => theme.margin['1/2']};
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    flex-direction: column;
  }

  @media (max-width: ${({ theme }) => theme.screens.md}) {
    margin: 0;
  }
`
export default SearchBox
