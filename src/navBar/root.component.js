import React from 'react'
import { navigateToUrl } from 'single-spa'

const NavBar = () => (
  <nav>
    <div className="nav-wrapper">
      <a className="brand-logo" href="/" onClick={navigateToUrl}></a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="/" onClick={navigateToUrl}>Home</a></li>
        <li><a href="/angularjs" onClick={navigateToUrl}>AngularJS</a></li>
      </ul>

    </div>
  </nav>
)

export default NavBar