import styled from 'styled-components'

export const H1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSize['4xl']};
  font-family: ${({ theme }) => theme.font.slab};
  line-height: ${({ theme }) => theme.lineHeight.tight};
`

export const H2 = styled.h2`
  font-size: ${({ theme }) => theme.fontSize['3xl']};
  font-family: ${({ theme }) => theme.font.slab};
  line-height: ${({ theme }) => theme.lineHeight.tight};
`

export const H3 = styled.h3`
  font-size: ${({ theme }) => theme.fontSize['2xl']};
  font-family: ${({ theme }) => theme.font.sans};
  line-height: ${({ theme }) => theme.lineHeight.snug};
`

export const H4 = styled.h4`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-family: ${({ theme }) => theme.font.sans};
  line-height: ${({ theme }) => theme.lineHeight.relaxed};
`

export const P = styled.p`
  font-size: ${({ theme }) => theme.fontSize.base};
  font-family: ${({ theme }) => theme.font.sans};
  margin-bottom: ${({ theme }) => theme.spacing['3']};
  strong {
    font-weight: bold;
  }
  em {
    font-style: italic;
  }
`
