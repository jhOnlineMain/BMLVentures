import * as React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => (
<div className="header-wrap">
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <section className="logo-wrap" >
      <Link to="/">
        <StaticImage
          alt="logo"
          src="../../static/BMLV-logo.png"
          style={{
            alignContent: 'left',
            height: '100px',
            width: '200px'
          }}
        />
      </Link>
    </section>

    <section className="nav-wrap">
      <nav className="nav">
        <ul>
          <li>
            <Link to="/about">WHO WE ARE</Link>
          </li>
          <li>
            <Link to="/history">OUR HISTORY</Link>
          </li>
          <li>
            <Link to="/contact">GET IN TOUCH</Link>
          </li>
        </ul>
     </nav>
    </section>
    
  </header>
</div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}



export default Header
