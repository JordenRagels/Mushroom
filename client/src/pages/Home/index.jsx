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
					<h3>Milestones</h3>
					<a href="/cognitive">Cognitive</a>
					<br></br>
					< a href="/social">Social</a>
					<br></br>
					<a href="/motor">Motor</a>
					<br></br>
					<a href="/verbal">Verbal</a>

				</div>
				<div className="sleepingandeating-home">
					<h3>Sleeping and Eating Charts</h3>
					<a href="/sleeping">Sleeping Chart</a>
					<br></br>
					<a href="/eating">Eating Chart</a>
				</div>
				<div className="percentile-home">
					<h3>Percentile Calculators</h3>
					<h4>Weight Calculator</h4>
					<h4>Length Calculator</h4>
				</div>
				<div className="parentresources-home">
					<h3>Parent Resources</h3>
					<h4>Meditaion</h4>
					<br></br>
					<a href="/doctorSearch">Pediatrician Finder</a>
				</div>
				<div className="emergency-home">
					<a href="/emergency">Emergency</a>
				</div>


			</div>
		)
	}
}
