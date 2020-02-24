import React, { Component } from 'react';
import { Navigations } from '../../components/Navigations/index';
import "./milestoneshome.css"
import { GiBrain } from "react-icons/gi"
import { FaChild } from "react-icons//fa"
import { FaUserFriends} from "react-icons/fa"
import { MdChildCare } from "react-icons/md"
class MilestonesHome extends Component {
    render() {
        return (
            <div>
                <Navigations />
                <div className="-home">
                    <div className="nitem-1">
                        <GiBrain size="200px" />
                        <br></br>
                        <a href="/cognitive" id="cl">Cognitive Milestones</a>
                    </div>

                    <div className="nitem-2">
                        <FaChild size="200px" />
                        <br></br>
                        < a href="/motor" id="ml">Motor Milestones</ a>
                    </div>

                    <div className="nitem-3">
                        <MdChildCare size="200px" />
                        <br></br>
                        <a href="/verbal" id="vl">Verbal Milestones</a>
                    </div>

                    <div className="nitem-4">
                    <FaUserFriends size="200px" />
                        <br></br>
                        <a href="/social" id="sl">Social Milestones</a>
                    </div>
                </div>
                <div className="footer">
                    <div className="footer-copyright-mil">
                        <h7 id="src"> Information Sourced from the Center for Disease Control and The World Health Organization</h7>
                        <br></br>
                        <h8 id="cop"> &copy; 2020 Copyright: Mushroom</h8>
                    </div>
                </div>
            </div>
        )
    }
}
export default MilestonesHome;