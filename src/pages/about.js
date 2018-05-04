import React from "react"
import DCPerson from "../components/DCPerson"
import {
  Container,
  Img,
  Section,
  StyledFlex as Flex
} from "../components-styled"
import { Box } from "grid-styled"

import img from "../img"
import DCPicture from "../components/DCPicture"
import imgDrUlrichAnders from "../img/0400/DrUlrichAnders.jpg"

const AboutPage = () => (
  <Container>
    <Section>
      <DCPicture img={img["03"]} />
      <h2>About</h2>
      <p>This page was constructed by...</p>
      <Flex>
        <Box width={[1 / 2, 1 / 4]}>
          <DCPerson person="Dr. Ulrich Anders" img={imgDrUlrichAnders} />
        </Box>
      </Flex>
    </Section>
  </Container>
)

export default AboutPage
