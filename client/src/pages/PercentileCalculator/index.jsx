import React, { Component } from 'react';
import Per from './PC'
import { NavBar } from '../../components/Navbar'

export default class Percentile extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <div className="heading">
                    <h2>Comming soon!</h2>
                    <Per />
                </div>
                <a href="https://reference.medscape.com/calculator/infant-weight-age-percentile">Link to CDC's Calculator</a>
                <footer>
            Mushroom
<div className="Srcs">
Information Sourced from: The World Health Organization & The Center for Disease Contorl
</div>
<br></br>
            </footer>
            </div>
        )
    }
}

