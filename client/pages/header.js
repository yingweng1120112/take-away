import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <>
      <header>
        <nav>
          <ul className="nav-bar">
            <li className="logo">
              <a href="#">
                <img src="./images/logo.png" />
              </a>
            </li>
            <input type="checkbox" id="check" />
            <span className="menu">
              <li>
                <a href>Home</a>
              </li>
              <li>
                <a href>Products</a>
              </li>
              <li>
                <a href>Services</a>
              </li>
              <li>
                <a href>About</a>
              </li>
              <li>
                <a href>Contact</a>
              </li>
              <label htmlFor="check" className="close-menu">
              <FontAwesomeIcon icon={faTimes} className="menu" />
              </label>
            </span>
            <label htmlFor="check" className="open-menu">
            <FontAwesomeIcon icon={faBars} className="menu"/>
            </label>
          </ul>
        </nav>
      </header>
    </>
  )
}
