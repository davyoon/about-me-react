import React from 'react';
import './App.css';
import { Row, Col, Container, Table} from 'react-bootstrap';
import Questions from './questions.js';
import QuizBox from './quizBox.js';
import Answers from './answers.js';



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
  };

  
  render(){

    let content;

    if(this.state.questionNumber < 3){
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
