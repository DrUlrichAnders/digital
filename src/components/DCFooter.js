import React from "react"
import {
  Footer,
  FooterSection,
  LinkFooterStyled as Link
} from "../components-styled"

const DCFooter = props => (
  <Footer>
    <FooterSection>
      <p>&copy; Dr. Ulrich Anders</p>
      <div>
        <Link to="/imprint">Imprint</Link>
        <br /> Revision: {props.date}
        <p>
          Browser: {props.browser.name} {props.browser.version}
        </p>
      </div>
    </FooterSection>
  </Footer>
)

export default DCFooter
