import React, { Component } from 'react';
import { Navigations } from '../../components/Navigations/index';
import "./parentshome.css";
class ParentsHome extends Component {
    render() {
        return (
            <div>
            <Navigations/>
                <h2>Parent Resources</h2>

                <div className="-home">
                    <div className="p">
                    <a href="/lengthcalculator" id="prl1">Infant Length Percentile Calculator</a>
                    </div>

                    <div className="r-2">
                    <a href="/weightcalculator" id="prl2">Infant Weight Percentile Calculator</a>
                   </div>   

                   <div className="pr-3">
                    <a href="/meditation" id="prl3">Meditation</a>
                    </div>

                    <div className="pr-4">
                    <a href="/sleeping" id="prl4">Infant Sleeping Recommendations</a>
                    </div>

                    <div className="pr-5">
                    <a href="/eating" id="prl5">Infant Eating Recomendations</a>
                  </div>  

                </div>
                <div className="footer">
                    <div className="footer-copyright-pr-h">
                        <h7 id="src"> Information Sourced from the Center for Disease Control and The World Health Organization</h7>
                        <br></br>
                        <h8 id="cop"> &copy; 2020 Copyright: Mushroom</h8>
                    </div>
                </div>
            </div>
        )
    }
}
export default ParentsHome;