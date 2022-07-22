import styled from 'styled-components'

const PageHeader = styled.header`
  display: flex;
  position: relative;
  width: 100%;
  grid-gap: ${({ theme }) => theme.padding.default};
  padding: ${({ theme }) => theme.padding.default} 0;
  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    flex-direction: column;
    grid-gap: ${({ theme }) => theme.padding['1/2']};
  }

  color: ${({ theme }) => theme.colors.accent.default};

  &::after {
    position: absolute;
    content: '';
    /* height: 1px; */
    left: 0;
    right: 0;
    bottom: 0px;
    /* background: ${({ theme }) => theme.colors.primary[400]}; */
  }

  & .intro {
    width: 100%;
    display: flex;
    flex-direction: column;
    grid-gap: ${({ theme }) => theme.padding['1/2']};
    margin-bottom: ${({ theme }) => theme.margin['1/4']};
  }
`
export default PageHeader
