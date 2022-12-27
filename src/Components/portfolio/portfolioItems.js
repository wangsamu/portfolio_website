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
    image: ECOMMERCE,
    title: 'Dog Owners Gift Shop',
    description: `An e-commerce website build with React, Redux and Typescript.
    User authentication is done via Firebase and the database is Firestore. 
    It also handles payment via Stripe API.`,
    github: 'https://github.com/wangsamu/ecommerce_react_firebase',
    demo: 'https://ecommreactfirebase.netlify.app/',
  },
  {
    id: 2,
    image: CHATAPP,
    title: 'Open Chat Room',
    description: `A real time chat room application that allows anyone to join after authenticating. 
      The user authentication method is Google OAuth via Firebase. 
      The technologies used are TypeScript, React and Styled-Components.`,
    github: 'https://github.com/wangsamu/chatapp-react-firebase',
    demo: 'https://chatapp.wangsamu.com/',
  },
  // {
  //   id: 3,
  //   image: HALLOWEEN,
  //   title: 'Card Matching Game',
  //   description: 'A memory game build with React and TypeScript.',
  //   github: 'https://github.com/wangsamu/card-matching-game',
  //   demo: 'https://halloween.wangsamu.com/',
  // },
  // {
  //   id: 4,
  //   //insert portfolio image or gif here
  //   image: ARKANOID,
  //   title: 'React Arkanoid',
  //   description: `🛠 In Progress 🛠
  //   A Classic Arkanoid arcade game clone build with React, Redux and Typescript.
  //   Features include user authentication, user avatars and highest score board.
  //   Backend build with Firebase.`,
  //   github: 'https://github.com/wangsamu/react-arkanoid',
  //   demo: 'https://arkanoid.wangsamu.com',
  // },
  // {
  //   id: 5,
  //   image: DRUM_MACHINE,
  //   title: 'Drum Machine',
  //   description: 'A FreeCodeCamp project build with React.',
  //   github: 'https://codepen.io/wangsamu/pen/MWVZXVO',
  //   demo: 'https://codepen.io/wangsamu/full/MWVZXVO',
  // },
  // {
  //   id: 6,
  //   image: QUOTE_MACHINE,
  //   title: 'Random Quote Machine',
  //   description: 'A random code generator build with React.',
  //   github: 'https://codepen.io/wangsamu/pen/rNdqxew',
  //   demo: 'https://codepen.io/wangsamu/full/rNdqxew',
  // },
  // {
  //   id: 7,
  //   image: CALCULATOR,
  //   title: 'React Calculator',
  //   description: 'A simple calculator build with React and vanilla JavaScript.',
  //   github: 'https://codepen.io/wangsamu/pen/QWmPOwN',
  //   demo: 'https://codepen.io/wangsamu/full/QWmPOwN',
  // },
];
