import React from 'react'
import { css } from 'emotion'

const ContactPage = () => (
  <div
    className={css`
      height: 90vh;
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
      @media (max-width: 768px) {
        display: block;
      }
    `}
  >
    <div
      className={css`
        text-align: center;
      `}
    >
      <h1>
        need something like{' '}
        <span
          className={css`
            font-family: Pacifico;
          `}
        >
          don8t
        </span>?
      </h1>
      <a
        href="https://www.nicklausroach.com"
        target="_blank"
        rel="noopener noreferrer"
        className={css`
          margin: 0 auto;
          text-decoration: none;
          cursor: pointer;
          height: 50px;
          width: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          border-radius: 5px;
          background-size: 100%;
          background-image: linear-gradient(120deg, #7c66ff, #c074fd);
          position: relative;
          z-index: 100;
          transition: 0.5s;
          &:before {
            border-radius: 5px;
            background-image: linear-gradient(120deg, #c074fd, #7c66ff);
            content: '';
            display: block;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
            width: 100%;
            z-index: -100;
            transition: 0.5s;
          }
          &:hover {
            letter-spacing: 3px;
            &:before {
              opacity: 1;
              box-shadow: 0px 0px 8px grey;
            }
          }
        `}
      >
        click here
      </a>
    </div>
  </div>
)

export default ContactPage
