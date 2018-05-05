import React from 'react'
import {
  Footer,
  FooterSection,
  StyledLink as Link,
} from '../components-styled'

const DCFooter = props => (
  <Footer>
    <FooterSection>
      <p>&copy; Dr. Ulrich Anders</p>
      <div>
        <Link to="/imprint">Imprint</Link>
        <br /> Version {props.version}
        <br /> Revision {props.date}
        <p>Browser: {props.browser.name} {props.browser.version}</p>
      </div>
    </FooterSection>
  </Footer>
)

export default DCFooter
