import styled from 'styled-components'

const ListItem = styled.li`
  display: none;

  .card {
    display: flex;
    width: 100%;
    text-decoration: none;

    div {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 100%;
      @media (max-width: ${({ theme }) => theme.screens.sm}) {
        flex-direction: column;
      }

      time,
      address,
      p,
      a {
        display: flex;
      }

      .content {
        flex-direction: column;
        align-items: flex-start;
        border-top: none;

        .title {
          align-items: flex-start;
          height: auto;
        }
        time {
          color: ${({ theme }) => theme.colors.page[500]};
        }
      }

      .details {
        display: flex;
        flex-direction: column;
        /* min-width: 40%; */
        max-width: 40%;
        height: 100%;
        padding: ${({ theme }) => theme.padding['1/2']};
        grid-column-gap: ${({ theme }) => theme.margin['1/4']};
        grid-row-gap: ${({ theme }) => theme.margin['1/2']};
        margin-left: auto;
        background-color: #fff;
        border-left: 1px solid ${({ theme }) => theme.colors.card[300]};
        @media (max-width: ${({ theme }) => theme.screens.sm}) {
          min-width: 100%;
        }
        time,
        address,
        .passed,
        a {
          color: ${({ theme }) => theme.colors.page.default};
          align-items: flex-start;
          flex-direction: row;
          grid-gap: ${({ theme }) => theme.margin['1/4']};
          width: fit-content;
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
  }

  &.show,
  &.isActive {
    display: flex;
    height: fit-content;
  }
`
export default ListItem
