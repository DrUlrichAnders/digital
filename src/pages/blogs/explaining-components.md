---
title: "Explaining Components"
author: "Dr. Ulrich Anders"
date: "2018-04-20"
---

Websites basically are boxes in boxes in boxes. There are many frameworks and libraries that help building a website. The underlying technology used to build this website is called [React](https://reactjs.org). It has originally been developed by Facebook, but in the meantime a lot of people from outside of Facebook have contributed significantly to it. 

React has become hugely popular as you can see on [npm | React](https://www.npmjs.com/package/react). One of the reasons is that it mirrors the concept of boxes in boxes in boxes so closely. In React these boxes are called components.

In this blog, I am going to introduce how a component is built. For this we are taking the `Header` component of this website (from version 1.1.0) as an example.

There are two ways to define components in React. The easier way is to simply define a JavaScript function in ES6 syntax:

```jsx
const DCHeader = () => ( 
    // ...
)
```

The syntax is easy to understand. The function is called `DCHeader`. It is defined to take zero parameters, hence the empty brackets `()` and returns  what is (computed) in the round brackets after the arrow `=>`. Obviously, functions can get much more complicated like the one used here. 

The choice of name for the component is my own convention. React programmers distinguish between 'dumb' and 'smart' components. Dumb components basically display things, whereas smart components make calculations and steer dumb components. So, our header component will be a _Dumb Component_, hence the name `DCHeader`.  

In our component `DCHeader` you see a lot of other components, such as `<Header />, <Link />, <Nav />, <NavItem />, ...`. Components in React all start with a capital letter and they are surrounded by angle brackets. Components can be nested into components so they build a component tree. The beginning of a component is denominated with `<`, the ending with `</`.


```jsx
import React from 'react'

import {
  Header,
  HeaderSection,
  LogoBrand,
  LogoText,
  Nav,
  NavItem,
  LinkStyled as Link,
} from '../../components-styled'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faBook from '@fortawesome/fontawesome-free-solid/faBook'
import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'
import faQuestionCircle from '@fortawesome/fontawesome-free-solid/faQuestionCircle'
import faInfoCircle from '@fortawesome/fontawesome-free-solid/faInfoCircle'
import faGem from '@fortawesome/fontawesome-free-solid/faGem'

const DCHeader = () => (
  <Header>
    <HeaderSection>
      <Link to="/">
        <LogoBrand>
          <FontAwesomeIcon icon={faGem} size="1x" /> DNE
        </LogoBrand>
      </Link>
      <Nav>
        <Link to="/">
          <NavItem>
            <FontAwesomeIcon icon={faBook} size="1x" /> Home
          </NavItem>
        </Link>{' '}
        <Link to="/cheatsheets">
          <NavItem>
            <FontAwesomeIcon icon={faInfoCircle} size="1x" /> Cheat Sheets
          </NavItem>
        </Link>{' '}
        <Link to="/blogs">
          <NavItem>
            <FontAwesomeIcon icon={faQuestionCircle} size="1x" /> Blogs
          </NavItem>
        </Link>{' '}
        <Link to="/about">
          <NavItem>
            <FontAwesomeIcon icon={faCoffee} size="1x" /> About
          </NavItem>
        </Link>
      </Nav>
    </HeaderSection>
  </Header>
)

export default DCHeader
```

Now, the components used in `DCHeader` have all been defined somewhere else. This is why they have been imported at the beginning of the file.
Components can be imported from other packages or from your own folders. For instance, the component `FontAwesomeIcon` is imported from a package called `@fortawesome/react-fontawesome`. The component `Header` has been defined by myself and sits in a folder at `../../components-styled`.  

As you can probably tell from the name of the folder `styled-components` the components I have defined myself have all received styling information. This means they have information about their background color, width, margin, padding, font-size, link color and so on. If you want to better understand the styling information look into the [CSS Cheat Sheet](/cheatsheets#css).

For instance, here is the definition of the `<Header />` component:

```sass
export const Header = styled.header`
  background: #8f8978;
  margin-bottom: 1.5rem;
  padding: 0.5rem 0;
  @media (min-width: 48em) {
    padding: 1.5rem 0;
  }
`
```

With all this knowledge the code above is easy to read. In our `DCHeader`, there is a `<Header />`. The `<Header />` has an underlying `<HeaderSection />`. In the `<HeaderSection />` there are two children: a `<Link />` with logo information and a `<Nav />`--bar with several `<NavItem />`. Each `<NavItem />` has an icon and a name and is surrounded by a link.

Well, that's it really. I think, you are now good to go to make your own component or at least modify the existent ones.    