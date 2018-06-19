import { css } from 'emotion'
import Link from 'gatsby-link'
import React from 'react'

const links = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'contact', path: '/contact' },
]

class Header extends React.Component {
  state = {
    menuOpen: false,
  }

  render = () => (
    <div className={headerContainerStyle}>
      <div className={titleStyle}>don8t</div>
      <div className={linkContainerStyle}>
        {links.map(link => (
          <div key={link.name} className={linkWrapperStyle}>
            <Link className={linkStyle} to={link.path}>
              {link.name}
            </Link>
          </div>
        ))}
      </div>
      <div className={mobileTitleStyle}>don8t</div>
    </div>
  )
}

const headerContainerStyle = css`
  @media (max-width: 768px) {
    text-align: center;
  }
`

const titleStyle = css`
  margin: 0;
  display: block;
  text-align: center;
  font-size: 24px;
  font-family: Pacifico;
  right: 30px;
  @media (min-width: 768px) {
    display: none;
  }
`

const linkContainerStyle = css`
  display: inline-block;
  @media (max-width: 768px) {
    text-align: center;
    margin: 0 auto;
  }
`

const linkWrapperStyle = css`
  margin: 10px;
  display: inline-block;
`

const linkStyle = css`
  transition: 0.3s;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 90px;
  &:hover {
    letter-spacing: 3px;
  }
`

const mobileTitleStyle = css`
  margin: 0;
  display: inline-block;
  position: absolute;
  font-size: 24px;
  font-family: Pacifico;
  right: 30px;
  @media (max-width: 768px) {
    display: none;
  }
`

export default Header
