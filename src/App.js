import React from 'react';
import './App.css';
import Questions from './components/questions.js';
import QuizBox from './components/quizBox.js';
import Answers from './components/answers.js';



class App extends React.Component{

  state = {
    questionNumber: 1,
    correctAnswers: 0,
  };


  onAnswerCheck = (props,e) => {
    let correctAnswers = this.state.correctAnswers;

    if(props.answer){
      e.target.className === "choice-box" ? e.target.classList.add("correct") : e.target.parentElement.classList.add("correct");
      correctAnswers += 1;
    }else{
       e.target.className === "choice-box" ? e.target.classList.add("wrong") : e.target.parentElement.classList.add("wrong");
    }


    // _________________Add Selected Answer to Database___________________

    let questionIndex = Questions.reduce((target, question, idx) => {
      if(question.number === this.state.questionNumber){
        return target = idx;
      }else{
        return target;
      }
    },0);
    Questions[questionIndex].selected = props.text;

    this.setState(prevState => {
      return {questionNumber: prevState.questionNumber + 1, correctAnswers: correctAnswers, isButtonDisabled: false}
    });

  };

  
  render(){

    let content;

    if(this.state.questionNumber < Questions.length + 1){
       content = <QuizBox handler={this.onAnswerCheck} data={Questions[this.state.questionNumber - 1]} questionNumber={this.state.questionNumber} totalQuestions={Questions.length} isButtonDisabled={this.state.isButtonDisabled}/>;

    } else { 
      content = <Answers correct={this.state.correctAnswers} questions={Questions}/>     
    }
    let item = document.getElementsByClassName('choice-box')

    if(item.length > 0){
      for(let i = 0; i < item.length; i++){
        item[i].classList.remove("correct", "wrong");
      }
    }
 

    return content;
  } 
}


export default App;
