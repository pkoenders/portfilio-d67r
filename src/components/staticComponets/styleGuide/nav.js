import React from 'react'
import { Link } from 'gatsby'

// Layout
import styled from 'styled-components'

const TabbedNav = styled.nav`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000000;
  background-color: ${({ theme }) => theme.colors.page.bground.default};

  &::after {
    content: '';
    border-top: 1px solid ${({ theme }) => theme.colors.grey['200']};
    display: flex;
    width: 100%;
    height: ${({ theme }) => theme.padding['1/4']};
    z-index: -1;
  }

  &.posFixed {
    position: fixed;
    top: 60px;
  }
  ul {
    display: flex;
    list-style: none;
    margin: 0 auto;
    li {
      a {
        display: block;
        margin-bottom: -1px;
        margin-left: -1px;
        color: ${({ theme }) => theme.colors.page.default};
        text-decoration: none;
        /* font-weight: 600; */
        border: 1px solid ${({ theme }) => theme.colors.grey['200']};
        padding: ${({ theme }) => theme.padding['1/4']} ${({ theme }) => theme.padding.default};
        background-color: #d7e6f0;
      }

      a:hover,
      .active-scroll-spy {
        border-bottom: 1px solid #fff;
        background-color: ${({ theme }) => theme.colors.page.bground.default};
      }
    }
  }
`

const NavWrapper = ({ fixTab, spyID }) => {
  return (
    <TabbedNav className={fixTab}>
      <ul>
        {spyID.map((item, x) => (
          <li key={x}>
            <Link data-to-scrollspy-id={item.id} to={`/style-guide#${item.id}`}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </TabbedNav>
  )
}

export default NavWrapper
