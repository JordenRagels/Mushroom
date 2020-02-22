import React, { Component } from 'react';
import { Navigations } from '../../components/Navigations/index';
import "./activities.css";

class ActivitiesHome extends Component {
    render() {
        return (
            <div>
                <Navigations />
                <h2>Activities</h2>
                <div className="activities-home1">

                    <div className="n-l">
                        < a href="/activitiesonetotwo"  id="al">Activities for Ages<br></br>One to Two Months</a>
                    </div>

                    <div className="n-2">
                        < a href="/activitiesthreetofour" id="bl">Activities for Ages <br></br>Three to Four Months</a>
                    </div>

                    <div className="n-3">
                        <a href="/activitiesfivetosix" id="cl">Activities for Ages<br></br>Five to Six Months</a>
                    </div>

                    <div className="n-4">
                        <a href="/activitiesseventoeight" id="dl">Activities for Ages<br></br>Seven to Eight Months</a>
                    </div>

                    <div className="n-5">
                        <a href="/activitiesninetoten" id="el">Activities for Ages<br></br>Nine to Ten Months</a>
                    </div>

                    <div className="n-6">
                        <a href="/activitieseleventotwelve" id="fl">Activities for Ages<br></br>Eleven to Twelve Months</a>
                    </div>
                </div>
                <div className="footer">
                    <div className="footer-copyright-act-h">
                        <h7 id="src"> Information Sourced from the Center for Disease Control and The World Health Organization</h7>
                        <br></br>
                        <h8 id="cop"> &copy; 2020 Copyright: Mushroom</h8>
                    </div>
                </div>
            </div>
        )
    }
}
export default ActivitiesHome;