import React from 'react';
import { Row, Col, Container} from 'react-bootstrap';
import './quizBox.css';
import Choice from './choiceBox.js';



const QuizBox = (props) => {

  return(
        <Container className="main-container">
          <Row>
            <h2 className="test">{props.questionNumber} / {props.totalQuestions}</h2>
          </Row>
          <Row>
            <p className="question">{props.data.question}</p>
          </Row>
          <Row>
            {props.data.choices.map((choice, idx) => {
              return  (
                <Col md="6" key={choice.key}>
                  <Choice handler={props.handler} text={choice.text} img={props.data.choices[idx].img} answer={choice.answer} number={props.data.number} />
                </Col>
              )  
            })}
          </Row>
        </Container>
  )
}


export default QuizBox;