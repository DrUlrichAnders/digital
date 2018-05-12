import React from "react"
import Link from "gatsby-link"
import {
  Container,
  FlexStyled as Flex,
  Picture,
  Section,
  Hr
} from "../components-styled"

import { Box } from "grid-styled"

import img from "../img"
import DCPicture from "../components/DCPicture"

const IndexPage = () => (
  <Container>
    <Section>
      <h1 id="dne">Digital Network Economy</h1>
      <p>
        This website tells you more about the course Digital Network Economy.
        The course is taught at{" "}
        <a href="https://cbs.de/" target="_blank">
          Cologne Business School
        </a>.
      </p>
      <p>
        Elements of this website are programmed in class. Of course this website
        is <em>responsive</em>.
      </p>
    </Section>

    <Hr />

    <Section>
      <DCPicture img={img["08"]} />

      <h2 id="future-of-work">The Future of Work</h2>
      <p>
        The more digitalized our world becomes, the more it is going to change.
        Which jobs will still exist in the future, which are going to change and
        which are plainly disappearing?
      </p>
      <p>
        Will robotics, artificial intelligence and machine learning take away
        jobs or will they actually overall help to create jobs?
      </p>
      <p>
        Companies and work are certainly becoming more modular and
        de-centralized? What skills will be required in a more digital world?
      </p>
    </Section>

    <Hr />

    <Section>
      <DCPicture img={img["12"]} />
      <h2 id="digital-skills">Digital Skills</h2>
      <p>
        The world becomes digital &mdash; no doubt about it. With the ever
        increasing spread of data there is also an acceleration of knowledge.
        Nobody will get away without <strong>life-long learning</strong>.
      </p>
      <p>
        But what concrete skills are required to thrive in this world? Companies
        are desperately seeking for <em>Digital Natives</em>. W hat does that
        mean? Being a <em>Digital Native</em> requires much more than just being
        comfortable with using apps and social media. <em>Digital skills</em>{" "}
        are comprised of going well beyond this. Have a look:{" "}
      </p>
      <Flex>
        <Box width={[1, 1 / 2]} pr={[0, 4]}>
          <ol>
            <li>
              <strong>Process mapping skills:</strong> map processes, understand
              data flows, perform value-stream mapping
            </li>
            <li>
              <strong>IT-skills:</strong> programming, IT-infrastructure,
              security, data protection
            </li>
            <li>
              <strong>Data skills:</strong> APIs, data storing, data analysis,
              statistics, data stories
            </li>
            <li>
              <strong>Integration skills:</strong> artificial intelligence,
              robotics, external resources
            </li>
          </ol>
        </Box>
        <Box width={[1, 1 / 2]} pl={[0, 4]}>
          <ol start="5">
            <li>
              <strong>Marketing skills:</strong> presentation, video, story
              telling, influencing, (personal) networking
            </li>
            <li>
              <strong>Diversity skills:</strong> intercultural relations, global
              thinking, user stories, varying customer benefits
            </li>

            <li>
              <strong>Planning skills:</strong> result-planning, budgeting,
              resource planning, pitch decks
            </li>
            <li>
              <strong>Realisation skills:</strong> ownership, organisation,
              project & team management, cost management, agile methodologies
            </li>
          </ol>
        </Box>
      </Flex>
    </Section>

    <Hr />

    <Section>
      <DCPicture img={img["04"]} />
      <h2 id="pitch-deck">Pitch Decks</h2>
      <p>
        A lot has been said about pitch decks. Understanding the concept and the
        logic of a pitch deck and being able to produce one is actually
        important even if you are not setting up a startup. Pitching for ideas
        and solutions, being able to market them, showing how to gain traction
        and achieve realisation, all of this within financial and budget
        constraints, is a highly desired skill set especially within today's
        companies.
      </p>
      <p>So, have a look at what should go into a pitch deck:</p>
      <Flex>
        <Box width={[1, 1 / 2]} pr={[0, 1]}>
          <ol>
            <li>Introduction</li>
            <li>Pain Points, Customer Benefit</li>
            <li>Product / Service (idea)</li>
            <li>Market Analysis & Competition</li>
            <li>Traction & Proof-of-Concept </li>
            <li>Financial Plan</li>
          </ol>
        </Box>
        <Box width={[1, 1 / 2]} pl={[0, 1]}>
          <ol start="7">
            <li>Marketing Plan</li>
            <li>Realisation & Go-to-Market</li>
            <li>Team & Skill Sets</li>
            <li>Pitch & Funding</li>
            <li>Summary</li>
          </ol>
        </Box>
      </Flex>
    </Section>

    <Hr />

    <Section>
      <DCPicture img={img["01"]} />
      <h2 id="story-telling">Story Telling</h2>
      <p>
        Story telling is a significant skill. It enables you to market your
        ideas, companies, products or convictions. The more digital and complex
        the world becomes, the more story telling becomes important to transport
        content, to share believes or to generate buy-in.
      </p>
      <p>
        There is no one way to story-telling and there is no right or wrong. But
        there certainly are stories which are <em>interesting</em> and which are{" "}
        <em>boring</em>.
      </p>
      <h3>Some resources to learn about story telling</h3>

      <p>
        If you want to get to know more about story telling, these resources may
        help to get a clearer picture:
      </p>

      <Flex>
        <Box width={[1, 1 / 2]} pr={[0, 4]}>
          <ol>
            <li>
              <a
                href="https://www.youtube.com/watch?v=YbV3b-l1sZs"
                target="_blank"
              >
                Andrew Stanton: The clues to a great story
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=YbV3b-l1sZs"
                target="_blank"
              >
                Garr Reynolds: Why storytelling matters
              </a>
            </li>
            <li>
              <a
                href="https://www.ted.com/talks/j_j_abrams_mystery_box"
                target="_blank"
              >
                J.J. Abrams: The mystery box
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=sh1-9xMZIfQ"
                target="_blank"
              >
                Andrea Gibbs: The power of storytelling
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=wgeh4xhSA2Q"
                target="_blank"
              >
                Donald Davis: How the story transforms the teller
              </a>
            </li>
          </ol>
        </Box>
        <Box width={[1, 1 / 2]} pl={[0, 4]}>
          <ol start="13">
            <li>
              <a
                href="https://www.youtube.com/watch?v=Nj-hdQMa3uA"
                target="_blank"
              >
                David JP Phillips: The magical science of storytelling
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=al3-Kl4BDUQ"
                target="_blank"
              >
                Julian Friedmann: The mystery of storytelling
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=RoEEDKwzNBw"
                target="_blank"
              >
                Tyler Cowen: Be suspicious of stories
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=xOTZfGyVh1I"
                target="_blank"
              >
                Veit Etzold: Die Kunst des Storytelling
              </a>
            </li>
          </ol>
        </Box>
      </Flex>

      <h3>Musings on story telling</h3>
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
        »Make a promise. This story leads somewhere that is worth your time.«{" "}
        <br /> &mdash; Andrew Stanton
      </p>
      <p>
        »Make the audience put things together. Don't give them 4, give them 2 +
        2.« <br /> &mdash; Andrew Stanton
      </p>
      <p>
        »You don't believe the message, if you don't believe the messenger.«{" "}
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
      <DCPicture img={img["14"]} />
      <h2 id="video-skills">The importance of video skills</h2>
      <p>
        There are more and more paid streams such as Spotify, Netflix or
        podcasts. This means classical television or radio advertising will not
        longer reach its audiency like in the past. Companies will need to move
        into video messaging with good content to attract or inform its
        customers.
      </p>
      <p>
        Furthermore, the world is full of ideas and attractive offers. Nobody is
        waiting for anything new to arrive. If some content does not have the
        means to meet an audience, probably, no one will ever detect it. A video
        might help to generate the necessary attention.
      </p>
      <h3>Some hints for producing a video</h3>
      <p>
        Here are some hints (and some rules) to consider for producing a video:
      </p>
      <ol />
      <Flex>
        <Box width={[1, 1 / 2]} pr={[0, 4]}>
          <ol>
            <li>Generate interest in your topic, don't assume this.</li>
            <li>
              Tell a story: a story is more than just passing information.
            </li>
            <li>Be consistent in your line of thought.</li>
            <li>
              Make sure the title of your video fits to your story (or vice
              versa).
            </li>
            <li>
              Make sure the images fit your story. They should help to tell the
              story rather than be the story. Of course there are exceptions.
            </li>
            <li>
              Blend over slides or scenes to make the video flowing smoothly.
            </li>
            <li>
              Sound is probably more important than the individual images
              themselves.
            </li>
            <li>Make your voice loud, intensive and articulate enough.</li>
            <li>Don't speak too fast (people cannot follow).</li>
            <li>
              Vary background sounds and align them to the topic. Let music fade
              in or out.
            </li>
            <li>
              Don't make the background sounds too loud, so that people have
              difficulties hearing the narration.
            </li>
            <li>
              Consider using headlines, subtitles or other texts for supporting
              or structuring the story. Let text ease or fade in or out.
            </li>
          </ol>
        </Box>
        <Box width={[1, 1 / 2]} pl={[0, 4]}>
          <ol start="13">
            <li>
              Videos can use moving scenes and static images. Pan over static
              images to make them more lively.
            </li>
            <li>
              Don't use the same panning effect (e.g. zooming in or out) on all
              static images all the time. Use appropriate panning routes.
            </li>
            <li>
              Use a wide aspect ratio and cinema bars to make your video look
              more cinematographic.
            </li>
            <li>
              Achieve visual consistency by applying a common color scheme, LUT,
              saturation or contrast.
            </li>
            <li>A video is not a presentation on film.</li>
            <li>
              Slides must not be overloaded: if there is not enough time to read
              the information on a slide while the slide is on display, reduce
              the information on the slide.
            </li>
            <li>
              A video is about moving images, so don't display a static slide
              too long &mdash; you are losing attention.
            </li>
            <li>Don't copy somebody else's story.</li>
            <li>
              If the same topic has already been treated elsewhere, find a
              different angle.
            </li>
            <li>Give credits by naming sources and URLs.</li>
            <li>Respect copyrights and licenses.</li>
          </ol>
        </Box>
      </Flex>
    </Section>
    <Hr />

    <Section>
      <DCPicture img={img["05"]} />
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
              </a>{" "}
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
              </a>{" "}
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
              {" "}
              GitHub (
              <a href="https://git-scm.com/" target="_blank">
                git
              </a>{" "}
              |{" "}
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
            <li>
              Mac users will also need to install{" "}
              <a href="https://developer.apple.com/xcode/" target="_blank">
                Xcode
              </a>.
            </li>
          </ul>
        </Box>
      </Flex>
    </Section>

    <Hr />

    <Section>
      <DCPicture img={img["07"]} />
      <h2 id="github">GitHub</h2>
      <p>
        GitHub is a plattform to exchange software based on the exceptionally
        well thought out versioning software named <em>git</em>. But GitHub is
        much more than this. It is probably THE go-to-place for most open source
        software projects. Have a look at the{" "}
        <a href="https://octoverse.github.com/" target="_blank">
          GitHub Octoverse{" "}
        </a>{" "}
        to get an idea about the huge dimension and importance of GitHub.
      </p>
      <p>
        But GitHub is even more than just big. It also is a show-case for a
        co-operation model which is not built on hierarchies but on competences
        alone. There is also no distinction on race, gender or age on GitHub. As
        such it can serve as a blueprint for modern organisations that want to
        get ready for the future.
      </p>
      <p>
        By the way, the sources for this website are on{" "}
        <a href="https://github.com/DrUlrichAnders/DNE" target="_blank">
          https://github.com/DrUlrichAnders/DNE
        </a>. Contributions from CBS students are most welcome.
      </p>
    </Section>

    <Hr />

    <Section>
      <DCPicture img={img["09"]} />
      <h2 id="scrum">Small Projects Realized with SCRUM</h2>
      <p>
        We will achieve some of our objectives by help of organising ourselves
        in an agile manner.
      </p>
    </Section>
  </Container>
)

export default IndexPage
