import React from 'react';
import { Row, Col, Container} from 'react-bootstrap';
import Choice from './choicebox.js';


const QuizBox = (props) => {

  return(
        <Container className="main-container">
          <Row>
            <h2>{props.questionNumber} / 20</h2>
          </Row>
          <Row>
            <h2>{props.data.question}</h2>
          </Row>
          <Row>
            {props.data.choices.map(choice => {
              return  (
                <Col md="6" key={choice.key}>
                  <Choice handler={props.handler} question={choice.text} img={props.data.choices[0].img} answer={choice.answer}/>
                </Col>
              )  
            })}
          </Row>
        </Container>
  )
}

export default QuizBox;