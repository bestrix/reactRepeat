import React, { useState } from "react";
import { render } from "react-dom";

function ActionButton(props){
    return(
        <React.Fragment>
            {(props.done) ? <button>ok👌</button> : <button>don't ok 🤦‍♂️</button> }
            
        </React.Fragment>
    )
}

 export default function Task(props){
    return (
    <React.Fragment>
        <div className>
        <h1>{props.task}</h1>
        <ActionButton  done={props.done}/>
        </div>
    </React.Fragment>) 

}

let a = [
    {id:0,task:"task1",done:false,id:0},
    {id:0,task:"task2 todu-react-app23",done:false,id:1},
    {id:0,task:"task3 todu-react-app3",done:false,id:2}
]


