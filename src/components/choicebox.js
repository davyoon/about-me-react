import React from 'react';
import './choiceBox.css';


const Choice = (props) => {

  return(
    <div className="choice-box" onClick={props.handler.bind(this, {answer: props.answer, text: props.text, number: props.number})}>
      <img src={props.img} alt="not loaded"/>
      <p>{props.text}</p>
     </div>
  )
}


export default Choice;