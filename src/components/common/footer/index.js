import React from 'react'
import { Link } from 'gatsby'
import Brand from '../brand/'
import ScrollToTop from './scrollToTop/'
import i18n from '../../../../config/i18n'

import styled from 'styled-components'

const FooterWrapper = styled.footer`
  position: relative;
  color: ${({ theme }) => theme.colors.footer.text.default};
  background-color: ${({ theme }) => theme.colors.footer.default};
  padding: ${({ theme }) => theme.padding['4xl']} 0;
  text-align: center;
  z-index: 1;

  > div {
    max-width: ${({ theme }) => theme.screens.lg};
    position: relative;
    margin: 0 auto;
    z-index: 1000 !important;

    a {
      position: relative;
      color: unset;
      display: flex;
      margin: 0 auto;
      width: fit-content;

      span {
        display: none;
      }

      svg {
        width: auto;
        height: 24px;
        margin: ${({ theme }) => theme.margin['1/4']} auto;
      }
    }

    a:hover {
      color: inherit;
      text-decoration: none;
    }

    p {
      margin-bottom: ${({ theme }) => theme.margin['1/4']};
      position: relative;
    }
  }
`
const Footer = ({ currentLang, currentPrefix }) => {
  // const data = useStaticQuery(graphql`
  //   query FooterQuery {
  //     site {
  //       siteMetadata {
  //         title
  //         author
  //         year
  //       }
  //     }
  //   }
  // `)

  return (
    <FooterWrapper>
      <div>
        <ScrollToTop />
        <p>
          {/* © {new Date().getFullYear()} - {i18n[currentLang].siteTitle} */}©{' '}
          {new Date().getFullYear()} — Peter Koenders
        </p>
        <Link
          to={currentPrefix === '/' ? currentPrefix : `${currentPrefix}/`}
          title={i18n[currentLang].linkToHomepage}
        >
          <span>{i18n[currentLang].linkToHomepage}</span>
          <Brand />
        </Link>
      </div>
    </FooterWrapper>
  )
}

export default Footer
