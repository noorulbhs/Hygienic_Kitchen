import React from "react";

function Input(props){
  return(
    <input type={props.type} placeholder={props.placeholder} onChange={props.Change} value={props.value}/>
  )
}

export default Input
