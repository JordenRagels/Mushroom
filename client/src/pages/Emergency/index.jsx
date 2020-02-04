import "./emergency.css";
import React, { Component } from 'react';
import { Navigations } from '../../components/Navigations/index';

class Emergency extends Component {
    render() {
        return (
            <div>
                <div>
                    <Navigations />
                </div>
                <h2 className="Emergency">Emergency Information</h2>
                <div className="phone-numbers">
                <h2>Emergency Number: 911</h2>
                <h3>Poison Control: 1(800) 222-1222</h3>
                </div>
                <div className="infant-CPR">
                    <img className="cpr" src="https://www.nationwidechildrens.org/-/media/nch/family-resources/helping-hands/images/hhii59_photo2.ashx?la=en&hash=84D0129741F659E26AF6D3775F8E28F26CD0A71D" alt="cpr"/>
                </div>
                <div className="infant-choking">
                    <img className="chocking" src=""></img>
                </div>
                <div className="child-med-info">
                    <div className="allergens">Known Allergies:</div> <div className="medications">Medications:</div>
                </div>
            </div>
        )
    }
}
export default Emergency;