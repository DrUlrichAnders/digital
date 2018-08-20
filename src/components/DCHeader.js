import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {
  Header,
  HeaderSection,
  LogoBrand,
  LogoText,
  Nav,
  NavItem,
  LinkStyled as Link
} from "../components-styled"

/**
 * DCHeader: Dumb Component Header
 */
const DCHeader = () => (
  <Header>
    <HeaderSection>
      <Link to="/">
        <LogoBrand>
          <FontAwesomeIcon icon="keyboard" size="1x" /> digital@CBS
        </LogoBrand>
      </Link>
      <Nav>
        <Link to="/">
          <NavItem>
            <FontAwesomeIcon icon="book" size="1x" /> Home
          </NavItem>
        </Link>{" "}
        <Link to="/cheatsheets">
          <NavItem>
            <FontAwesomeIcon icon="info-circle" size="1x" /> Cheat Sheets
          </NavItem>
        </Link>{" "}
        <Link to="/blogs">
          <NavItem>
            <FontAwesomeIcon icon="question-circle" size="1x" /> Blogs
          </NavItem>
        </Link>{" "}
        <Link to="/about">
          <NavItem>
            <FontAwesomeIcon icon="coffee" size="1x" /> About
          </NavItem>
        </Link>
      </Nav>
    </HeaderSection>
  </Header>
)

export default DCHeader
