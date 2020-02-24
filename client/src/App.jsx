import React, { Component } from 'react'
import axios from 'axios'
import { Route } from 'react-router-dom'
import LoginForm from './pages/LoginForm'
import SignupForm from './pages/SignupForm'
import Home from './pages/Home'

//Milestones
import MilestonesHome from "./pages/Milestones"
import Cognitive from './pages/Milestones/Cognitive'
import Motor from './pages/Milestones/Motor'
import Social from './pages/Milestones/Social'
import Verbal from './pages/Milestones/Verbal'
//Parent Resources
import ParentsHome from "./pages/ParentResources"
import Eating from "./pages/ParentResources/Eating"
import Sleeping from "./pages/ParentResources/Sleeping"
import LengthCalculator from "./pages/ParentResources/LengthCalculator"
import WeightCalculator from "./pages/ParentResources/WeightCalculator"
import Meditation from "./pages/ParentResources/Meditation"
//Emergency Page
import Emergency from './pages/Emergency'
//Activites
import ActivitiesHome from "./pages/Activities"
import OneToTwo from "./pages/Activities/one-to-two";
import ThreeToFour from "./pages/Activities/three-to-four"
import FiveToSix from "./pages/Activities/five-to-six"
import SevenToEight from "./pages/Activities/seven-to-eight"
import NineToTen from "./pages/Activities/nine-to-ten"
import ElevenToTwelve from "./pages/Activities/eleven-to-twelve"

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loggedIn: false,
			user: null
		}
		this._logout = this._logout.bind(this);
		this._login = this._login.bind(this);
	};

	componentDidMount() {
		axios.get('/auth/user').then(response => {
			if (!!response.data.user) {
				this.setState({
					loggedIn: true,
					user: response.data.user
				})
			} else {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	};

	_logout(event) {
		event.preventDefault()
		axios.post('/auth/logout').then(response => {
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}

	_login(username, password) {
		axios
			.post('/auth/login', {
				username,
				password
			})
			.then(response => {
				if (response.status === 200) {
					this.setState({
						loggedIn: true,
						user: response.data.user
					})
				}
			})
	}

	render() {
		return (
			//Home Paths
			<div className="">
				{/*  Individual Things */}
				<Route
					exact
					path="/"
					render={() =>
						<Home user={this.state.user} />} />
				<Route
					exact
					path="/login"
					render={() =>
						<LoginForm
							_login={this._login}
							_googleSignin={this._googleSignin}
						/>}
				/>
				<Route
					exact path="/signup"
					component={SignupForm}
				/>


				<Route
					exact
					path="/activitieshome"
					render={() =>
						<ActivitiesHome />
					}
				/>

				<Route
					exact
					path="/activitiesonetotwo"
					render={() =>
						<OneToTwo />
					}
				/>

				<Route
					exact
					path="/activitiesthreetofour"
					render={() =>
						<ThreeToFour />
					}
				/>

				<Route
					exact
					path="/activitiesfivetosix"
					render={() =>
						<FiveToSix />
					}
				/>

				<Route
					exact
					path="/activitiesseventoeight"
					render={() =>
						<SevenToEight />
					}
				/>

				<Route
					exact
					path="/activitiesninetoten"
					render={() =>
						<NineToTen />
					}
				/>

				<Route
					exact
					path="/activitieseleventotwelve"
					render={() =>
						<ElevenToTwelve />
					}
				/>


				<Route
					exact
					path="/milestoneshome"
					render={() =>
						<MilestonesHome />
					}
				/>
				<Route
					exact
					path="/cognitive"
					render={() =>
						<Cognitive>cog</Cognitive>
					}
				/>
				<Route
					exact
					path="/motor"
					render={() =>
						<Motor></Motor>
					}
				/>
				<Route
					exact
					path="/social"
					render={() =>
						<Social></Social>
					}
				/>
				<Route
					exact
					path="/verbal"
					render={() =>
						<Verbal></Verbal>
					}
				/>


				<Route
					exact
					path="/parentshome"
					render={() =>
						<ParentsHome />
					}
				/>


				<Route
					exact
					path="/eating"
					render={() =>
						<Eating></Eating>
					}
				/>
				<Route
					exact
					path="/sleeping"
					render={() =>
						<Sleeping></Sleeping>
					}
				/>
				<Route
					exact
					path="/weightcalculator"
					render={() =>
						<WeightCalculator />
					}
				/>
				<Route
					exact
					path="/lengthcalculator"
					render={() =>
						<LengthCalculator />
					}
				/>
				<Route
					exact
					path="/meditation"
					render={() =>
						<Meditation />
					}
				/>


				<Route
					exact
					path="/emergency"
					render={() =>
						<Emergency />
					}
				/>
			</div>

		)
	}
}
export default App;