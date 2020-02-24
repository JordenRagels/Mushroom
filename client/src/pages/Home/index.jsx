import React, { Component } from 'react';
import { Header } from '../../components';
import "./home.css";
import HomeNavs from '../../components/HomeNavs/index';
import LoginForm from '../LoginForm';
import { Navigations } from '../../components/Navigations'
import { GiMushroom } from "react-icons/gi"
export default class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			user: props.user
		}
	}

	componentDidMount() {
		console.log("Home Component Mounted")
	}

	render() {
		return (
			<div>
				<div className="homepagenav">
					<Navigations />
				</div>
				<h1 className="homepagetitle"><GiMushroom size="100px"/>Mushroom</h1>
				<div className="tagline">
				<h2>"Watch  How Your New Baby Grows"</h2>
				</div>
				<div className="footer">
					<div className="footer-copyright-home">
						<h7 id="src"> Information Sourced from the Center for Disease Control and The World Health Organization</h7>
						<br></br>
						<h8 id="cop"> &copy; 2020 Copyright: Mushroom</h8>
					</div>
				</div>
			</div>
		)
	}
}
