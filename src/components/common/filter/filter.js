import styled from 'styled-components'

const FilterWrapper = styled.div`
  margin-top: ${({ theme }) => theme.header.height};
  padding: ${({ theme }) => theme.padding['1/2']};
  background-color: ${({ theme }) => theme.colors.card[200]};
  display: flex;
  flex-direction: column;
  grid-gap: ${({ theme }) => theme.margin['1/2']};
  position: relative;

  h1 {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize['4xl']};
    line-height: initial;
  }

  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    flex-direction: column;
    h1 {
      font-size: ${({ theme }) => theme.fontSize['3xl']};
    }
  }

  @media print {
    display: none;
  }
`

export default FilterWrapper
