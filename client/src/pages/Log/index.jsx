import React, { Component } from 'react';
import "./log.css";
import Ap from '../Milestones/Cognitive/cogLog'
import Appp from '../Milestones/Motor/motorLog'
export default class Log extends Component{
render(){
    return(
        <div>
        <Ap/>
        <Appp/>
        </div>
    )
}
}