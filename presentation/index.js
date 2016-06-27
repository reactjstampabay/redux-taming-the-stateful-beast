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
  Text,
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
  jackieChanWat: require('../assets/jackie-chan-wat.jpg').replace('/', ''),
  bruceLeeLimits: require('../assets/bruce-lee-limits.jpg').replace('/', ''),
  bruceLeeAbsorb: require('../assets/bruce-lee-absorb.jpg').replace('/', ''),
  rootOfAllEvil: require('../assets/yehuda-katz-on-mutable-state.jpg').replace('/', ''),
  applause: require('../assets/applause.gif').replace('/', ''),
  carlSaganOpenMind: require('../assets/carl-sagan-open-mind.jpg').replace('/', ''),
  thatsAllFolks: require('../assets/thats-all-folks.png').replace('/', ''),
  talkLogo: require('../assets/talk-logo.png').replace('/', ''),
  noMoreVInMVC: require('../assets/no-more-v-in-mvc.png').replace('/', ''),
  unidirectionalDataFlow: require('../assets/unidirectional-data-flow.png').replace('/', ''),
  rxjsVsRedux01: require('../assets/rxjs-vs-redux-01.png').replace('/', ''),
  rxjsVsRedux02: require('../assets/rxjs-vs-redux-02.png').replace('/', ''),
  danAbramov: require('../assets/dan-abramov.png').replace('/', ''),
  andrewClark: require('../assets/andrew-clark.png').replace('/', ''),
  fluxDiagram: require('../assets/flux-diagram.png').replace('/', ''),
  reduxDiagram: require('../assets/redux-diagram.png').replace('/', ''),
  fluxLogo: require('../assets/flux-logo.png').replace('/', ''),
  howPureFunctions: require('../assets/how-pure-functions.jpg').replace('/', ''),
  julesMutableState: require('../assets/jules-mutable-state.png').replace('/', ''),
  julesPureFunctions: require('../assets/jules-pure-functions.jpg').replace('/', ''),
  pureFunctionsMindBlown: require('../assets/pure-functions-mind-blown.jpg').replace('/', ''),
  toyStoryPureFunctions: require('../assets/toy-story-pure-functions.jpg').replace('/', ''),
}

const urls = {
  reduxDocs: 'http://redux.js.org/',
  reduxExamples: 'https://github.com/reactjs/redux/tree/master/examples',
  eggheadRedux01: 'https://egghead.io/courses/getting-started-with-redux',
  eggheadRedux02: 'https://egghead.io/courses/building-react-applications-with-idiomatic-redux',
  recompose: 'https://github.com/acdlite/recompose',
  reduxActions: 'https://github.com/acdlite/redux-actions',
  reduxLoop: 'https://github.com/raisemarketplace/redux-loop',
  reselect: 'https://github.com/reactjs/reselect',
  normalizr: 'https://github.com/paularmstrong/normalizr',
  immutableJS: 'https://github.com/facebook/immutable-js',
  reduxSaga: 'https://github.com/yelouafi/redux-saga',
  reduxObservable: 'https://github.com/redux-observable/redux-observable',
  reduxRx: 'https://github.com/acdlite/redux-rx',
  relay: 'https://github.com/facebook/relay',
  mobx: 'https://github.com/mobxjs/mobx',
  rxjs: 'https://github.com/ReactiveX/rxjs',
  most: 'https://github.com/cujojs/most',
  xstream: 'https://github.com/staltz/xstream',
  cycle: 'http://cycle.js.org/',
  clojureScript: 'http://clojure.org/about/clojurescript',
  reagent: 'https://github.com/reagent-project/reagent',
  reFrame: 'https://github.com/Day8/re-frame',
  om: 'https://github.com/omcljs/om',
  elm: 'http://elm-lang.org/',
  pureScript: 'http://www.purescript.org/',
  reason: 'https://facebook.github.io/reason/',
  flummox: 'https://github.com/acdlite/flummox',
  nuclearJS: 'https://github.com/optimizely/nuclear-js',
  elmArchitecture: 'http://guide.elm-lang.org/architecture/',
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
          <Slide transition={['zoom']} bgColor='tertiary'>
            <Image src={images.talkLogo} margin='-80px auto 0 auto' height='800px' />
          </Slide>
          <Slide transition={['zoom']} bgColor='primary'>
            <Image src={images.rootOfAllEvil} margin='-50px auto 0 auto' height='700px' />
          </Slide>
          <Slide transition={['slide']} bgColor='tertiary'>
            <BlockQuote textColor='primary'>
              <Quote textColor='primary'>Redux is a predictable state container for JavaScript apps.</Quote>
              <Cite textColor='secondary'>redux.js.org</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={['zoom']} bgColor='primary'>
            <Image src={images.jackieChanWat} margin='0 auto' height='500px' />
          </Slide>
          <Slide transition={['zoom']} bgColor='tertiary'>
            <Image src={images.wat} margin='-50px auto 0 auto' height='700px' />
          </Slide>
          <Slide transition={['slide']} bgColor='primary'>
            <Heading size={1} lineHeight={1.5} caps fit textColor='secondary' textFont='primary'>
              Redux Creators
            </Heading>
          </Slide>
          <Slide transition={['zoom']} bgColor='tertiary'>
            <Image src={images.danAbramov} margin='-50px auto 0 auto' height='700px' />
          </Slide>
          <Slide transition={['zoom']} bgColor='primary'>
            <Image src={images.andrewClark} margin='-50px auto 0 auto' height='700px' />
          </Slide>
          <Slide transition={['slide']} bgColor='tertiary'>
            <Heading size={1} lineHeight={1.5} caps fit textColor='primary' textFont='primary'>
              Redux Origins
            </Heading>
          </Slide>
          <Slide transition={['zoom']} bgColor='primary'>
            <Image src={images.noMoreVInMVC} margin='-100px auto 0 auto' height='800px' />
          </Slide>
          <Slide transition={['zoom']} bgColor='tertiary'>
            <Image src={images.fluxDiagram} margin='0 auto 0 auto' height='500px' />
          </Slide>
          <Slide transition={['zoom']} bgColor='primary'>
            <Image src={images.unidirectionalDataFlow} margin='0px auto 0 auto' height='500px' />
          </Slide>
          <Slide transition={['slide']} bgColor='tertiary'>
            <Heading size={1} caps fit textColor='primary' textFont='primary'>
              3 Key Influences
            </Heading>
            <List>
              <Appear>
                <ListItem>
                  <a href={urls.flummox}>flummox</a>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  <a href={urls.nuclearJS}>nuclear-js</a>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  <a href={urls.elmArchitecture}>The Elm Architecture</a>
                </ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide transition={['zoom']} bgColor='primary'>
            <Image src={images.reduxDiagram} margin='0px auto 0 auto' height='500px' />
          </Slide>
          <Slide transition={['slide']} bgColor='tertiary'>
            <Heading size={1} caps fit textColor='primary' textFont='primary'>
              The 3 principles of Redux
            </Heading>
            <List>
              <Appear>
                <ListItem>There is always only a single source of truth</ListItem>
              </Appear>
              <Appear>
                <ListItem>The application state is immutable (read-only)</ListItem>
              </Appear>
              <Appear>
                <ListItem>Changes to state are made via pure functions</ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide transition={['slide']} bgColor='primary'>
            <Heading size={1} lineHeight={1.5} caps fit textColor='secondary' textFont='primary'>
              There is always only a single source of truth
            </Heading>
            <Text textColor='secondary' textFont='primary' textAlign='left'>
              The state of your whole application is stored in an object tree within a single store.
            </Text>
          </Slide>
          <Slide transition={['slide']} bgColor='primary'>
            <Heading size={1} lineHeight={1.5} caps fit textColor='secondary' textFont='primary'>
              The application state is immutable (read-only)
            </Heading>
            <Text textColor='secondary' textFont='primary' textAlign='left'>
              The only way to mutate the state is to emit an action, an object describing what happened.
            </Text>
          </Slide>
          <Slide transition={['zoom']} bgColor='primary'>
            <Image src={images.julesMutableState} margin='0 auto' height='500px' />
          </Slide>
          <Slide transition={['slide']} bgColor='primary'>
            <Heading size={1} lineHeight={1.5} caps fit textColor='secondary' textFont='primary'>
              Changes to state are made via pure functions
            </Heading>
            <Text textColor='secondary' textFont='primary' textAlign='left'>
              To specify how the state tree is transformed by actions, you write pure reducers.
            </Text>
          </Slide>
          <Slide transition={['zoom']} bgColor='primary'>
            <Image src={images.julesPureFunctions} margin='0 auto' height='500px' />
          </Slide>
          <Slide transition={['slide']} bgColor='tertiary'>
            <Heading size={1} lineHeight={1.5} caps fit textColor='primary' textFont='primary'>
              A Pure function is stateless
            </Heading>
            <List>
              <Appear>
                <ListItem>
                  Given the same input, will always return the same output.
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Produces no side effects.
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Relies on no external state.
                </ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide transition={['slide']} bgColor='tertiary'>
            <Heading size={1} lineHeight={1.5} caps fit textColor='primary' textFont='primary'>
              Benefits of Using Pure Functions
            </Heading>
            <List>
              <Appear>
                <ListItem>
                  Makes application flow easier to understand.
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Simplifies testing, functions are modular & self-contained.
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Enables powerful developer tools
                </ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide transition={['zoom']} bgColor='primary'>
            <Image src={images.pureFunctionsMindBlown} margin='0 auto' height='500px' />
          </Slide>
          <Slide transition={['zoom']} bgColor='primary'>
            <Image src={images.toyStoryPureFunctions} margin='0 auto' height='500px' />
          </Slide>
          <Slide transition={['slide']} bgColor='tertiary'>
            <Heading size={1} lineHeight={1.5} caps fit textColor='primary' textFont='primary'>
              Redux Basics
            </Heading>
          </Slide>
          <Slide transition={['slide']} bgColor='tertiary'>
            <Heading size={1} lineHeight={1.5} caps fit textColor='primary' textFont='primary'>
              Actions
            </Heading>
          </Slide>
          <Slide transition={['slide']} bgColor='tertiary'>
            <Heading size={1} lineHeight={1.5} caps fit textColor='primary' textFont='primary'>
              Reducers
            </Heading>
          </Slide>
          <Slide transition={['slide']} bgColor='tertiary'>
            <Heading size={1} lineHeight={1.5} caps fit textColor='primary' textFont='primary'>
              Store
            </Heading>
          </Slide>
          <Slide transition={['slide']} bgColor='tertiary'>
            <Heading size={1} lineHeight={1.5} caps fit textColor='primary' textFont='primary'>
              Middleware
            </Heading>
          </Slide>
          <Slide transition={['spin', 'slide']} bgColor='tertiary'>
            <Heading size={1} caps fit lineHeight={1.5} textColor='primary'>
              Learning Resources
            </Heading>
            <List>
              <Appear>
                <ListItem>Read the official docs: <a href={urls.reduxDocs}>redux.js.org</a></ListItem>
              </Appear>
              <Appear>
                <ListItem>Watch Dan Abramov's Videos on Egghead.io: <br />&nbsp;&nbsp; &nbsp;
                  <a href={urls.eggheadRedux01}>Getting Started with Redux</a> <br />&nbsp;&nbsp; &nbsp;
                  <a href={urls.eggheadRedux02}>Building React Applications with Idiomatic Redux</a>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>Check out <a href={urls.reduxExamples}>the examples in the redux GitHub repository</a></ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide transition={['spin', 'slide']} bgColor='tertiary'>
            <Heading size={1} caps fit lineHeight={1.5} textColor='primary'>
              Recommendations
            </Heading>
            <List>
              <Appear>
                <ListItem>Learn & understand React before going all in on Redux.</ListItem>
              </Appear>
              <Appear>
                <ListItem>Use & enjoy Redux. It's stable, elegant, & has a huge community.</ListItem>
              </Appear>
              <Appear>
                <ListItem>...but don't stop there. Stay curious and experiment.</ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide transition={['slide']} bgColor='tertiary'>
            <Heading size={1} caps fit textColor='primary' textFont='primary'>
              <span style={{ color: theme.screen.colors.secondary }}>Progression</span>
            </Heading>
            <Heading size={1} caps fit textColor='primary' textFont='primary'>
               is what the React community
            </Heading>
            <Heading size={1} caps fit textColor='primary' textFont='primary'>
               is all about
            </Heading>
          </Slide>
          <Slide transition={['zoom']} bgColor='tertiary'>
            <Image src={images.bruceLeeLimits} margin='-50px auto 0 auto' height='700px' />
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
              Tumbling down the
            </Heading>
            <Heading size={1} caps fit lineHeight={1} textColor='primary'>
              <span style={{ color: theme.screen.colors.secondary }}>rabbit</span> hole...
            </Heading>
          </Slide>
          <Slide transition={['spin', 'slide']} bgColor='tertiary'>
            <Heading size={1} caps fit lineHeight={1} textColor='primary'>Future Talk</Heading>
            <Heading size={1} caps fit lineHeight={1} textColor='secondary'>Going Further with Functional</Heading>
            <Heading size={1} caps fit lineHeight={1} textColor='secondary'>Programming & Immutability</Heading>
          </Slide>
          <Slide transition={['spin', 'slide']} bgColor='tertiary'>
            <Heading size={1} caps fit lineHeight={1} textColor='primary'>In the meantime...</Heading>
            <List>
              <Appear>
                <ListItem>Try out complimentary libraries: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                  <a href={urls.recompose}>recompose</a>,&nbsp;
                  <a href={urls.reduxActions}>redux-actions</a>,&nbsp;
                  <a href={urls.reselect}>reselect</a>,&nbsp;
                  <a href={urls.normalizr}>normalizr</a>,&nbsp;
                  <a href={urls.immutableJS}>immutable-js</a>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>Explore more sophisticated async control flow: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                  <a href={urls.reduxSaga}>redux-saga</a>,&nbsp;
                  <a href={urls.reduxObservable}>redux-observable</a>,&nbsp;
                  <a href={urls.reduxRx}>redux-rx</a>,&nbsp;
                  <a href={urls.reduxLoop}>redux-loop</a>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>Consider alternatives to Redux: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                  <a href={urls.relay}>relay</a>,&nbsp;
                  <a href={urls.mobx}>mobx</a>, reactive streams (
                  <a href={urls.rxjs}>rxjs</a>,&nbsp;
                  <a href={urls.most}>most</a>,&nbsp;
                  <a href={urls.xstream}>xstream</a>
                  )
                </ListItem>
              </Appear>
              <ListItem style={{ visibility: 'hidden' }}>Look to other frameworks & languages for ideas: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                <a href={urls.cycle}>Cycle</a>,&nbsp;
                <a href={urls.clojureScript}>ClojureScript</a>,&nbsp;
                <a href={urls.reagent}>reagent</a>/
                <a href={urls.reFrame}>re&#8209;frame</a>,&nbsp;
                <a href={urls.om}>Om</a>,&nbsp;
                <a href={urls.elm}>Elm</a>,&nbsp;
                <a href={urls.pureScript}>PureScript</a>,&nbsp;
                <a href={urls.reason}>Reason</a>
              </ListItem>
            </List>
          </Slide>
          <Slide transition={['zoom']} bgColor='tertiary'>
            <Image src={images.rxjsVsRedux01} margin='-50px auto 0 auto' height='606px' />
          </Slide>
          <Slide transition={['zoom']} bgColor='tertiary'>
            <Image src={images.rxjsVsRedux02} margin='0 auto' height='450px' />
          </Slide>
          <Slide transition={['spin', 'slide']} bgColor='tertiary'>
            <Heading size={1} caps fit lineHeight={1} textColor='primary'>In the meantime...</Heading>
            <List>
              <ListItem>Try out complimentary libraries: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                <a href={urls.recompose}>recompose</a>,&nbsp;
                <a href={urls.reduxActions}>redux-actions</a>,&nbsp;
                <a href={urls.reselect}>reselect</a>,&nbsp;
                <a href={urls.normalizr}>normalizr</a>,&nbsp;
                <a href={urls.immutableJS}>immutable-js</a>
              </ListItem>
              <ListItem>Explore more sophisticated async control flow: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                <a href={urls.reduxSaga}>redux-saga</a>,&nbsp;
                <a href={urls.reduxObservable}>redux-observable</a>,&nbsp;
                <a href={urls.reduxRx}>redux-rx</a>,&nbsp;
                <a href={urls.reduxLoop}>redux-loop</a>
              </ListItem>
              <ListItem>Consider alternatives to Redux: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                <a href={urls.relay}>relay</a>,&nbsp;
                <a href={urls.mobx}>mobx</a>, reactive streams (
                <a href={urls.rxjs}>rxjs</a>,&nbsp;
                <a href={urls.most}>most</a>,&nbsp;
                <a href={urls.xstream}>xstream</a>
                )
              </ListItem>
              <Appear>
                <ListItem>Look to other frameworks & languages for ideas: <br />&nbsp;&nbsp;&nbsp;&nbsp;
                  <a href={urls.cycle}>Cycle</a>,&nbsp;
                  <a href={urls.clojureScript}>ClojureScript</a>,&nbsp;
                  <a href={urls.reagent}>reagent</a>/
                  <a href={urls.reFrame}>re&#8209;frame</a>,&nbsp;
                  <a href={urls.om}>Om</a>,&nbsp;
                  <a href={urls.elm}>Elm</a>,&nbsp;
                  <a href={urls.pureScript}>PureScript</a>,&nbsp;
                  <a href={urls.reason}>Reason</a>
                </ListItem>
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
              Higher Order Components
            </Heading>
            <Heading size={1} fit lineHeight={1.5} textColor='primary'>
              by James Schimmoeller
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
              Topic Ideas for lightning or full talks
            </Heading>
            <List>
              <ListItem>Data Visualization with React & D3</ListItem>
              <ListItem>Working with Animation in React</ListItem>
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
