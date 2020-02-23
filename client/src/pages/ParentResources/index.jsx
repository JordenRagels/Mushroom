import React, { Component } from 'react';
import { Navigations } from '../../components/Navigations/index';
import "./parentshome.css";
import { FaRuler } from "react-icons/fa"
import { IoIosCalculator } from "react-icons/io"
import { GiMeditation } from "react-icons/gi"
import { FaRegMoon } from "react-icons/fa"
import { GiWaterGallon } from "react-icons/gi"
class ParentsHome extends Component {
    render() {
        return (
            <div>
            <Navigations/>
                <div className="-home">
                    <div className="p">
                    <FaRuler size="200px" />
                        <br></br>
                    <a href="/lengthcalculator" id="prl1">Infant Length Percentile Calculator</a>
                    </div>

                    <div className="r-2">
                    <IoIosCalculator size="200px" />
                        <br></br>
                    <a href="/weightcalculator" id="prl2">Infant Weight Percentile Calculator</a>
                   </div>   

                   <div className="pr-3">
                   <GiMeditation size="200px" />
                        <br></br>
                    <a href="/meditation" id="prl3">Meditation</a>
                    </div>

                    <div className="pr-4">
                   <FaRegMoon size="200px"/>
                        <br></br>   
                    <a href="/sleeping" id="prl4">Infant Sleeping Recommendations</a>
                    </div>

                    <div className="pr-5">
                  <GiWaterGallon size="200px" />
                        <br></br>
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