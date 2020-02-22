import React, { Component } from 'react';
import "./home.css";
import HomeNavs from '../../components/HomeNavs/index';
import LoginForm from '../LoginForm';

export default class Home extends Component {
	render() {
		return (
			<div>
				<h2>Mushroom</h2>
				<div className="milestones-home">
					<a href="/milestoneshome">Milestones</a>
				</div>
				<div className="parent-resources-home">
					<a href="/parentshome">Parent Resources</a>
				</div>
				<div className="activities-home">
					<a href="/activitieshome">Activities</a>
				</div>
				<div className="emergency-home">
					<a href="/emergency">Emergency</a>
				</div>
			</div>
		)
	}
}
