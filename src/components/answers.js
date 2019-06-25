import React from 'react';
import { Row, Container, Table} from 'react-bootstrap';


const Answers = (props) => {

  return(
        <Container className="score-container">
          <Row>
            <h2>Congratulations! you got {props.correct} out of 20 correct</h2>
          </Row>
          <Row className="answer-container">
            <Table striped bordered hover variant="dark">
              <thead>
                <th>#</th>
                <th>Question</th>
                <th>Selected</th>
                <th>Answer</th>
              </thead>
              <tbody>
                {props.questions.map((question, idx) => {
                  return (
                    <tr key={question.number}>
                      <td>{idx + 1}</td>
                      <td>{question.question}</td>
                      <td>{question.selected}</td>
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


export default Answers;