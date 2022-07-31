import React, { useRef, useState, useEffect } from 'react'
import ScrollSpy from 'react-ui-scrollspy'

// Layout
import ContentWrapper from '/src/components/common/layout/pageLayout/'
import TabbedNav from './nav'
import styled from 'styled-components'

// Style sections
import Intro from './intro'
import Typography from './typography'
import Cta from './cta'
import Color from './color'
import Spacing from './spacing'

const StyleGuide = styled.div`
  display: flex;
  flex-direction: column;

  section {
    display: block;
    position: relative;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey['200']};

    & :last-of-type {
      border-bottom: none;
    }

    &[id]::before {
      content: '';
      display: block;
      position: relative;
      width: 0px;
      height: 100px;
      margin-top: -100px;
      visibility: hidden;
      z-index: -1;
    }

    > div {
      padding: ${({ theme }) => theme.padding.default} 0;
    }

    p:last-of-type {
      margin-bottom: ${({ theme }) => theme.spacing['4']};
    }

    .largeParaText {
      &.x18 {
        font-size: 18px;
      }
      &.x24 {
        font-size: 24px;
      }
      &.x32 {
        font-size: 32px;
      }
      &.x32 {
        font-size: 32px;
      }
      &.x48 {
        font-size: 48px;
      }
      &.x64 {
        font-size: 64px;
      }
    }
  }
`

const Styleguide = () => {
  const guideWrapperRef = useRef()

  const [fixTabbedNav, setFixTabbedNav] = useState('')
  const [contentOffset, setContentOffset] = useState(60)

  useEffect(() => {
    const handleScroll = () => {
      setFixTabbedNav(guideWrapperRef.current.getBoundingClientRect().top <= 60 ? 'posFixed' : '')

      setContentOffset(
        fixTabbedNav === 'posFixed' ? guideWrapperRef.current.getBoundingClientRect().height : 0
      )
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll, { passive: true })
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [fixTabbedNav, contentOffset])

  return (
    // Set content width - xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'full'
    <ContentWrapper classOverides={'md'} marginTop={60} paddingTop={0}>
      <StyleGuide ref={guideWrapperRef}>
        <TabbedNav
          fixTab={fixTabbedNav}
          spyID={[
            { id: 'intro', name: 'Intro' },
            { id: 'typography', name: 'Typography' },
            { id: 'ctas', name: 'Buttons' },
            { id: 'color', name: 'Colours' },
            { id: 'spacing', name: 'Spacing' },
          ]}
        />

        {/* if (typeof window !== 'undefined') { */}

        {typeof window !== 'undefined' && (
          <ScrollSpy offsetTop={300} offsetBottom={300}>
            <Intro spyID={'intro'} />
            <Typography spyID={'typography'} />
            <Cta spyID={'ctas'} />
            <Color spyID={'color'} />
            <Spacing spyID={'spacing'} />
          </ScrollSpy>
        )}
      </StyleGuide>
    </ContentWrapper>
  )
}

export default Styleguide
