import "./meditation.css";
import { Navigations } from '../../../components/Navigations/index';
import React from "react";
import PropTypes from "prop-types";
import { initAnimation } from "./basic-shape.js";

export default class Meditation extends React.Component {
    static defaultProps = {
        color: "lightBlue",
        size: 200,
        inhale: 4000,
        inhaleHold: 4000,
        exhale: 4000,
        exhaleHold: 4000
    };
    static propTypes = {
        size: PropTypes.number,
        color: PropTypes.string,
        inhale: PropTypes.number,
        inhaleHold: PropTypes.number,
        exhale: PropTypes.number,
        exhaleHold: PropTypes.number
    };

    componentDidMount() {
        initAnimation.bind(this)();
    }
    render() {
        let { size, color } = this.props;
        return (
            <div>
                <Navigations />
                <h4 className="af1">"I am confident and growing in my parenting role"</h4>
                <h4 className="af2">"I grow with my child each day"</h4>
                <h2>Breathe in Rhythm with the Circle</h2>

                <h4 className="af3">"I am grateful for the resources that <br/>continue to show up to help me be a great parent"</h4>
                <h4 className="af4">"I take the time I need to care for my own needs, <br/>doing this supports me in being a better parent"</h4>
                <div
                    style={{
                        margin: "auto",
                        borderRadius: size / 2 + "px",
                        width: size + "px",
                        height: size + "px",
                        border: `2px solid #042920`
                    }}
                >

                    <div id="meditation-circle"
                        ref="pacer"
                        style={{
                            ...this.props.style,
                            margin: "auto",
                            borderRadius: size / 2 + "px",
                            background: "#48665f",
                            width: size / 2,
                            height: size / 2
                        }}
                    />

                </div >
                <h4 className="af5">"I am creating positive, lifelong memories with my children"</h4>
                <h4 className="af6">"I am grateful for the opportunity to raise my child"</h4>
                <h4 className="af7">"Comparisons do not serve me, I notice when I compare myself to other parents and I quickly let them go"</h4>
                <div className="footer">
                    <div className="footer-copyright-med">
                        <h7 id="src"> "Information Sourced from the Center for Disease Control and The World Health Organization"</h7>
                        <br></br>
                        <h8 id="cop"> &copy; 2020 Copyright: Mushroom</h8>
                    </div>
                </div>

            </div>
        );
    }
}

