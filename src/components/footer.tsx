import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

type FooterProps = {
  siteTitle?: string
}

const Footer = ({ siteTitle = "deznit" }: FooterProps) => (
  <footer className="site-foot">
    <div className="site-foot-nav container">
      <div className="site-foot-nav-left">
        <Link to="/">{siteTitle}</Link> © 2020
      </div>

      <div className="site-foot-nav-right">
        <Link className="site-nav-button" to="/contact">
          CONTACT
        </Link>
      </div>
      {/* <div className="site-foot-nav-right">
                                <Navigation
                                    data={site.navigation}
                                    navClass="site-foot-nav-item"
                                />
                            </div> */}
    </div>
  </footer>
)

export default Footer
