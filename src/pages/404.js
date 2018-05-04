import React from "react"
import { Container, Img, Section } from "../components-styled"

import img from "../img"
import DCPicture from "../components/DCPicture"

const NotFoundPage = () => (
  <Container>
    <Section>
      <DCPicture img={img["06"]} />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Section>
  </Container>
)

export default NotFoundPage
