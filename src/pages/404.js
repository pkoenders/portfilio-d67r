import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '/src/components/layout'
import HTMLHeader from '/src/components/common/htmlheader/'
import Bground404 from '/src/components/common/404/404-bground'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'
import HomeTemplate from './index'
import PageTemplate from '/src/templates/generalPage'
import Button from '/src/components/common/buttons/linkButton'

import styled from 'styled-components'

const FillPageColor = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.header.default};
`

const NotFound = styled.section`
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.header.height};
  grid-gap: ${({ theme }) => theme.padding.default};

  span {
    margin: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${({ theme }) => theme.padding.default} 0;
    grid-gap: ${({ theme }) => theme.padding['1/2']};
    h1,
    p {
      color: #fff;
    }
    span {
      margin-top: ${({ theme }) => theme.margin.default};
    }
  }
`

const NotFoundPage = ({ data }) => {
  if (!data) return null
  const primaryNav = data.prismicMainNavigation.data.nav
  const currentLang = data.prismicMainNavigation.lang
  return (
    <Layout currentLang={currentLang} primaryNav={primaryNav}>
      <FillPageColor>
        <HTMLHeader currentLang={currentLang} />
        <Bground404 />
        <NotFound>
          <span>
            <h1>Oh purr-leaze!</h1>
            <p>404 error. It appears that Zoe has hidden this page.</p>
            <Button
              buttonLabel={'Take me home'}
              buttonType={'Static'}
              buttonLink={'/'}
              buttonStyle={'white'}
            />
          </span>
        </NotFound>
      </FillPageColor>
    </Layout>
  )
}

export default withPrismicPreview(NotFoundPage, {
  templateMap: {
    page: PageTemplate,
    homepage: HomeTemplate,
    prismicPage: PageTemplate,
    prismicHomepage: HomeTemplate,
  },
})

export const query = graphql`
  query errorPage($locale: String) {
    ## Get the primary nav in local context
    prismicMainNavigation(lang: { eq: $locale }) {
      type
      lang
      data {
        nav {
          ... on PrismicMainNavigationDataNavNavItem {
            id
            primary {
              label {
                text
              }
              link {
                uid
                type
                lang
                raw
              }
            }
            items {
              sub_nav_link {
                uid
                type
                lang
                raw
              }
              sub_nav_link_label {
                text
              }
            }
          }
        }
      }
    }
  }
`
