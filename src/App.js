import React from 'react';
import './App.css';
import Questions from './components/questions.js';
import QuizBox from './components/quizBox.js';
import Answers from './components/answers.js';


class App extends React.Component{

  state = {
    questionNumber: 1,
    correctAnswers: 0,
    wipe: false
  };


  onAnswerCheck = (props,e) => {

    const parentBox = e.target.parentElement;

    if(props.answer){
      parentBox.classList.add("correct");
      this.timer = setTimeout(() => {
        this.setState(prevState => {
          return {questionNumber: prevState.questionNumber + 1, correctAnswers: prevState.correctAnswers + 1, wipe: true}
        });
      },1500);

    }else{
      parentBox.classList.add("wrong");
      this.timer = setTimeout(() => {
        this.setState(prevState => {
          return {questionNumber: prevState.questionNumber + 1, wipe: true}
        });
      },1500);      
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
  };

  
  render(){

    let content;

    if(this.state.questionNumber < Questions.length + 1){
       content = <QuizBox handler={this.onAnswerCheck} data={Questions[this.state.questionNumber - 1]} questionNumber={this.state.questionNumber}/>;

    } else { 
      content = <Answers correct={this.state.correctAnswers} questions={Questions}/>     
    }

    if(this.state.wipe){
      content = <h2></h2>
      this.setState({wipe:false})
    }

    return content;
  } 
}


export default App;
