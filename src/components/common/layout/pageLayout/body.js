import styled from 'styled-components'

const PageBody = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;

  h1 {
    display: flex;
    width: 100%;
    grid-gap: ${({ theme }) => theme.padding.default};
    padding: ${({ theme }) => theme.padding.default} 0;
    color: ${({ theme }) => theme.colors.accent.default};
  }

  > div {
    display: flex;
    flex-direction: row;
    grid-gap: ${({ theme }) => theme.padding['1/2']};
    width: 100%;

    time {
      color: ${({ theme }) => theme.colors.page[700]};
      line-height: initial;
    }

    &.blog {
      flex-direction: column;
      grid-gap: ${({ theme }) => theme.padding.default};
    }

    @media (max-width: ${({ theme }) => theme.screens.sm}) {
      flex-direction: column;
      grid-gap: ${({ theme }) => theme.padding['1/2']};
    }

    .galleryContent {
      display: flex;
      flex-direction: column;
      max-width: 33%;

      @media (max-width: ${({ theme }) => theme.screens.md}) {
        max-width: 50%;
      }
      @media (max-width: ${({ theme }) => theme.screens.sm}) {
        flex-direction: column;
        max-width: 100%;
      }

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
        margin: ${({ theme }) => theme.margin.default} 0;
        i {
          margin-top: ${({ theme }) => theme.margin['1/16']};
        }
        &:hover {
          border-bottom: 1px solid ${({ theme }) => theme.colors.primary.default};
        }
      }
    }

    .galleryImgs {
      display: flex;
      flex-direction: column;
      grid-gap: ${({ theme }) => theme.padding['4xl']};
      flex-grow: 1;
      div {
        display: flex;
        border: 1px solid ${({ theme }) => theme.colors.card[100]};
        box-shadow: ${({ theme }) => theme.boxShadow.xl};
        border-radius: ${({ theme }) => theme.borderRadius.default};
      }
    }
  }
`
export default PageBody
