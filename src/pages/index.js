import React from "react"
import Link from "gatsby-link"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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
      <h1 id="dne">
        Digital Network Economy & Digital Strategy Development{" "}
        <a href="/#dne">
          <FontAwesomeIcon icon="link" size="xs" color="lightgray" />
        </a>
      </h1>
      <p>
        This website is a personal and non-commercial website of Dr. Ulrich
        Anders for the purpose of teaching the courses{" "}
        <em>Digital Network Economy</em> and{" "}
        <em>Digital Strategy Development</em>. The courses are taught at{" "}
        <a href="https://cbs.de/" target="_blank" rel="noopener">
          Cologne Business School
        </a>
        .
      </p>
      <p>
        Elements of this website are programmed in class. Of course this website
        is <em>responsive</em>.
      </p>
    </Section>

    <Hr />

    <Section>
      <DCPicture img={img["08"]} />

      <h2 id="future-of-work">
        The Future of Work{" "}
        <a href="/#future-of-work">
          <FontAwesomeIcon icon="link" size="xs" color="lightgray" />
        </a>
      </h2>
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
      <h2 id="digital-skills">
        Digital Skills{" "}
        <a href="/#digital-skills">
          <FontAwesomeIcon icon="link" size="xs" color="lightgray" />
        </a>
      </h2>
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
      <h2 id="pitch-decks">
        Pitch Decks{" "}
        <a href="/#pitch-decks">
          <FontAwesomeIcon icon="link" size="xs" color="lightgray" />
        </a>
      </h2>
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
      <h2 id="story-telling">
        Story Telling{" "}
        <a href="/#story-telling">
          <FontAwesomeIcon icon="link" size="xs" color="lightgray" />
        </a>
      </h2>
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
      <h3>What a story is</h3>
      <p>
        »The anatomy of story« from John Truby is a classic and recommended
        read. He defines story as: »A speaker tells a listener what someone did
        to get what he wanted and why.« So story telling is about desire. It
        tracks »what a person wants, what he'll do to get it, and what costs
        he'll have to pay along the way.«
      </p>
      <p>
        Truby goes on: »Good story telling lets the audience relive events in
        the present so they can understand the forces, choices, and emotions
        that led the character to do what he did.« And all the time the hero has
        to struggle. »Any character who goes after a desire and is impeded is
        forced to struggle (otherwise the story is over). An that struggle makes
        him change.«
      </p>
      <p>
        Finally, in good story telling, the author always puts a little mystory
        element into it: »The author tells the audience certain information
        about a made-up character and he withholds certain information. This
        forces the audience to figure out who the character is and what he is
        doing.«
      </p>
      <h3>The anatomy of story</h3>
      <p>
        According to John Truby every story consists of the following elements,
        independent of whether or not they have been devised by the author:
      </p>
      <Flex>
        <Box width={[1, 1 / 2]} pr={[0, 4]}>
          <ol>
            <li>Premise</li>
            <li>Story structure</li>
            <li>Character</li>
            <li>Theme (moral argument)</li>
            <li>Story world</li>
          </ol>
        </Box>
        <Box width={[1, 1 / 2]} pl={[0, 4]}>
          <ol start="6">
            <li>Symbol Web</li>
            <li>Plot</li>
            <li>Scene weave</li>
            <li>Scene construction and symphonic dialogue</li>
          </ol>
        </Box>
      </Flex>
      <h3>Some more resources to learn more about story telling</h3>
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
                rel="noopener"
              >
                Andrew Stanton: The clues to a great story
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=YbV3b-l1sZs"
                target="_blank"
                rel="noopener"
              >
                Garr Reynolds: Why storytelling matters
              </a>
            </li>
            <li>
              <a
                href="https://www.ted.com/talks/j_j_abrams_mystery_box"
                target="_blank"
                rel="noopener"
              >
                J.J. Abrams: The mystery box
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=sh1-9xMZIfQ"
                target="_blank"
                rel="noopener"
              >
                Andrea Gibbs: The power of storytelling
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=wgeh4xhSA2Q"
                target="_blank"
                rel="noopener"
              >
                Donald Davis: How the story transforms the teller
              </a>
            </li>
          </ol>
        </Box>
        <Box width={[1, 1 / 2]} pl={[0, 4]}>
          <ol start="6">
            <li>
              <a
                href="https://www.youtube.com/watch?v=Nj-hdQMa3uA"
                target="_blank"
                rel="noopener"
              >
                David JP Phillips: The magical science of storytelling
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=al3-Kl4BDUQ"
                target="_blank"
                rel="noopener"
              >
                Julian Friedmann: The mystery of storytelling
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=RoEEDKwzNBw"
                target="_blank"
                rel="noopener"
              >
                Tyler Cowen: Be suspicious of stories
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=xOTZfGyVh1I"
                target="_blank"
                rel="noopener"
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
        where the best stories lie.«
        <br /> &mdash; Andrea Gibbs
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
      <h2 id="video-skills">
        The importance of video skills{" "}
        <a href="/#video-skills">
          <FontAwesomeIcon icon="link" size="xs" color="lightgray" />
        </a>
      </h2>
      <p>
        There are more and more paid streams such as Spotify, Netflix or
        podcasts. This means classical television or radio advertising will not
        longer reach its audience like in the past. Companies will need to move
        into video messaging with good content to attract or inform its
        customers.
      </p>
      <p>
        Furthermore, the world is full of ideas and attractive offers. Nobody is
        waiting for anything new to arrive. If some content does not have the
        means to meet an audience, probably, no one will ever detect it. A video
        might help to generate the necessary attention.
      </p>
      <p>
        Finally, knowledge management and documentation is a big issue. Because
        information that is not documented is probably lost. Video is and will
        continue to be essential. There are three types of knowledge: (a)
        general, (b) special and (c) specific. In addition to books,
        encyclopedias or Wikipedia, there are already a lot of videos available
        on general and special knowledge either free or through online course
        providers. The biggest challenge is documentation and knowledge
        management on company specific issues. Video will also play a major role
        here.
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
            <li>
              Don't speak too fast (especially if the topic is complicated
              people may not follow).
            </li>
            <li>
              Vary background sounds and align them to the topic. Let music fade
              in or out.
            </li>
            <li>
              Don't make the background music too loud, so that people have
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
      <h3>Some free software for producing videos</h3>
      <p>
        There are some very useful and also free software tools for producing a
        video. They are all available for Windows, Max, or Linux:
      </p>
      <ol>
        <li>
          <strong>Davinci Resolve</strong> — Professional video editing, but
          complex and resource intensive (Davinci Resolve requires a computer or
          laptop with an explicit graphic card that has CUDA 3.0 support):{" "}
          <a href="https://www.blackmagicdesign.com/support/" target="_blank">
            https://www.blackmagicdesign.com/support/
          </a>{" "}
          and{" "}
          <a
            href="https://documents.blackmagicdesign.com/DaVinciResolve/20180814-0f11c3/DaVinci_Resolve_15_Reference_Manual.pdf"
            target="_blank"
          >
            Davinci Resolve Manual
          </a>
        </li>
        <li>
          <strong>Shotcut:</strong> — Good video editing, less resource
          intensive:{" "}
          <a href="https://shotcut.org/" target="_blank">
            https://shotcut.org/
          </a>
        </li>
        <li>
          <strong>Open Broadcast Studio</strong> — screen cam and streaming:{" "}
          <a href="https://obsproject.com/" target="_blank">
            https://obsproject.com/
          </a>
        </li>
        <li>
          <strong>Audacity</strong> — cutting and improving audio:{" "}
          <a href="https://www.audacityteam.org/" target="_blank">
            https://www.audacityteam.org/
          </a>
        </li>
      </ol>
    </Section>
    <Hr />

    <Section>
      <DCPicture img={img["05"]} />
      <h2 id="website-programming">
        Website Programming{" "}
        <a href="/#website-programming">
          <FontAwesomeIcon icon="link" size="xs" color="lightgray" />
        </a>
      </h2>
      <Flex>
        <Box width={[1, 1 / 2]}>
          <p>We are building a website with</p>
          <ul>
            <li>
              <a href="https://reactjs.org/" target="_blank" rel="noopener">
                React
              </a>
            </li>
            <li>
              <a href="https://gatsbyjs.org/" target="_blank" rel="noopener">
                Gatsby
              </a>
            </li>
            <li>
              <a
                href="https://www.styled-components.com/"
                target="_blank"
                rel="noopener"
              >
                Styled-Components
              </a>
            </li>
            <li>
              <a
                href="https://github.com/jxnblk/grid-styled"
                target="_blank"
                rel="noopener"
              >
                grid-styled
              </a>
            </li>
            <li>
              <a
                href="https://www.gridlover.net/"
                target="_blank"
                rel="noopener"
              >
                Gridlover
              </a>
            </li>
            <li>
              <a
                href="https://fonts.google.com/"
                target="_blank"
                rel="noopener"
              >
                Google Fonts
              </a>
            </li>
            <li>
              <a
                href="https://fontawesome.com/cheatsheet"
                target="_blank"
                rel="noopener"
              >
                Font Awesome
              </a>{" "}
              (
              <a
                href="https://github.com/FortAwesome/react-fontawesome"
                target="_blank"
                rel="noopener"
              >
                react-fontawesome
              </a>
              )
            </li>
            <li>
              <a
                href="https://www.materialui.co/colors"
                target="_blank"
                rel="noopener"
              >
                Material Design Colors
              </a>
            </li>
            <li>
              <a
                href="https://github.com/explore"
                target="_blank"
                rel="noopener"
              >
                GitHub
              </a>{" "}
              (
              <a
                href="https://octoverse.github.com/"
                target="_blank"
                rel="noopener"
              >
                Octoverse
              </a>
              )
            </li>
          </ul>
        </Box>
        <Box width={[1, 1 / 2]}>
          <p>As pre-requisites you'll need:</p>
          <ul>
            <li>
              <a href="https://nodejs.org/en/" target="_blank" rel="noopener">
                nodejs
              </a>
            </li>
            <li>
              <a
                href="https://yarnpkg.com/lang/en/"
                target="_blank"
                rel="noopener"
              >
                Yarn
              </a>
            </li>
            <li>
              {" "}
              GitHub (
              <a href="https://git-scm.com/" target="_blank" rel="noopener">
                git
              </a>{" "}
              |{" "}
              <a
                href="https://desktop.github.com/"
                target="_blank"
                rel="noopener"
              >
                Desktop
              </a>
              )
            </li>
            <li>
              <a
                href="https://code.visualstudio.com/"
                target="_blank"
                rel="noopener"
              >
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
              <a
                href="https://developer.apple.com/xcode/"
                target="_blank"
                rel="noopener"
              >
                Xcode
              </a>
              .
            </li>
          </ul>
        </Box>
      </Flex>
    </Section>

    <Hr />

    <Section>
      <DCPicture img={img["07"]} />
      <h2 id="github">
        GitHub{" "}
        <a href="/#github">
          <FontAwesomeIcon icon="link" size="xs" color="lightgray" />
        </a>
      </h2>
      <p>
        GitHub is a plattform to exchange software based on the exceptionally
        well thought out versioning software named <em>git</em>. But GitHub is
        much more than this. It is probably THE go-to-place for most open source
        software projects. Have a look at the{" "}
        <a href="https://octoverse.github.com/" target="_blank" rel="noopener">
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
        <a
          href="https://github.com/DrUlrichAnders/dne"
          target="_blank"
          rel="noopener"
        >
          https://github.com/DrUlrichAnders/dne
        </a>
        . Contributions from CBS students are most welcome.
      </p>
    </Section>

    <Hr />

    <Section>
      <DCPicture img={img["09"]} />
      <h2 id="scrum">
        Agile Project management{" "}
        <a href="/#scrum">
          <FontAwesomeIcon icon="link" size="xs" color="lightgray" />
        </a>
      </h2>
      <p>
        We will achieve some of our objectives by help of organising ourselves
        in an agile manner.
      </p>
    </Section>
  </Container>
)

export default IndexPage
