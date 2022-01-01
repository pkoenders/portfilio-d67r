import styled from 'styled-components'

const PageBody = styled.article`
  display: flex;
  flex-direction: column;
  grid-gap: ${({ theme }) => theme.padding['1/2']};
  width: 100%;

  /* h3 {
    font-family: ${({ theme }) => theme.font.sans};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.fontSize['xl']};
  } */

  time {
    color: ${({ theme }) => theme.colors.page[700]};
    line-height: initial;
  }

  &.galleryContent {
    flex-direction: row;
    @media (max-width: ${({ theme }) => theme.screens.sm}) {
      flex-direction: column;
    }
    > div {
      width: 33%;
      /* display: grid; */
      display: flex;
      flex-direction: column;
      grid-gap: ${({ theme }) => theme.padding['1/4']};

      > a {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        grid-gap: ${({ theme }) => theme.padding['1/4']};
        text-decoration: none;
        width: fit-content;
        overflow-wrap: break-word;
        word-wrap: break-word;
        hyphens: auto;
        border-bottom: 1px solid transparent;
        margin-bottom: ${({ theme }) => theme.margin['1/2']};
        i {
          margin-top: ${({ theme }) => theme.margin['1/16']};
        }
        &:hover {
          border-bottom: 1px solid ${({ theme }) => theme.colors.primary.default};
        }
      }

      h2 {
        /* font-family: ${({ theme }) => theme.font.sans};
        font-weight: ${({ theme }) => theme.fontWeight.medium};
        font-size: ${({ theme }) => theme.fontSize['xl']}; */
        font-size: ${({ theme }) => theme.fontSize['2xl']};
        font-family: ${({ theme }) => theme.font.sans};
        font-weight: ${({ theme }) => theme.fontWeight.semibold};
      }

      @media (max-width: ${({ theme }) => theme.screens.md}) {
        width: 50%;
      }
      @media (max-width: ${({ theme }) => theme.screens.sm}) {
        width: 100%;
      }
    }

    .galleryImgs {
      display: flex;
      flex-direction: column;
      grid-gap: ${({ theme }) => theme.padding['4xl']};
      width: 66%;
      @media (max-width: ${({ theme }) => theme.screens.md}) {
        width: 50%;
      }
      @media (max-width: ${({ theme }) => theme.screens.sm}) {
        width: 100%;
      }
      div {
        display: flex;
        border: 1px solid ${({ theme }) => theme.colors.card[400]};
        box-shadow: ${({ theme }) => theme.boxShadow.xl};
        border-radius: ${({ theme }) => theme.borderRadius.default};
      }
    }
  }
`
export default PageBody
