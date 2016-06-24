// Import React
import React, { Component } from 'react'
// import { pure } from 'recompose'

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
//  CodePane,
  Deck,
//  Fill,
  Heading,
  Image,
//  Layout,
//  Link,
  ListItem,
  List,
//  Markdown,
  Quote,
  Slide,
  Spectacle,
//  Text,
} from 'spectacle'

// Import code presentation component
// import CodeSlide from 'spectacle-code-slide'

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

// Import custom component
// import Interactive from '../assets/interactive'

// Require CSS
require('normalize.css')
require('spectacle/lib/themes/default/index.css')
require('../assets/presentation-styles.css')

const images = {
  reduxLogoTitleDark: require('../assets/redux-logo-title-dark.png').replace('/', ''),
  reduxLogoTitleLight: require('../assets/redux-logo-title-light.png').replace('/', ''),
  reduxLogoPNG: require('../assets/redux-logo.png').replace('/', ''),
  reduxLogoSVG: require('../assets/redux-logo.svg').replace('/', ''),
  wat: require('../assets/wat.png').replace('/', ''),
  bruceLeeLimits: require('../assets/bruce-lee-limits.jpg').replace('/', ''),
  bruceLeeAbsorb: require('../assets/bruce-lee-absorb.jpg').replace('/', ''),
  rootOfAllEvil: require('../assets/yehuda-katz-on-mutable-state.jpg').replace('/', ''),
  applause: require('../assets/applause.gif').replace('/', ''),
  carlSaganOpenMind: require('../assets/carl-sagan-open-mind.jpg').replace('/', ''),
  thatsAllFolks: require('../assets/thats-all-folks.png').replace('/', ''),
  talkLogo: require('../assets/talk-logo.png').replace('/', ''),
  noMoreVInMVC: require('../assets/no-more-v-in-mvc.png').replace('/', ''),
  unidirectionalDataFlow: require('../assets/unidirectional-data-flow.png').replace('/', ''),
}

preloader(images)

const theme = createTheme({
  primary: '#754fb5',
  secondary: '#FFF',
  tertiary: '#000',
})

class Presentation extends Component {
  render () {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['zoom', 'slide']} transitionDuration={500}>
          {/*
            <Slide transition={['zoom']} bgColor='tertiary'>
            <Image src={images.reduxLogoTitleLight} margin='0 auto' height='400px' />
            <Heading size={1} fit caps lineHeight={1} textColor='secondary' textFont='primary' margin='-50px auto 0 auto' >
              Taming the Stateful Beast
            </Heading>
          </Slide>
          */}
          <Slide transition={['zoom']} bgColor='tertiary'>
            <Image src={images.talkLogo} margin='-80px auto 0 auto' height='800px' />
          </Slide>
          <Slide transition={['zoom']} bgColor='primary'>
            <Image src={images.rootOfAllEvil} margin='-50px auto 0 auto' height='700px' />
          </Slide>
          <Slide transition={['slide']} bgColor='tertiary'>
            {/*
              <Heading size={1} caps fit textColor='secondary' textFont='primary'>
              "Redux is a predictable state
            </Heading>
            <Heading size={1} caps fit textColor='secondary' textFont='primary'>
              container for JavaScript apps."
            </Heading>
            */}
            <BlockQuote textColor='primary'>
              <Quote textColor='primary'>Redux is a predictable state container for JavaScript apps.</Quote>
              <Cite textColor='secondary'>redux.js.org</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={['zoom']} bgColor='tertiary'>
            <Image src={images.wat} margin='-50px auto 0 auto' height='700px' />
          </Slide>
          <Slide transition={['zoom']} bgColor='primary'>
            <Image src={images.noMoreVInMVC} margin='-100px auto 0 auto' height='800px' />
          </Slide>
          <Slide transition={['slide']} bgColor='primary'>
            <Heading size={1} caps fit textColor='secondary' textFont='primary'>
              Talk about Flux here.
            </Heading>
          </Slide>
          <Slide transition={['zoom']} bgColor='tertiary'>
            <Image src={images.unidirectionalDataFlow} margin='0px auto 0 auto' height='500px' />
          </Slide>
          <Slide transition={['slide']} bgColor='primary'>
            <Heading size={1} caps fit textColor='secondary' textFont='primary'>
              Talk about specific influences/inspirations here.
            </Heading>
            <Heading size={1} caps fit textColor='secondary' textFont='primary'>
              Flummox, NuclearJS, & The Elm Architecture
            </Heading>
          </Slide>
          <Slide transition={['slide']} bgColor='primary'>
            <Heading size={1} caps fit textColor='secondary' textFont='primary'>
              Go over the 3 principles of Redux
            </Heading>
          </Slide>
          <Slide transition={['slide']} bgColor='primary'>
            <Heading size={1} caps fit textColor='secondary' textFont='primary'>
              Go through the basic pieces & workflow of Redux
            </Heading>
            <Heading size={1} caps fit textColor='secondary' textFont='primary'>
              State tree, Store, Actions, Reducers, middleware, etc.
            </Heading>
          </Slide>
          <Slide transition={['spin', 'slide']} bgColor='tertiary'>
            <Heading size={1} caps fit lineHeight={1.5} textColor='primary'>
              Learning Resources
            </Heading>
            <List>
              <Appear>
                <ListItem>Read the official docs: <a href='http://redux.js.org/'>redux.js.org</a></ListItem>
              </Appear>
              <Appear>
                <ListItem>Watch Dan Abramov's Videos on Egghead.io: <br />&nbsp;&nbsp; &nbsp;
                  <a href='https://egghead.io/courses/getting-started-with-redux'>Getting Started with Redux</a> <br />&nbsp;&nbsp; &nbsp;
                  <a href='https://egghead.io/courses/building-react-applications-with-idiomatic-redux'>Building React Applications with Idiomatic Redux</a>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>Check out <a href='https://github.com/reactjs/redux/tree/master/examples'>the examples in the redux GitHub repository</a></ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide transition={['spin', 'slide']} bgColor='tertiary'>
            <Heading size={1} caps fit lineHeight={1.5} textColor='primary'>
              Recommendations
            </Heading>
            <List>
              <Appear><ListItem>Learn & understand React before going all in on Redux.</ListItem></Appear>
              <Appear><ListItem>Use & enjoy Redux. It's stable, elegant, & has a huge community.</ListItem></Appear>
              <Appear><ListItem>...but don't stop there. Stay curious and experiment.</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={['zoom']} bgColor='tertiary'>
            <Image src={images.bruceLeeLimits} margin='-50px auto 0 auto' height='700px' />
          </Slide>
          <Slide transition={['slide']} bgColor='tertiary'>
            <Heading size={1} caps fit textColor='primary' textFont='primary'>
              Rethinking dogma
            </Heading>
            <Heading size={1} caps fit textColor='primary' textFont='primary'>
              & <span style={{ color: theme.screen.colors.secondary }}>innovating</span>
            </Heading>
            <Heading size={1} caps fit textColor='primary' textFont='primary'>
               is what the React community
            </Heading>
            <Heading size={1} caps fit textColor='primary' textFont='primary'>
               is all about
            </Heading>
          </Slide>
          <Slide transition={['spin', 'slide']} bgColor='tertiary'>
            <Heading size={1} caps fit lineHeight={1} textColor='primary'>
              Interested in
            </Heading>
            <Heading size={1} caps fit lineHeight={1} textColor='primary'>
              diving deeper?
            </Heading>
          </Slide>
          <Slide transition={['spin', 'slide']} bgColor='tertiary'>
            <Heading size={1} caps fit lineHeight={1} textColor='primary'>
              Down the
            </Heading>
            <Heading size={1} caps fit lineHeight={1} textColor='primary'>
              <span style={{ color: theme.screen.colors.secondary }}>rabbit</span>
            </Heading>
            <Heading size={1} caps fit lineHeight={1} textColor='primary'>
               hole we go...
            </Heading>
          </Slide>
          <Slide transition={['spin', 'slide']} bgColor='tertiary'>
            <Heading size={1} caps fit lineHeight={1} textColor='primary'>Future Talk</Heading>
            <Heading size={1} caps fit lineHeight={1} textColor='secondary'>Going Further with</Heading>
            <Heading size={1} caps fit lineHeight={1} textColor='secondary'>FP & Immutability</Heading>
            <Heading size={1} caps fit lineHeight={1} textColor='secondary'>in React & Redux</Heading>
          </Slide>
          <Slide transition={['spin', 'slide']} bgColor='tertiary'>
            <Heading size={1} caps fit lineHeight={1} textColor='primary'>In the meantime...</Heading>
            <List>
              <ListItem>Try out complimentary libraries: <br />&nbsp;&nbsp; &nbsp;<a href='https://github.com/acdlite/recompose'>recompose</a>, <a href='https://github.com/raisemarketplace/redux-loop'>redux-loop</a>, <a href='https://github.com/reactjs/reselect'>reselect</a>, <a href='https://github.com/paularmstrong/normalizr'>normalizr</a>, <a href='https://github.com/facebook/immutable-js'>immutable-js</a></ListItem>
              <Appear>
                <ListItem>Explore more advanced middleware: <br />&nbsp;&nbsp; &nbsp;<a href='https://github.com/yelouafi/redux-saga'>redux-saga</a>, <a href='https://github.com/redux-observable/redux-observable'>redux-observable</a>, <a href='https://github.com/acdlite/redux-rx'>redux-rx</a></ListItem>
              </Appear>
              <Appear>
                <ListItem>Consider alternatives to Redux: <br />&nbsp;&nbsp; &nbsp;<a href='https://github.com/facebook/relay'>relay</a>, <a href='https://github.com/mobxjs/mobx'>mobx</a>, reactive streams (<a href='https://github.com/ReactiveX/rxjs'>rxjs</a>, <a href='https://github.com/cujojs/most'>most</a>, <a href='https://github.com/staltz/xstream'>xstream</a>)</ListItem>
              </Appear>
              <Appear>
                <ListItem>Look to other frameworks & languages for ideas: <br />&nbsp;&nbsp; &nbsp;<a href='http://cycle.js.org/'>Cycle.js</a>, <a href='http://clojure.org/about/clojurescript'>ClojureScript</a> & <a href='https://github.com/omcljs/om'>Om</a>, <a href='http://elm-lang.org/'>Elm</a>, <a href='http://www.purescript.org/'>PureScript</a>, <a href='https://facebook.github.io/reason/'>Reason</a></ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide transition={['zoom']} bgColor='tertiary'>
            <Image src={images.carlSaganOpenMind} margin='-50px auto 0 auto' height='706px' />
          </Slide>
          <Slide transition={['zoom']} bgColor='tertiary'>
            <Image src={images.bruceLeeAbsorb} margin='-50px auto 0 auto' height='700px' />
          </Slide>
          <Slide transition={['zoom']} bgColor='tertiary'>
            <Image src={images.applause} margin='-50px auto 0 auto' height='700px' />
          </Slide>
          <Slide transition={['spin', 'slide']} bgColor='tertiary'>
            <Heading size={1} caps fit lineHeight={1.5} textColor='primary'>
              Questions?
            </Heading>
          </Slide>
          <Slide transition={['spin', 'slide']} bgColor='tertiary'>
            <Heading size={1} caps fit lineHeight={1.5} textColor='primary'>
              Redux Rehacked Lab
            </Heading>
            <Heading size={1} caps fit lineHeight={1.5} textColor='secondary'>
              at The Hive, on July 6th
            </Heading>
          </Slide>
          <Slide transition={['spin', 'slide']} bgColor='tertiary'>
            <Heading size={1} caps fit lineHeight={1.5} textColor='primary'>
              Next talk on July 27th
            </Heading>
            <Heading size={1} fit lineHeight={1.5} textColor='secondary'>
              Higher Order Components by James Schimmoeller
            </Heading>
          </Slide>
          <Slide transition={['spin', 'slide']} bgColor='tertiary'>
            <Heading size={1} caps fit lineHeight={1.5} textColor='primary'>
              And an announcement...
            </Heading>
            <Appear>
              <Heading size={1} caps fit lineHeight={1.5} textColor='secondary'>
                Lightning Talks!
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={['spin', 'slide']} bgColor='tertiary'>
            <Heading size={1} caps fit lineHeight={1.5} textColor='primary'>
              Potential Topic Ideas
            </Heading>
            <List>
              <ListItem>Working with React & Data Visualization</ListItem>
              <ListItem>Working with React & Animation</ListItem>
              <ListItem>An Overview of "CSS in JavaScript"</ListItem>
              <ListItem>Falcor, GraphQL, Relay, etc.</ListItem>
            </List>
          </Slide>
          <Slide transition={['zoom']} bgColor='tertiary'>
            <Image src={images.thatsAllFolks} margin='-50px auto 0 auto' height='700px' />
          </Slide>
        </Deck>
      </Spectacle>
    )
  }
}

export default Presentation
