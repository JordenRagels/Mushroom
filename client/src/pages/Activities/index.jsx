import React, { Component } from 'react';
import { Navigations } from '../../components/Navigations/index';
import "./activities.css";
import { GiMushroomGills } from "react-icons/gi"
class ActivitiesHome extends Component {
    render() {
        return (
            <div>
                <Navigations />
                <div className="activities-home1">
                    <div className="n-l">  
                    <GiMushroomGills size="50px" />
                    <br></br>
                        < a href="/activitiesonetotwo"  id="al">Activities for Ages<br></br>One to Two Months</a>
                    </div>

                    <div className="n-2">
                    <GiMushroomGills size="75px" />
                    <br></br>
                        < a href="/activitiesthreetofour" id="bl">Activities for Ages <br></br>Three to Four Months</a>
                    </div>

                    <div className="n-3">
                    <GiMushroomGills size="100px" />
                    <br></br>
                        <a href="/activitiesfivetosix" id="cl">Activities for Ages<br></br>Five to Six Months</a>
                    </div>

                    <div className="n-4">
                    <GiMushroomGills size="125px" />
                    <br></br>
                        <a href="/activitiesseventoeight" id="dl">Activities for Ages<br></br>Seven to Eight Months</a>
                    </div>

                    <div className="n-5">
                    <GiMushroomGills size="150px" />
                    <br></br>
                        <a href="/activitiesninetoten" id="el">Activities for Ages<br></br>Nine to Ten Months</a>
                    </div>

                    <div className="n-6">
                    <GiMushroomGills size="175px" />
                    <br></br>
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