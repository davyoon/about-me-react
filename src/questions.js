import Picture from './img/firstpic.png';

const questions = [ 
  { 
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
    correct: false
  },
  { 
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
    correct: false
  }
]



export default questions;
