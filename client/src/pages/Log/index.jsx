import React, { Component } from 'react';
import { Header } from '../../components';
import "./log.css";
import App from '../../App';
import ReactDOM from 'react-dom';
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