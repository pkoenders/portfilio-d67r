import styled from 'styled-components'

const CardContent = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${({ theme }) => theme.colors.textColor};
  background-color: #fff;
  /* background-color: ${({ theme }) => theme.colors.header.bground.default}; */
  // border: 2px solid ${({ theme }) => theme.colors.card[300]};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  transition: ${({ theme }) => theme.transition.easeOut.default};
  box-shadow: ${({ theme }) => theme.boxShadow.default};

  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    flex-direction: column;
  }

  &:hover {
    text-decoration: none;
    /* border-color: ${({ theme }) => theme.colors.primary[600]}; */
    /* border-color: ${({ theme }) => theme.colors.tertiary[400]}; */
    box-shadow: ${({ theme }) => theme.boxShadow.lg};
  }

  .imageWrapper {
    position: relative;
    border: 1px solid ${({ theme }) => theme.colors.card[300]};

    img {
      transition: ${({ theme }) => theme.transition.easeIn.default};
      aspect-ratio: 16/9;
      /* transform: scale(1); */
      transform: scale(1.06);
      object-position: center top;
    }

    .openLightBox {
      display: flex;
      pointer-events: none;
      align-items: center;
      cursor: zoom-in;
      position: absolute;
      align-content: center;
      top: ${({ theme }) => theme.padding['1/2']};
      right: ${({ theme }) => theme.padding['1/2']};
      padding: ${({ theme }) => theme.padding['1/16']};
      border-radius: ${({ theme }) => theme.borderRadius.sm};
      background-color: ${({ theme }) => theme.colors.accent.default};
      box-shadow: ${({ theme }) => theme.boxShadow.lg};
      i {
        transform: scale(1);
        color: #fff;
        transition: ${({ theme }) => theme.transition.easeOut.default};
      }
    }
  }

  .imageWrapper:hover {
    .openLightBox {
      i {
        transform: scale(1);
      }
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    grid-gap: ${({ theme }) => theme.padding['1/4']};
    color: ${({ theme }) => theme.colors.page.default};
    padding: ${({ theme }) => theme.padding['1/2']};

    .title {
      font-size: 103%;
      font-weight: 600;
      align-content: space-between;
      display: flex;
      flex-direction: row;
      position: relative;
      align-items: center;
      margin: 0;
      i {
        /* color: inherit; */
        color: ${({ theme }) => theme.colors.accent.default};
        position: inherit;
        transition: ${({ theme }) => theme.transition.easeIn.default};
        right: 0px;
        margin-left: auto;
      }
    }
    p {
      margin-bottom: 0;
    }

    p:last-of-type {
      display: flex;
      flex-direction: row;
      grid-column-gap: ${({ theme }) => theme.padding['1/4']};
      align-items: center;
      i {
        color: ${({ theme }) => theme.colors.secondary.default};
      }
    }
  }

  &:hover {
    .imageWrapper {
      img {
        transform: scale(1.0333);
        transition: ${({ theme }) => theme.transition.easeOut.default};
        object-position: center top;
      }
    }

    .content {
      text-decoration: none !important;
      .title {
        i {
          right: -${({ theme }) => theme.padding['1/8']};
          transition: ${({ theme }) => theme.transition.easeOut.default};
          color: ${({ theme }) => theme.colors.accent.default};
        }
      }
    }
  }
`
export default CardContent
