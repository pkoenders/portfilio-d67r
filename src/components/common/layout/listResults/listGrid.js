import styled from 'styled-components'

const Grid = styled.ul`
  display: grid;
  position: relative;
  align-items: flex-start;
  grid-template-columns: repeat(${(props) => props.defaultColCount}, 1fr);

  grid-row-gap: ${({ theme }) => theme.padding['1xl']};
  /* grid-row-gap: 0; */
  grid-column-gap: ${({ theme }) => theme.padding['4xl']};

  grid-auto-rows: min-content;
  list-style: none;
  margin: 0;
  min-height: fit-content !important;
  height: 100%;
  align-content: space-between;
  align-items: flex-start;
  justify-content: space-around;
  z-index: 1000;
  width: auto;

  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.screens.md}) {
    grid-row-gap: ${({ theme }) => theme.padding['1xl']};
    grid-column-gap: ${({ theme }) => theme.padding.default};
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    grid-row-gap: ${({ theme }) => theme.padding['1xl']};
    grid-column-gap: ${({ theme }) => theme.padding.default};
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.screens.xs}) {
    grid-row-gap: ${({ theme }) => theme.padding['1xl']};
    grid-column-gap: ${({ theme }) => theme.padding.default};
    grid-template-columns: repeat(1, 1fr);
  }

  li {
    transition: ${({ theme }) => theme.transition.easeOut.quick};
    z-index: 5;
    margin: 0;
    /* padding-bottom: ${({ theme }) => theme.padding['4xl']}; */
  }
`

export default Grid
