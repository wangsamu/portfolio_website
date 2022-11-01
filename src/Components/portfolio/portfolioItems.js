//import portfolio images here
import ARKANOID from '../../assets/arkanoid.png';
import HALLOWEEN from '../../assets/halloween-game.png';
import CALCULATOR from '../../assets/calculator.png';
import CHATAPP from '../../assets/chatapp.png';
import DRUM_MACHINE from '../../assets/drum_machine.png';
import ECOMMERCE from '../../assets/ecommerce.png';
import QUOTE_MACHINE from '../../assets/quote_machine.png';

export const portfolioItems = [
  {
    id: 1,
    //insert portfolio image or gif here
    image: ARKANOID,
    title: 'React Arkanoid',
    description: `🛠 In Progress ⚙
    A Classic Arkanoid Arcade game build with React, Redux and Typescript, featuring user authentication, user avatars of choice and highest score records.
    Backend build with Firebase.`,
    github: 'https://github.com/wangsamu/react-arkanoid',
    demo: 'https://arkanoid.wangsamu.com',
  },
  {
    id: 2,
    image: ECOMMERCE,
    title: 'React e-commerce',
    description: `🛠 In Progress ⚙
    An E-commerce platform build with React, Redux and Typescript, featuring user authentication and payment via Stripe API.
    Backend build with Firebase.`,
    github: 'https://github.com/wangsamu/ecommerce_react_firebase',
    demo: 'https://ecommreactfirebase.netlify.app/',
  },
  {
    id: 3,
    image: CHATAPP,
    title: 'Chat Room App',
    description: 'A real time chat room build with React and Firebase.',
    github: 'https://github.com/wangsamu/chatapp-react-firebase',
    demo: 'https://chatapp.wangsamu.com/',
  },
  {
    id: 4,
    image: HALLOWEEN,
    title: 'Halloween Card Game',
    description: 'A memory game build with React and TypeScript.',
    github: 'https://github.com/wangsamu/card-matching-game',
    demo: 'https://halloween.wangsamu.com/',
  },
  {
    id: 5,
    image: DRUM_MACHINE,
    title: 'Drum Machine',
    description: 'A FreeCodeCamp project build with React.',
    github: 'https://codepen.io/wangsamu/pen/MWVZXVO',
    demo: 'https://codepen.io/wangsamu/full/MWVZXVO',
  },
  {
    id: 6,
    image: QUOTE_MACHINE,
    title: 'Random Quote Machine',
    description: 'A random code generator build with React.',
    github: 'https://codepen.io/wangsamu/pen/rNdqxew',
    demo: 'https://codepen.io/wangsamu/full/rNdqxew',
  },
  {
    id: 7,
    image: CALCULATOR,
    title: 'React Calculator',
    description: 'A simple calculator build with React and vanilla JavaScript.',
    github: 'https://codepen.io/wangsamu/pen/QWmPOwN',
    demo: 'https://codepen.io/wangsamu/full/QWmPOwN',
  },
];
