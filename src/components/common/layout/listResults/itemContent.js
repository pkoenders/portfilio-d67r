import styled from 'styled-components'

const ItemContent = styled.article`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.textColor};
  background-color: ${({ theme }) => theme.colors.card[100]};
  border: 2px solid ${({ theme }) => theme.colors.card[300]};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  transition: ${({ theme }) => theme.transition.easeOut.default};

  @media (max-width: ${({ theme }) => theme.screens.sm}) {
    flex-direction: column;
  }

  .imageWrapper {
    position: relative;
    border-bottom: 1px solid ${({ theme }) => theme.colors.card[300]};
    aspect-ratio: auto;
    img {
      transition: ${({ theme }) => theme.transition.easeIn.default};
      /* aspect-ratio: 16/9; */
      /* aspect-ratio: 5/4; */
      /* aspect-ratio: auto; */
      object-fit: cover;
      transform: scale(1.033);
      object-position: center top;
    }
  }
  .imageWrapper.portrait {
    aspect-ratio: 3/4;
    object-position: center center;
  }
  .imageWrapper.landscape {
    aspect-ratio: 5/4;
    img {
      object-position: center center;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    grid-gap: ${({ theme }) => theme.padding['1/4']};
    color: ${({ theme }) => theme.colors.page.default};
    padding: ${({ theme }) => theme.padding['1/2']};
    /* width: 100%; */

    .title {
      font-family: ${({ theme }) => theme.font.sans};
      font-weight: ${({ theme }) => theme.fontWeight.medium};
      font-size: ${({ theme }) => theme.fontSize['xl']};
      /* font-size: 103%;
      
      
      /* color: ${({ theme }) => theme.colors.accent.default}; */
      align-content: space-between;
      display: flex;
      flex-direction: row;
      position: relative;
      align-items: flex-start;
      margin: 0;
      i {
        color: inherit;
        color: ${({ theme }) => theme.colors.accent.default};
        position: inherit;
        transition: ${({ theme }) => theme.transition.easeIn.default};
        right: 0px;
        margin-left: auto;
        margin-top: ${({ theme }) => theme.margin['1/4']};
      }
    }
    p {
      margin-bottom: 0;
      a {
        width: auto;
      }
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: ${({ theme }) => theme.padding['1/2']};
    grid-column-gap: ${({ theme }) => theme.margin['1/4']};
    grid-row-gap: ${({ theme }) => theme.margin['1/2']};
    margin-left: auto;
    background-color: #fff;
    border-top: 1px solid ${({ theme }) => theme.colors.card[300]};
    @media (max-width: ${({ theme }) => theme.screens.md}) {
      height: auto;
    }
    time,
    address,
    .passed,
    p,
    a {
      color: ${({ theme }) => theme.colors.page.default};
      align-items: flex-start;
      display: flex;
      flex-direction: row;
      grid-gap: ${({ theme }) => theme.margin['1/4']};
      text-decoration: none;
      width: fit-content;
      margin-top: -${({ theme }) => theme.margin['1/16']};

      i {
        margin-top: ${({ theme }) => theme.margin['1/16']};
        color: ${({ theme }) => theme.colors.secondary.default};
      }
      .srike {
        text-decoration: line-through;
        color: ${({ theme }) => theme.colors.page[400]};
      }
    }
    .passed {
      grid-row-gap: 0;
      flex-wrap: wrap-reverse;
      i {
        align-self: center;
      }
    }

    a {
      color: ${({ theme }) => theme.colors.primary[1100]};
      border-bottom: 1px solid transparent;
    }

    a:hover {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.primary.default};
      border-bottom: 1px solid ${({ theme }) => theme.colors.primary.default};
    }
  }

  &:hover {
    text-decoration: none;
    border-color: ${({ theme }) => theme.colors.primary[600]};
    box-shadow: ${({ theme }) => theme.boxShadow.lg};
    .imageWrapper {
      img {
        transform: scale(1);
        transition: ${({ theme }) => theme.transition.easeOut.default};
        /* object-position: center top; */
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

  // Layout variations 'profile', profileList', 'carousel', 'gallery', 'galleryList' 'list'
  //
  // profile

  &.profile,
  &.profileList,
  &.gallery,
  &.galleryList,
  &.portfolio-,
  &.portfolio-list,
  &.carousel {
    display: flex;
    .content {
      width: 100%;
      a {
        text-decoration: underline !important;
      }
    }
  }

  &.portfolio-,
  &.portfolio-list {
    flex-direction: column;
    .imageWrapper {
      cursor: zoom-in;
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

      img {
        width: 100%;
        aspect-ratio: 16 / 9;
        transform: scale(1);
      }
      img:hover {
        transform: scale(1.022);
      }
    }
  }

  &.portfolio-list {
    flex-direction: row;

    @media (max-width: ${({ theme }) => theme.screens.sm}) {
      flex-direction: column;
    }
    .imageWrapper {
      display: flex;
      align-items: flex-start;
      /* padding: ${({ theme }) => theme.margin['1/2']}; */
      background-color: #fff;
      width: 33%;
      /* height: 100%; */
      aspect-ratio: auto;
      aspect-ratio: 16 / 9;
      overflow: hidden;
      border-bottom: none;
      @media (max-width: ${({ theme }) => theme.screens.sm}) {
        width: 100%;
        border-bottom: 1px solid ${({ theme }) => theme.colors.card[300]};
      }

      img {
        display: flex;
        width: 100%;
        aspect-ratio: auto;
        transform: scale(1);
      }
    }
    .content {
      width: 66%;
      border-left: 1px solid ${({ theme }) => theme.colors.card[300]};
      @media (max-width: ${({ theme }) => theme.screens.sm}) {
        width: 100%;
        border: none;
      }
    }
  }

  &.profile,
  &.profileList {
    .imageWrapper {
      aspect-ratio: 1;
      min-width: 128px;
      height: 128px;
      z-index: 1;
      border-radius: 999rem;
      /* border: 1px solid ${({ theme }) => theme.colors.secondary[400]}; */
      border: 1px solid ${({ theme }) => theme.colors.card[400]};

      box-shadow: ${({ theme }) => theme.boxShadow.lg};
    }
  }

  &.profile {
    flex-direction: column;
    align-items: center;
    .imageWrapper {
      margin: ${({ theme }) => theme.margin.default} auto 0;
    }
    .content {
      .title {
        justify-content: center;
      }
    }
  }

  // profileList
  &.profileList,
  &.galleryList {
    flex-direction: row;
    @media (max-width: ${({ theme }) => theme.screens.sm}) {
      flex-direction: column;
    }
    .imageWrapper {
      margin: ${({ theme }) => theme.margin.default};
      @media (max-width: ${({ theme }) => theme.screens.sm}) {
        min-width: 75px;
        max-width: 75px;
        height: 75px;
        margin: ${({ theme }) => theme.margin['1/2']} ${({ theme }) => theme.margin['1/2']} 0;
      }
    }
    .content {
      justify-content: center;
    }
  }

  &.galleryList {
    flex-direction: row;
    align-items: flex-start;
    @media (max-width: ${({ theme }) => theme.screens.sm}) {
      flex-direction: column;
    }

    .imageWrapper {
      margin: 0;
      /* aspect-ratio: auto; */
      min-width: 33%;
      max-width: 33%;
      height: 100%;
      border-radius: 0;
      border: none;
      box-shadow: none;
      background-color: #fff;
      @media (max-width: ${({ theme }) => theme.screens.sm}) {
        margin: ${({ theme }) => theme.margin['1/2']} ${({ theme }) => theme.margin['1/2']} 0;
      }
    }

    .content {
      justify-content: center;
    }
  }

  // carousel
  &.carousel {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    background-color: transparent;
    border: none;
    box-shadow: none;
    overflow: hidden;
    border-radius: ${({ theme }) => theme.borderRadius.default};

    .imageWrapper {
      aspect-ratio: auto;
      border-bottom: none;
    }
    .imageWrapper.landscape {
      aspect-ratio: 16/9;
    }
    .imageWrapper.portrait {
      aspect-ratio: 3/4;
    }

    .content {
      background-color: #fff;
      .title,
      .link {
        width: fit-content;
        margin: 0 auto;
      }
      .link {
        text-transform: uppercase;
        position: relative;
        display: flex;
        grid-gap: ${({ theme }) => theme.padding['1/4']};
        margin: 0 auto;
        align-items: center;
        white-space: nowrap;
        width: fit-content;
        padding: 8px 18px;
        color: ${({ theme }) => theme.colors.page.default};
        background-color: #ffffffa8;
        border-radius: ${({ theme }) => theme.borderRadius.default};
        box-shadow: ${({ theme }) => theme.boxShadow.default};
        i {
          position: inherit;
          transition: ${({ theme }) => theme.transition.easeIn.default};
          right: 0px;
        }
      }
    }
    &:hover {
      box-shadow: ${({ theme }) => theme.boxShadow.lg};
    }
  }

  // list
  &.list {
    flex-direction: row;
    min-width: 100%;

    @media (max-width: ${({ theme }) => theme.screens.md}) {
      flex-direction: column;
    }
    .imageWrapper {
      display: flex;
      min-width: 128px;
      max-width: 128px;
      height: 128px;

      aspect-ratio: 1;
      border-radius: 100%;
      /* border: 2px solid ${({ theme }) => theme.colors.secondary[400]}; */
      border: 1px solid ${({ theme }) => theme.colors.card[400]};
      margin: ${({ theme }) => theme.margin.default};
      overflow: hidden;
      box-shadow: ${({ theme }) => theme.boxShadow.lg};
      @media (max-width: ${({ theme }) => theme.screens.md}) {
        min-width: 75px;
        max-width: 75px;
        height: 75px;
        margin: ${({ theme }) => theme.margin['1/2']} ${({ theme }) => theme.margin['1/2']} 0;
      }
    }

    .content {
      flex-direction: column;
      align-items: flex-start;
      border-top: none;
      width: 100%;

      .title {
        align-items: flex-start;
        height: auto;
        width: 100%;
        i {
          margin-left: auto;
        }
      }

      p {
        margin-right: ${({ theme }) => theme.margin.default};
        @media (max-width: ${({ theme }) => theme.screens.sm}) {
          margin-right: 0;
        }
      }
      time {
        color: ${({ theme }) => theme.colors.page[500]};
      }
    }

    .details {
      flex-direction: column;
      min-width: 33%;
      max-width: 33%;
      border-top: none;
      border-left: 1px solid ${({ theme }) => theme.colors.card[300]};
      @media (max-width: ${({ theme }) => theme.screens.md}) {
        border-left: none;
        border-top: 1px solid ${({ theme }) => theme.colors.card[300]};
        min-width: 100%;
      }
      time,
      address,
      .passed,
      p,
      a {
        color: ${({ theme }) => theme.colors.page.default};
        align-items: flex-start;
        flex-direction: row;
        grid-gap: ${({ theme }) => theme.margin['1/4']};
        width: fit-content;
        text-decoration: none;
        i {
          color: ${({ theme }) => theme.colors.secondary.default};
        }
        .srike {
          text-decoration: line-through;
          color: ${({ theme }) => theme.colors.page[400]};
        }
      }
      .passed {
        grid-row-gap: 0;
        flex-wrap: wrap-reverse;
        i {
          align-self: center;
        }
      }

      a {
        color: ${({ theme }) => theme.colors.primary[1100]};
        border-bottom: 1px solid transparent;
      }

      a:hover {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.primary.default};
        border-bottom: 1px solid ${({ theme }) => theme.colors.primary.default};
      }
    }
  }
`
export default ItemContent
