import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
// @ts-ignore
import Logo from "../../static/images/logo.svg"

const Header = ({ siteTitle, isHome }) => (
  <header
    className="site-head"
    style={isHome ? { height: "300px" } : { height: "100px" }}
  >
    {/* {isHome ? (
      <div
        className="site-skew-banner"
        style={{
          backgroundImage: `url("images/header_image.svg")`,
        }}
      ></div>
    ) : null} */}

    <div className="container">
      <div className="site-mast">
        <div className="site-mast-left">
          <Link to="/">
            <img className="site-logo" src={Logo} alt={siteTitle} />
          </Link>
        </div>
        <nav className="site-nav">
          <div className="site-nav-left">
            <Link className="site-nav-item" to="/">
              HOME
            </Link>
          </div>
          <div className="site-nav-right">
            <a
              href="https://join.slack.com/t/deznitworkspace/shared_invite/zt-hgillkxw-uxF_Tp7J5FcPT8fDe37Pyw"
              target="_blank"
            >
              <img
                className="social-icons"
                src="/icons/slack_icon.svg"
                width="30px"
                height="30px"
              />
            </a>

            <a href="https://github.com/orgs/deznit/" target="_blank">
              <img
                className="social-icons"
                src="/icons/github_icon.svg"
                width="30px"
                height="30px"
              />
            </a>

            <a href="https://gitter.im/deznit/community" target="_blank">
              <img
                className="social-icons"
                src="/icons/gitter_icon.svg"
                width="30px"
                height="30px"
              />
            </a>
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
