import React from 'react'
import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Chart from "../Chart/chart"

const HeaderComponent = props => {
	let Greeting
	if (props.user === null) {
		Greeting = <p>Hello guest</p>
	} else if (props.user.firstName) {
		Greeting = (
			<p>
				Welcome back, <strong>{props.user.firstName}</strong>
			</p>
		)
	} else if (props.user.local.username) {
		Greeting = (
			<p>
				Welcome back, <strong>{props.user.local.username} </strong>
			</p>
		)
	}
	return (
  <div className="Header">
   <Chart></Chart>
  </div>
	)
}

export const Header = React.memo(HeaderComponent);