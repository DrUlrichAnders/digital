import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import CookieConsent, { Cookies } from "react-cookie-consent"

import DCHeader from "../components/DCHeader"
import DCFooter from "../components/DCFooter"
import { Container } from "../components-styled"
import "prismjs/themes/prism.css"
import "./app.css"
import "./gridlover.css"
import bowser from "bowser"

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
        }
      ]}
    >
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
    </Helmet>
    <div>
      {/* {Cookies.remove("DNEGithubCom")} */}
      <CookieConsent cookieName="DNEGithubCom">
        This website uses cookies to enhance the user experience.
      </CookieConsent>
      <DCHeader />
      <Container>{children()}</Container>
      <DCFooter
        version={data.site.siteMetadata.version}
        date={data.site.siteMetadata.date}
        browser={bowser}
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
