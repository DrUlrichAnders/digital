import React from 'react'
import Link from 'gatsby-link'
import {
  Container,
  StyledFlex as Flex,
  Img,
  Section,
  Hr,
} from '../styled-components'
import { Box } from 'grid-styled'

import img01 from '../img/1200/01.jpg'
import img03 from '../img/1200/03.jpg'
import img04 from '../img/1200/04.jpg'
import img05 from '../img/1200/05.jpg'
import img07 from '../img/1200/07.jpg'
import img08 from '../img/1200/08.jpg'
import img09 from '../img/1200/09.jpg'
import img12 from '../img/1200/12.jpg'
import img14 from '../img/1200/14.jpg'

const IndexPage = () => (
  <Container>
    <Section>
      <h1 id="dne">Digital Network Economy Course</h1>
      <p>
        This website tells you more about the course Digital Network Economy.
        The course is taught at{' '}
        <a href="https://cbs.de/">Cologne Business School</a>.
      </p>
    </Section>

    <Hr />

    <Section>
      <Img src={img08} alt="" />
      <h2 id="future-of-work">The Future of Work</h2>
      <p>
        The more digitalized our world becomes, the more it is going to change.
        Which jobs will still exist in the future, which are going to change and
        which are plainly disappearing?
      </p>
      <p>
        Will robotics, artificial intelligence and machine learning overall take
        away jobs or will they actually overall help to create jobs?
      </p>
      <p>
        Companies and work are certainly becoming more modular and
        de-centralized? What skills will be required in a more digital world?
      </p>
    </Section>

    <Hr />

    <Section>
      <Img src={img12} alt="" />
      <h2 id="digital-skills">Digital Skills</h2>
      <Flex>
        <Box width={[1, 1 / 2]} pr={[0, 1]}>
          <ol>
            <li>
              <strong>IT-skills:</strong> programming, IT-infrastructure,
              security
            </li>
            <li>
              <strong>Integration skills:</strong> artificial intelligence,
              robotics, external resources.
            </li>
            <li>
              <strong>Planning skills:</strong> result-planning, budgeting,
              resource planning, pitch decks
            </li>
          </ol>
        </Box>
        <Box width={[1, 1 / 2]} pl={[0, 1]}>
          <ol start="7">
            <li>
              <strong>Marketing skills:</strong> presentation, video, story
              telling, influencing, (personal) networking
            </li>

            <li>
              <strong>Realisation skills:</strong> ownership, organisation,
              project & team management, cost management, agile methodologies.
            </li>
            <li>
              <strong>Data skills:</strong> APIs, data storing, data analysis,
              statistics, data stories
            </li>
          </ol>
        </Box>
      </Flex>
    </Section>

    <Hr />

    <Section>
      <Img src={img04} alt="" />
      <h2 id="pitch-deck">Pitch Deck</h2>
      <Flex>
        <Box width={[1, 1 / 2]} pr={[0, 1]}>
          <ol>
            <li>Introduction</li>
            <li>Pain points, Customer Benefit</li>
            <li>Product / Service (idea)</li>
            <li>Market Analysis & Competition</li>
            <li>Traction & Proof-of-Concept </li>
            <li>Financial Plan</li>
          </ol>
        </Box>
        <Box width={[1, 1 / 2]} pl={[0, 1]}>
          <ol start="7">
            <li>Marketing Plan</li>
            <li>Realisation & Go to market</li>
            <li>Team & Skill Sets</li>
            <li>Pitch & Funding</li>
            <li>Summary</li>
          </ol>
        </Box>
      </Flex>
    </Section>

    <Hr />

    <Section>
      <Img src={img14} alt="" />
      <h2 id="video-skills">The importance of video skills</h2>
      <p>
        There are more and more paid streams such as Spotify, Netflix or
        podcasts. This means classical television or radio advertising will not
        longer reach its audiency like in the past. Companies will need to move
        into video messaging with good content to attract or inform its
        customers.
      </p>
      <p>
        Furthermore, the world is full of ideas and offers. If you have not the
        means to reach a large audience, probably, no one will detect you.
      </p>
    </Section>
    <Hr />

    <Section>
      <Img src={img01} alt="" />
      <h2 id="story-telling">Story Telling</h2>
      <p>
        »If we take a risk and show that we are human and vulnerable then that's
        where the best stories lie.«<br /> &mdash; Andrea Gibbs
      </p>
      <p>
        »Know your audience.« <br /> &mdash; Matt Chan
      </p>
      <p>"Hook'em early.« &mdash; Garr Reynolds</p>
      <p>
        »Hold them [the audience] still for just a moment in life and have them
        wonder.« <br /> &mdash; Andrew Stanton
      </p>
      <p>
        »Make a promise. This story leads somewhere that is worth your time.«{' '}
        <br /> &mdash; Andrew Stanton
      </p>
      <p>
        »Make the audience put things together. Don't give them 4, give them 2 +
        2.« <br /> &mdash; Andrew Stanton
      </p>
      <p>
        »You don't believe the message, if you don't believe the messenger.«{' '}
        <br /> &mdash; Dr. Viet Etzold
      </p>
      <p>
        »Overcoming bad things makes us happier than if these bad things would
        have never happened.« <br /> &mdash; Dr. Viet Etzold
      </p>
      <p>
        »We impose stories. They help experience reality in a way that makes
        sense, that we can process, and that help us cope. Stories are how we
        live our lifes.« <br /> &mdash; Nick Morgan
      </p>
      <p>
        »You are not telling the story to change what happened. You're telling
        the story to change you.« <br /> &mdash; Donald Davis
      </p>
      <p>
        »A story is a mystery box.« <br /> &mdash; J.J. Abrams
      </p>
      <p>
        »A story is the catalyst for imagination." <br /> &mdash; J.J. Abrams
      </p>
    </Section>

    <Hr />

    <Section>
      <Img src={img05} alt="" />
      <h2 id="website-programming">Website Programming</h2>
      <Flex>
        <Box width={[1, 1 / 2]}>
          <p>We are building a website with</p>
          <ul>
            <li>
              <a href="https://reactjs.org/" target="_blank">
                React
              </a>
            </li>
            <li>
              <a href="https://gatsbyjs.org/" target="_blank">
                Gatsby
              </a>
            </li>
            <li>
              <a href="https://www.styled-components.com/" target="_blank">
                Styled-Components
              </a>
            </li>
            <li>
              <a href="https://github.com/jxnblk/grid-styled" target="_blank">
                grid-styled
              </a>
            </li>
            <li>
              <a href="https://www.gridlover.net/" target="_blank">
                Gridlover
              </a>
            </li>
            <li>
              <a href="https://fonts.google.com/" target="_blank">
                Google Fonts
              </a>
            </li>
            <li>
              <a href="https://fontawesome.com/cheatsheet" target="_blank">
                Font Awesome
              </a>{' '}
              (
              <a
                href="https://github.com/FortAwesome/react-fontawesome"
                target="_blank"
              >
                react-fontawesome
              </a>)
            </li>
            <li>
              <a href="https://www.materialui.co/colors" target="_blank">
                Material Design Colors
              </a>
            </li>
            <li>
              <a href="https://github.com/explore" target="_blank">
                GitHub
              </a>{' '}
              (
              <a href="https://octoverse.github.com/" target="_blank">
                Octoverse
              </a>)
            </li>
          </ul>
        </Box>
        <Box width={[1, 1 / 2]}>
          <p>As pre-requisites you'll need:</p>
          <ul>
            <li>
              <a href="https://nodejs.org/en/" target="_blank">
                nodejs
              </a>
            </li>
            <li>
              <a href="https://yarnpkg.com/lang/en/" target="_blank">
                Yarn
              </a>
            </li>
            <li>
              {' '}
              GitHub (
              <a href="https://git-scm.com/" target="_blank">
                git
              </a>{' '}
              |{' '}
              <a href="https://desktop.github.com/" target="_blank">
                Desktop
              </a>)
            </li>
            <li>
              <a href="https://code.visualstudio.com/" target="_blank">
                Visual Studio Code
              </a>
              <br /> with these recommended extensions: Atom Keymap, Auto Close
              Tag, Auto Rename Tag, Bracket Pair Colorizer, Color Highlight,
              EsLint, File Utils, Guides, npm, npm Intellisense, Sort lines,
              Prettier, vscode-styled-components.
            </li>
            <li>
              or any other editor of your liking, e.g. Atom, Sublime, etc.
            </li>
          </ul>
        </Box>
      </Flex>
    </Section>

    <Hr />

    <Section>
      <Img src={img07} alt="" />
      <h2 id="github">GitHub</h2>
      <p>
        The sources for this website are on{' '}
        <a href="https://github.com/DrUlrichAnders/DNE" target="_blank">
          GitHub | DrUlrichAnders/DNE
        </a>.
      </p>
      <p>Contributions from CBS students are most welcome.</p>
    </Section>

    <Hr />

    <Section>
      <Img src={img09} alt="" />
      <h2 id="scrum">Small Projects Realised with SCRUM</h2>
      <p>
        We will achieve some of our objectives by help of organising ourselves
        in an agile manner.
      </p>
    </Section>
  </Container>
)

export default IndexPage
