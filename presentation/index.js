// Import React
import React, { Component } from 'react';
// import { pure } from 'recompose';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text,
} from 'spectacle';

// Import code presentation component
import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Import custom component
import Interactive from '../assets/interactive';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');
require('../assets/presentation-styles.css');

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
};

preloader(images);

const theme = createTheme({
  primary: '#754fb5',
  secondary: '#FFF',
  tertiary: '#000',
});

class Presentation extends Component {
  render () {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['zoom', 'slide']} transitionDuration={500}>
          <Slide transition={['zoom']} bgColor='tertiary'>
            <Image src={images.reduxLogoTitleLight} margin='0 auto' height='400px' />
            <Heading size={1} fit caps lineHeight={1} textColor='secondary' textFont='primary' margin='-50px auto 0 auto' >
              Taming the Stateful Beast
            </Heading>
          </Slide>
          <Slide transition={['zoom']} bgColor='tertiary'>
            <Image src={images.rootOfAllEvil} margin='-50px auto 0 auto' height='700px' />
          </Slide>
          <Slide transition={['slide']} bgColor='primary'>
            <Heading size={1} caps fit textColor='secondary' textFont='primary'>
              "Redux is a predictable state
            </Heading>
            <Heading size={1} caps fit textColor='secondary' textFont='primary'>
              container for JavaScript apps."
            </Heading>
          </Slide>
          <Slide transition={['zoom']} bgColor='tertiary'>
            <Image src={images.wat} margin='-50px auto 0 auto' height='700px' />
          </Slide>
          <Slide transition={['slide']} bgColor='primary'>
            <Heading size={1} caps fit textColor='secondary' textFont='primary'>
              Talk about Flux here.
            </Heading>
          </Slide>
          <Slide transition={['slide']} bgColor='primary'>
            <Heading size={1} caps fit textColor='secondary' textFont='primary'>
              Add diagrams comparing unidrectional flow vs 2-way databinding
            </Heading>
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
          <Slide transition={['slide']} bgColor='primary'>
            <Heading size={1} caps fit textColor='secondary' textFont='primary'>
              Pushing boundaries & rethinking best practices
            </Heading>
            <Heading size={1} caps fit textColor='secondary' textFont='primary'>
               is what the React community is all about.
            </Heading>
          </Slide>
          <Slide transition={['spin', 'slide']} bgColor='tertiary'>
            <Heading size={1} caps fit lineHeight={1.5} textColor='primary'>
              Going Down the Rabbit Hole....
            </Heading>
          </Slide>
          <Slide transition={['spin', 'slide']} bgColor='tertiary'>
            <List>
              <ListItem>Future Talk: <br />&nbsp;&nbsp; &nbsp;Going Further with FP & Immutability in React & Redux</ListItem>
              <Appear><ListItem>Complimentary libraries: <a href='https://github.com/acdlite/recompose'>recompose</a>, <a href='https://github.com/facebook/immutable-js'>immutable-js</a>, etc.</ListItem></Appear>
              <Appear><ListItem>More advanced middleware: <a href='https://github.com/yelouafi/redux-saga'>redux-saga</a>,  <a href='https://github.com/redux-observable/redux-observable'>redux-observable</a>, <a href='https://github.com/acdlite/redux-rx'>redux-rx</a>, etc.</ListItem></Appear>
              <Appear><ListItem>State management alternatives: <a href='https://github.com/mobxjs/mobx'>mobx</a>, <a href='https://github.com/ReactiveX/rxjs'>rxjs</a>, <a href='https://github.com/cujojs/most'>most</a>, <a href='https://github.com/staltz/xstream'>xstream</a>, etc.</ListItem></Appear>
              <Appear><ListItem>Look to other frameworks & languages for ideas: <br />&nbsp;&nbsp; &nbsp;<a href='http://cycle.js.org/'>Cycle.js</a>, <a href='http://clojure.org/about/clojurescript'>ClojureScript</a> & <a href='https://github.com/omcljs/om'>Om</a>, <a href='http://elm-lang.org/'>Elm</a>, <a href='http://www.purescript.org/'>PureScript</a>, <a href='https://facebook.github.io/reason/'>Reason</a>, etc.</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={['zoom']} bgColor='tertiary'>
            <Image src={images.carlSaganOpenMind} margin='-50px auto 0 auto' height='706px' />
          </Slide>
          <Slide transition={['zoom']} bgColor='tertiary'>
            <Image src={images.bruceLeeAbsorb} margin='-50px auto 0 auto' height='700px' />
          </Slide>
          <Slide transition={['spin', 'slide']} bgColor='tertiary'>
            <Heading size={1} caps fit lineHeight={1.5} textColor='secondary'>
              And an announcement...
            </Heading>
            <Appear>
              <Heading size={1} caps fit lineHeight={1.5} textColor='primary'>
                Lightning Talks!
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={['zoom']} bgColor='tertiary'>
            <Image src={images.applause} margin='-50px auto 0 auto' height='700px' />
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}

export default Presentation;
