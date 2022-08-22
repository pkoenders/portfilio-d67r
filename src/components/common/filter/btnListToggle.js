import styled from 'styled-components'

const ListBtnToggle = styled.button.attrs({
  type: 'button',
})`
  display: flex;
  width: fit-content;
  align-items: flex-end;
  justify-content: center;
  padding: ${({ theme }) => theme.padding['1/4']};
  user-select: none;
  /* background-color: #ffffff; */
  /* background-color: ${({ theme }) => theme.colors.card[200]}; */
  /* border: 1px solid ${({ theme }) => theme.colors.card[300]}; */
  /* border-radius: ${({ theme }) => theme.borderRadius.sm}; */
  color: ${({ theme }) => theme.colors.card[900]};

  i {
    pointer-events: none;
  }

  &.desc {
    i {
      transform: rotate(180deg);
    }
  }

  &:hover,
  &[aria-pressed='true'] {
    color: ${({ theme }) => theme.colors.primary.default};
    /* border-color: ${({ theme }) => theme.colors.primary[600]}; */
    /* box-shadow: ${({ theme }) => theme.boxShadow.default}; */

    i {
      color: ${({ theme }) => theme.colors.primary.default};
    }
  }

  &[aria-pressed='true'] {
    /* background-color: ${({ theme }) => theme.colors.card[400]}; */
    /* border-color: transparent; */
    /* box-shadow: none; */
    i {
      color: ${({ theme }) => theme.colors.page.default};
    }
  }
`

export default ListBtnToggle
