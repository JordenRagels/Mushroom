import React, { Component } from 'react';
import { Header } from '../../components';
import "./home.css";
<<<<<<< HEAD
import HomeNavs from '../../components/HomeNavs/index';
import LoginForm from '../LoginForm';
import { Navigations } from '../../components/Navigations'
import { GiMushroom } from "react-icons/gi"
=======
import { NavBar } from '../../components/Navbar'

>>>>>>> 58f77628609bb3c28943cff6e5e9bccd6a3feeb1
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
<<<<<<< HEAD
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
=======
		if (this.props.user) {
			return (
				<div className="Home">
					<Header user={this.state.user} />
					{/* <p>Current User:</p>
					<code>
						{JSON.stringify(this.props)}
					</code> */}
				</div>
			)
		} else {
			return (
				<div className="Home">
					<Header user={this.state.user} />
					{/* <p>Current User:</p>
					<code>
						{JSON.stringify(this.props)}
					</code> */}
				</div>
			)
		}
		
>>>>>>> 58f77628609bb3c28943cff6e5e9bccd6a3feeb1
	}
}
