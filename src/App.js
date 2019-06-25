// import React from 'react';
// import './App.css';

// import { Row, Col, Container} from 'react-bootstrap';

// const questions = [ 
//   { 
//     question: "What does David like?",
//     choices: [
//       {
//         img: "firstpic.png",
//         answer: true,
//         text: "blue"
//       },
//       {
//         img: "firstpic.png",
//         answer: false,
//         text: "blue"
//       }
//     ]
//   },
//   { 
//     question: "What does David do?",
//     choices: [
//       {
//         img: "firstpic.png",
//         answer: true,
//         text: "blue"
//       },
//       {
//         img: "firstpic.png",
//         answer: false,
//         text: "blue"
//       }
//     ]
//   }
// ]

// class App extends React.Component{
//   state = {
//     questionNumber: 1
//   }


//   render(){

//     const data = questions[this.state.questionNumber - 1];
//     console.log(data)

//     return (
//     <Container className="main-container">
//       <Row>
//         <h2>{this.state.questionNumber} / 20</h2>
//       </Row>
//         <Row>
//         <h2>{data.question}</h2>
//       </Row>
//       <Row>
//         <Col md="6">
//           <Choice question={data.question} img={data.choices[0].img}/>
//         </Col>
//         <Col md="6">
//           <Choice />
//         </Col>
//       </Row>
//     </Container>

//     );
//   } 
// }


// const Choice = (props) => {

//   return(
//     <div>
//       <img src="{props.img}" alt="not loaded"/>
//       <p>{props.question}</p>
//      </div>
//   )
// }




// export default App;




// _______________USING MAP__________________________



import React from 'react';
import './App.css';
import { Row, Col, Container, Table} from 'react-bootstrap';
import Questions from './questions.js';
import QuizBox from './quizBox.js';



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
    const data = Questions[this.state.questionNumber - 1];
    let content;


     if(this.state.questionNumber < 3){
       content = <QuizBox handler={this.onAnswerCheck} data={data} questionNumber={this.state.questionNumber}/>;

    } else { 
      content = (
        <Container className="score-container">
          <Row>
            <h2>Congratulations! you got {this.state.correctAnswers} out of 20 correct</h2>
          </Row>
          <Row className="answer-container">
            <Table striped bordered hover variant="dark">
              <thead>
                <th>#</th>
                <th>Question</th>
                <th>Answer</th>
              </thead>
              <tbody>
                {Questions.map((question, idx) => {
                  return (
                    <tr>
                      <td>{idx + 1}</td>
                      <td>{question.question}</td>
                      <td>{question.choices.reduce((acc, choice) => {
                           return acc = choice.answer ? choice.text : acc;
                          }, "")}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </Row>
        </Container>  
      )
   }

    if(this.state.wipe){
      content = <h2></h2>
      this.setState({wipe:false})
    }

    return content;
  } 
}


export default App;





// // __________________ USING JUST ONE CLASS_____________________

// import React from 'react';
// import './App.css';

// import { Row, Col, Container} from 'react-bootstrap';

// const questions = [ 
//   { 
//     question: "What does David like?",
//     choices: [
//       {
//         img: "firstpic.png",
//         answer: true,
//         text: "blue",
//         key: 1
//       },
//       {
//         img: "firstpic.png",
//         answer: false,
//         text: "red",
//         key: 2
//       }
//     ]  
//   },
//   { 
//     question: "What does David do?",
//     choices: [
//       {
//         img: "firstpic.png",
//         answer: true,
//         text: "blue",
//         key: 1
//       },
//       {
//         img: "firstpic.png",
//         answer: false,
//         text: "red",
//         key: 2
//       }
//     ]
//   }
// ]

// class App extends React.Component{
//   state = {
//     questionNumber: 1
//   }

//   onAnswerClick = (props,e) => {
//     if(props.answer){
//       e.target.parentElement.classList.add("added")
//     }
//   }


//   render(){

//     return (
//     <Container className="main-container">
//       <Row>
//         <h2>{this.state.questionNumber} / 20</h2>
//       </Row>
//         <Row>
//         <h2>{questions[this.state.questionNumber - 1].question}</h2>
//       </Row>
//       <Row>
//         {questions[this.state.questionNumber - 1].choices.map(choice => {
//           return  (
//             <Col md="6" key={choice.key}>
//               <div className="questionBox">
//                 <img src={choice.img[0]} alt="not loaded"/>
//                 <p onClick={this.onAnswerClick.bind(this, {answer: choice.answer})}>{choice.text}</p>
//               </div>  
//             </Col>
//           )  
//         })}
       
//       </Row>
//     </Container>

//     );
//   } 
// }





// export default App;


