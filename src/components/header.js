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
    <div
      className={css`
        @media (max-width: 768px) {
          text-align: center;
        }
      `}
    >
      <div
        className={css`
          margin: 0;
          display: block;
          text-align: center;
          font-size: 24px;
          font-family: Pacifico;
          right: 30px;
          @media (min-width: 768px) {
            display: none;
          }
        `}
      >
        don8t
      </div>
      <div
        className={css`
          display: inline-block;
          @media (max-width: 768px) {
            text-align: center;
            margin: 0 auto;
          }
        `}
      >
        {links.map(link => (
          <div
            key={link.name}
            className={css`
              margin: 10px;
              display: inline-block;
            `}
          >
            <Link
              className={css`
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
              `}
              to={link.path}
            >
              {link.name}
            </Link>
          </div>
        ))}
      </div>
      <div
        className={css`
          margin: 0;
          display: inline-block;
          position: absolute;
          font-size: 24px;
          font-family: Pacifico;
          right: 30px;
          @media (max-width: 768px) {
            display: none;
          }
        `}
      >
        don8t
      </div>
    </div>
  )
}

const hambrugerStyle = css`
  transition: 0.3s;
  width: 50px;
  height: 50px;
  display: flex;
  flex: 1;
  justify-content: center;
  margin: 20px;
  text-align: center;
  cursor: pointer;
  border-radius: 50%;
  align-items: center;
  background: linear-gradient(120deg, red, #ffb9b9);
  &:hover {
    box-shadow: -2px 0px 5px grey;
  }
`

const hamburgerPattyStyle = css`
  display: block;
  width: 30px;
  height: 4px;
  background: white;
  border-radius: 10px;
  margin: 5px auto;
`

export default Header
