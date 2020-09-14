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
        Copyright © 2020 <Link to="/">{siteTitle.toUpperCase()}</Link>
      </div>

      <div className="site-foot-nav-center">
        Created by <Link to="/author">Anoop Nair</Link>
      </div>
      <div className="site-foot-nav-right">
        <Link to="https://join.slack.com/t/deznitworkspace/shared_invite/zt-hgillkxw-uxF_Tp7J5FcPT8fDe37Pyw">
          <img
            className="social-icons"
            src="/icons/slack_icon.svg"
            width="30px"
            height="30px"
          />
        </Link>

        <Link to="https://github.com/orgs/deznit/">
          <img
            className="social-icons"
            src="/icons/github_icon.svg"
            width="30px"
            height="30px"
          />
        </Link>

        <Link to="https://gitter.im/deznit/community">
          <img
            className="social-icons"
            src="/icons/gitter_icon.svg"
            width="30px"
            height="30px"
          />
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
