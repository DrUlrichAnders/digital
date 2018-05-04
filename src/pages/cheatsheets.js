import React from 'react'
import DCPerson from '../components/DCPerson'
import {
  Container,
  Img,
  Section,
  StyledFlex as Flex,
} from '../components-styled'
import { Box } from 'grid-styled'

import imgHTML from '../img/1024/HTML_CHEAT_SHEET.png'
import imgCSS1 from '../img/1024/CSS_CHEAT_SHEET_p1.png'
import imgCSS2 from '../img/1024/CSS_CHEAT_SHEET_p2.png'
import imgCSS3 from '../img/1024/CSS_CHEAT_SHEET_p3.png'
import imgCSS4 from '../img/1024/CSS_CHEAT_SHEET_p4.png'

const CheatsheetPage = () => (
  <Container>
    <Section>
      <h2>Cheat Sheets</h2>
      <p>
        Development of cheatsheets and permissions to use on{' '}
        <a href="https://websitesetup.org/html5-cheat-sheet/" target="_blank">
          html-cheat-sheet.html
        </a>{' '}
        and{' '}
        <a href="https://websitesetup.org/css3-cheat-sheet/" target="_blank">
          css-cheat-sheet.html
        </a>.
      </p>
      <h3 id="html">HTML</h3>
      <Img src={imgHTML} alt="" />
      <h3 id="css">CSS</h3>
      <Img src={imgCSS1} width={1024} alt="" />
      <Img src={imgCSS2} width={1024} alt="" />
      <Img src={imgCSS3} width={1024} alt="" />
      <Img src={imgCSS4} width={1024} alt="" />
    </Section>
  </Container>
)

export default CheatsheetPage
