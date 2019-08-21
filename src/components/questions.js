import Beach from './img/beach.png';
import Mountain from './img/mountain.png';
import Europe from './img/europe.png';
import Caribbean from './img/caribbean.png';
import Vinegar from './img/vinegar.png';
import Cottage from './img/cottage.png';
import Chili from './img/chili.png';
import Ranch from './img/ranch.png';
import Regcoffee from './img/regcoffee.png';
import Black from './img/black.png';
import Cat from './img/cat.png';
import Peanut from './img/peanut.png';
import Shellfish from './img/shellfish.png';
import Nickel from './img/nickel.png';
import Arachno from './img/arachno.png';
import Phasmo from './img/phasmo.png';
import Acro from './img/acro.png';
import Claustro from './img/claustro.png';
import Football from './img/football.png';
import Basketball from './img/basketball.png';
import Baseball from './img/baseball.png';
import Soccer from './img/soccer.png';
import Tiramisu from './img/tiramisu.png';
import Creme from './img/creme.png';
import Strawberry from './img/strawberry.png';
import Icecream from './img/icecream.png';
import Tequila from './img/tequila.png';
import Whiskey from './img/whiskey.png';
import Skirt from './img/skirt.png';
import Filet from './img/filet.png';



const questions = [ 
  { 
    number: 1,
    question: "Where does David prefer to spend his day off?",
    choices: [
      {
        img: Beach,
        answer: true,
        text: "beach",
        key: 1
      },
      {
        img: Mountain,
        answer: false,
        text: "mountain",
        key: 2
      }
    ],
    selected: null
  },
  { 
    number:2,
    question: "Where would David prefer to go for a vacation?",
    choices: [
      {
        img: Europe,
        answer: false,
        text: "Europe",
        key: 1
      },
      {
        img: Caribbean,
        answer: true,
        text: "Caribbeans",
        key: 2
      }
    ],
    selected: null
  },
  { 
    number:3,
    question: "David can't eat the following except?",
    choices: [
      {
        img: Vinegar,
        answer: false,
        text: "vinegar",
        key: 1
      },
      {
        img: Cottage,
        answer: false,
        text: "cottage cheese",
        key: 2
      },
      {
        img: Chili,
        answer: true,
        text: "chili sauce",
        key: 2
      },
      {
        img: Ranch,
        answer: false,
        text: "ranch",
        key: 2
      }
    ],
    selected: null
  },
  { 
    number:4,
    question: "How does David like his coffee?",
    choices: [
      {
        img: Regcoffee,
        answer: false,
        text: "milk and sugar",
        key: 1
      },
      {
        img: Black,
        answer: true,
        text: "black",
        key: 2
      }
    ],
    selected: null
  },
  { 
    number:5,
    question: "What is David allergic to?",
    choices: [
      {
        img: Cat,
        answer: true,
        text: "cats",
        key: 1
      },
      {
        img: Peanut,
        answer: false,
        text: "peanuts",
        key: 2
      },
      {
        img: Shellfish,
        answer: false,
        text: "shellfish",
        key: 3
      },
      {
        img: Nickel,
        answer: false,
        text: "nickel",
        key: 4
      }
    ],
    selected: null
  },
  { 
    number:6,
    question: "What phobia doesn't David have?",
    choices: [
      {
        img: Arachno,
        answer: false,
        text: "arachnophobia",
        key: 1
      },
      {
        img: Acro,
        answer: true,
        text: "acrophobia",
        key: 2
      },
      {
        img: Claustro,
        answer: false,
        text: "claustrophobia",
        key: 3
      },
      {
        img: Phasmo,
        answer: false,
        text: "phasmophobia",
        key: 4
      }
    ],
    selected: null
  },
  { 
    number:7,
    question: "What is one sport David enjoys watching?",
    choices: [
      {
        img: Football,
        answer: false,
        text: "football",
        key: 1
      },
      {
        img: Basketball,
        answer: false,
        text: "basketball",
        key: 2
      },
      {
        img: Baseball,
        answer: false,
        text: "baseball",
        key: 3
      },
      {
        img: Soccer,
        answer: true,
        text: "soccer",
        key: 4
      }
    ],
    selected: null
  },
  { 
    number:8,
    question: "What is David's favorite desert?",
    choices: [
      {
        img: Tiramisu,
        answer: false,
        text: "tiramisu",
        key: 1
      },
      {
        img: Creme,
        answer: true,
        text: "creme brulee",
        key: 2
      },
      {
        img: Strawberry,
        answer: false,
        text: "strawberry shortcake",
        key: 3
      },
      {
        img: Icecream,
        answer: false,
        text: "green tea ice cream",
        key: 4
      }
    ],
    selected: null
  },
  { 
    number:9,
    question: "What is David's favorite drink?",
    choices: [
      {
        img: Tequila,
        answer: false,
        text: "tequila",
        key: 1
      },
      {
        img: Whiskey,
        answer: true,
        text: "whiskey",
        key: 2
      }
    ],
    selected: null
  },
  { 
    number:10,
    question: "What is David's favorite cut of steak?",
    choices: [
      {
        img: Skirt,
        answer: true,
        text: "skirt steak",
        key: 1
      },
      {
        img: Filet,
        answer: false,
        text: "filet mignon",
        key: 2
      }
    ],
    selected: null
  }

]


export default questions;
