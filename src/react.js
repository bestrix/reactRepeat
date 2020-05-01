import React, { useState } from "react";
import { render } from "react-dom";
import Task from './task/task.js'


export default class App extends React.Component{
    constructor(){
        super();
        this.state ={
            tasks:[
                {id:0,task:"task1",done:1,id:0},
                {id:0,task:"task2 todu-react-app23",done:0,id:1},
                {id:0,task:"task3 todu-react-app3",done:1,id:2}
            ]
            
        }
    }

    render(){
        const {tasks} = this.state;

        return(
            <div className="App">
                <h1 className="top">Active task:{tasks.length}</h1>
                {tasks.map(item => <Task key={item.id} done={item.done} task={item.task}/>)}
            </div>
        )
    }
}

{/* <h2>{item.task}</h2>} */}
