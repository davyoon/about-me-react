import Picture from './img/firstpic.png';


const questions = [ 
  { 
    number: 1,
    question: "What does David like?",
    choices: [
      {
        img: Picture,
        answer: true,
        text: "beach",
        key: 1
      },
      {
        img: Picture,
        answer: false,
        text: "mountain",
        key: 2
      }
    ],
    selected: null
  },
  { 
    number:2,
    question: "Where would David go to vacation?",
    choices: [
      {
        img: Picture,
        answer: false,
        text: "Europe",
        key: 1
      },
      {
        img: Picture,
        answer: true,
        text: "Caribbeans",
        key: 2
      }
    ],
    selected: null
  },
  { 
    number:3,
    question: "What does David like to eat?",
    choices: [
      {
        img: Picture,
        answer: false,
        text: "pizza",
        key: 1
      },
      {
        img: Picture,
        answer: true,
        text: "burger",
        key: 2
      }
    ],
    selected: null
  }
]


export default questions;
