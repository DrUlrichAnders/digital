import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import CookieConsent from "react-cookie-consent"

import DCHeader from "../components/DCHeader"
import DCFooter from "../components/DCFooter"
import { Container } from "../components-styled"
import "prismjs/themes/prism.css"
import "./app.css"
import "./gridlover.css"
import bowser from "bowser"

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faKeyboard,
  faGem,
  faLink,
  faBook,
  faCoffee,
  faQuestionCircle,
  faInfoCircle
} from "@fortawesome/free-solid-svg-icons"

library.add(
  faGem,
  faLink,
  faBook,
  faCoffee,
  faQuestionCircle,
  faInfoCircle,
  faKeyboard
)

let browser = {}
// Wrap the require in check for window
if (typeof window !== `undefined`) {
  const bowser = require("bowser")
  browser = bowser.getParser(window.navigator.userAgent).getBrowser()
} else {
  browser.name = "undefined"
  browser.version = ""
}

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title="Digital Network Economy"
      meta={[
        {
          name: "description",
          content:
            "This website is a non-commercial website for educational purposes. It informs about the content of the Digital Network Economy class at Cologne Business School."
        },
        {
          name: "keywords",
          content:
            "CBS, Dr. Ulrich Anders, DNE, Digital Network Economy, Storytelling, Pitchdeck"
        },
        {
          name: "theme-color",
          content: "#8F8978"
        }
      ]}
    >
      <html lang="en" />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
    </Helmet>
    <div>
      <CookieConsent cookieName="dneNetlifyCom">
        This website uses cookies for administrative purposes and to enhance the
        user experience. By using this website you agree to their application.
      </CookieConsent>
      <DCHeader />
      <Container>{children()}</Container>
      <DCFooter
        version={data.site.siteMetadata.version}
        date={data.site.siteMetadata.date}
        browser={browser}
      />
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        version
        date
      }
    }
  }
`
