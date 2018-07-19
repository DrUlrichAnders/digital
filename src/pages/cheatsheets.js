import React from "react"
import DCPerson from "../components/DCPerson"
import {
  Container,
  Img,
  Section,
  FlexStyled as Flex
} from "../components-styled"
import { Box } from "grid-styled"

import imgHTML from "../img/1024/HTML_CHEAT_SHEET.png"
import imgCSS1 from "../img/1024/CSS_CHEAT_SHEET_p1.png"
import imgCSS2 from "../img/1024/CSS_CHEAT_SHEET_p2.png"
import imgCSS3 from "../img/1024/CSS_CHEAT_SHEET_p3.png"
import imgCSS4 from "../img/1024/CSS_CHEAT_SHEET_p4.png"

const CheatsheetPage = () => (
  <Container>
    <Section>
      <h2>Cheat Sheets</h2>
      <p>
        This page gives you cheat sheets on{" "}
        <a href="/cheatsheets#markdown">Markdown</a>,{" "}
        <a href="/cheatsheets#html">HTML</a> and{" "}
        <a href="/cheatsheets#css">CSS</a>.
      </p>
      <p>
        The permission to show the HTML and CSS you will find on{" "}
        <a
          href="https://websitesetup.org/html5-cheat-sheet/"
          target="_blank"
          rel="noopener"
        >
          html-cheat-sheet.html
        </a>{" "}
        and{" "}
        <a
          href="https://websitesetup.org/css3-cheat-sheet/"
          target="_blank"
          rel="noopener"
        >
          css-cheat-sheet.html
        </a>.
      </p>
      <h3 id="markdown">Markdown</h3>
      <p>
        Markdown is nothing but normal text with some formatting informations
        for headers, bullet lists, links, highlighting and so on.
      </p>
      <p>
        A good overview on Markdown is provided by this{" "}
        <a
          href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet"
          target="_blank"
          rel="noopener"
        >
          Markdown cheatsheet
        </a>.
      </p>
      <h3 id="html">HTML</h3>
      <p>
        HTML is the language for structuring a webpage. A webpage basically is
        boxes in boxes in boxes, which means the structure is coming in form of
        a tree. HTML is defining this tree.{" "}
      </p>
      <Img src={imgHTML} alt="" />
      <h3 id="css">CSS</h3>
      <p>
        HTML is the language for structuring the tree. CSS is the language for
        styling the elements of this very tree, its branches, its leaves and all
        of its elements. In CSS you can define the element's sizes, distances,
        fonts, colors, and so on.
      </p>
      <Img src={imgCSS1} width={1024} alt="" />
      <Img src={imgCSS2} width={1024} alt="" />
      <Img src={imgCSS3} width={1024} alt="" />
      <Img src={imgCSS4} width={1024} alt="" />
    </Section>
  </Container>
)

export default CheatsheetPage
