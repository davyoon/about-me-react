import React from 'react';


const Choice = (props) => {

  return(
    <div>
      <img src={props.img} alt="not loaded"/>
      <p onClick={props.handler.bind(this, {answer: props.answer, text: props.text, number: props.number})}>{props.text}</p>
     </div>
  )
}


export default Choice;