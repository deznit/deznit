import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

const Header = ({ siteTitle, isHome }) => (
  <header
    className="site-head"
    style={isHome ? { height: "400px" } : { height: "100px" }}
  >
    {isHome ? (
      <div
        className="site-skew-banner"
        style={{
          backgroundImage: `url("images/header_image.svg")`,
        }}
      ></div>
    ) : null}

    <div className="container">
      <div className="site-mast">
        <div className="site-mast-left">
          <Link to="/">
            <img
              className="site-logo"
              src={"images/logo.svg"}
              alt={siteTitle}
            />
          </Link>
        </div>
        <nav className="site-nav">
          <div className="site-nav-left">
            <Link className="site-nav-item" to="/">
              HOME
            </Link>
          </div>
          <div className="site-nav-right">
            <Link className="site-nav-button" to="/contact">
              CONTACT
            </Link>
          </div>
        </nav>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
