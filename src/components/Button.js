import React from "react";

function Button(props){
  return(
    <button onClick={props.Clicked}>{props.value}</button>
  )
}

export default Button;
