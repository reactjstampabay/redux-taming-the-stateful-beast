// Import React
import React, { Component } from 'react';
import { pure } from 'recompose';

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

const images = {
  city: require('../assets/city.jpg').replace('/', ''),
  kat: require('../assets/kat.png').replace('/', ''),
  logo: require('../assets/formidable-logo.svg').replace('/', ''),
  markdown: require('../assets/markdown.png').replace('/', ''),
  reduxLogoTitleDark: require('../assets/redux-logo-title-dark.png').replace('/', ''),
  reduxLogoTitleLight: require('../assets/redux-logo-title-light.png').replace('/', ''),
  reduxLogoPNG: require('../assets/redux-logo.png').replace('/', ''),
  reduxLogoSVG: require('../assets/redux-logo.svg').replace('/', ''),
  wat: require('../assets/wat.png').replace('/', ''),
  bruceLeeLimits: require('../assets/bruce-lee-limits.jpg').replace('/', ''),
  bruceLeeAbsorb: require('../assets/bruce-lee-absorb.jpg').replace('/', ''),
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
          <Slide transition={['slide']} bgColor='primary'>
            <Heading size={1} caps fit textColor='secondary' textFont='primary'>
              "Redux is a predictable state
            </Heading>
            <Heading size={1} caps fit textColor='secondary' textFont='primary'>
              container for JavaScript apps."
            </Heading>
          </Slide>
          <Slide transition={['zoom']} bgColor='tertiary'>
            <Image src={images.wat} margin='-75px auto 0 auto' height='700px' />
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
            <Image src={images.bruceLeeLimits} margin='0 auto' height='500px' />
          </Slide>
          <Slide transition={['slide']} bgColor='primary'>
            <Heading size={1.5} caps fit textColor='secondary' textFont='primary'>
              Pushing boundaries & rethinking best practices
            </Heading>
            <Heading size={1.5} caps fit textColor='secondary' textFont='primary'>
               is what the React community is all about.
            </Heading>
          </Slide>
          <Slide transition={['spin', 'slide']} bgColor='tertiary'>
            <Heading size={1} caps fit lineHeight={1.5} textColor='primary'>
              Going Further
            </Heading>
          </Slide>
          <Slide transition={['spin', 'slide']} bgColor='tertiary'>
            <List>
              <ListItem>Future Talk: Getting More Functional & Immutable with React</ListItem>
              <Appear><ListItem>Look into immutable data structures for JS: Immutable.js, Mori, etc.</ListItem></Appear>
              <Appear><ListItem>Learn about Higher Order Components & try Recompose</ListItem></Appear>
              <Appear><ListItem>Try more advanced middleware: redux-saga, redux-rx, etc.</ListItem></Appear>
              <Appear><ListItem>Try state management alternatives: Mobx, reactive streams (like RxJS or most.js), etc.</ListItem></Appear>
              <Appear><ListItem>Look to other languages & frameworks for ideas: Elm, PureScript, Cycle.js, etc.</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={['zoom']} bgColor='tertiary'>
            <Image src={images.bruceLeeAbsorb} margin='0 auto' height='500px' />
          </Slide>
          <Slide transition={['spin', 'slide']} bgColor='tertiary'>
            <Heading size={1} caps fit lineHeight={1.5} textColor='primary'>
              One More Thing...
            </Heading>
            <Appear>
              <Heading size={1} caps fit lineHeight={1.5} textColor='primary'>
                Lightning Talks!
              </Heading>
            </Appear>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}

export default pure(Presentation);
