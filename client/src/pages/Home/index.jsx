import React, { Component } from 'react';
import "./home.css";
import HomeNavs from '../../components/HomeNavs/index';
import LoginForm from '../LoginForm';

export default class Home extends Component {
	render() {
			return (
				<div>
					<HomeNavs />
				</div>
			)
		}
	}
