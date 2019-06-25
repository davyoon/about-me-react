import React from 'react';

const Choice = (props) => {

  return(
    <div>
      <img src={props.img} alt="not loaded"/>
      <p onClick={props.handler.bind(this, {answer: props.answer})}>{props.question}</p>
     </div>
  )
}


export default Choice;