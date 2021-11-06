import React from 'react'
import styled from 'styled-components'

// Icons
import IconMaterial from '/src/components/common/icons/material'

const Button = styled.button.attrs((props) => ({
  type: props.type || 'button',
  'aria-label': 'Scroll to top',
}))`
  cursor: pointer;
  margin: ${({ theme }) => theme.margin['1/2']} auto ${({ theme }) => theme.margin['2xl']} auto;
  background-color: transparent;
  padding: 0;
  border: none;
  color: ${({ theme }) => theme.colors.footer.default};
  display: flex;

  @media print {
    display: none;
  }

  i {
    margin-top: ${({ theme }) => theme.margin['1/4']};
    margin-bottom: -${({ theme }) => theme.margin['1/4']};
    padding: ${({ theme }) => theme.padding['1/4']};
    border-radius: 999rem;
    background-color: ${({ theme }) => theme.colors.footer.text.default};
    font-size: 28px;
    transition: all, 0.15s ease-out;
  }

  &:hover {
    i {
      margin-top: 0;
      padding-bottom: ${({ theme }) => theme.padding['1/2']};
    }
  }
`
const ScrollToTop = (e) => {
  // e.preventDefault()

  const scrollTop = (e) => {
    // let target = document.querySelector('#main')
    // target.scrollIntoView({
    //   behavior: 'smooth',
    //   block: 'start',
    // })

    window.scrollTo({ top: 0, behavior: 'smooth' })
    window.location.href = '#main'
  }
  // if (typeof window !== 'undefined') {
  //     window.addEventListener('scroll', checkScrollTop)
  // }

  return (
    <Button onClick={scrollTop} aria-label="Go to the top of the page">
      <IconMaterial icon={'arrow_upward'} />
    </Button>
  )
}

export default ScrollToTop
