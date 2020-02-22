import "./emergency.css";
import React, { Component } from 'react';
import { Navigations } from '../../components/Navigations/index';
import AllergiesList from "./allergies";
import AllergiesItems from "./AllergiesItems";
import MedsList from "./meds";
import MedsItems from "./medsItems";
import { Foot } from "../../components/Footer"
class Emergency extends Component {
    render() {
        return (
            <div>
                <div>
                    <div>
                        <Navigations />
                    </div>
                    <h2 className="Emergency">Emergency Information</h2>
                    <div className="phone-numbers">
                        <h2>911</h2>
                        <h3>Poison Control: 1(800) 222-1222</h3>
                    </div>
                    <div className="infant-CPR">
                        <img className="cpr" src="https://www.nationwidechildrens.org/-/media/nch/family-resources/helping-hands/images/hhii59_photo2.ashx?la=en&hash=84D0129741F659E26AF6D3775F8E28F26CD0A71D" alt="cpr" />
                    </div>

                    <div className="rowC">
                        <div className="infant-choking">
                            <img className="choking" src=""></img>
                        </div>
                        <div className="child-med-info">
                            <div className="allergens">
                                Known Allergies:
                            <div className="list-component">
                                    <AllergiesList />
                                </div>
                            </div>
                            <div className="medications">
                                Medications:
                            <div className="list-component">
                                    <MedsList />
                                </div>
                                <div className="medsList">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <div className="footer">
                    <div className="footer-copyright">
                        <h7 id="src"> Information Sourced from the Center for Disease Control and The World Health Organization</h7>
                        <br></br>
                        <h8 id="cop"> &copy; 2020 Copyright: Mushroom</h8>
                    </div>
                </div>
            </div>
        )
    }
}
export default Emergency;