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
        img: "firstpic.png",
        answer: false,
        text: "mountains",
        key: 2
      }
    ],
    selected: null
  },
  { 
    number:2,
    question: "Where would David go for vacation?",
    choices: [
      {
        img: "firstpic.png",
        answer: false,
        text: "europe",
        key: 1
      },
      {
        img: "firstpic.png",
        answer: true,
        text: "caribbeans",
        key: 2
      }
    ],
    selected: null
  },
  { 
    number:3,
    question: "What would David eat?",
    choices: [
      {
        img: "firstpic.png",
        answer: false,
        text: "burger",
        key: 1
      },
      {
        img: "firstpic.png",
        answer: true,
        text: "pizza",
        key: 2
      }
    ],
    selected: null
  }
]


export default questions;
