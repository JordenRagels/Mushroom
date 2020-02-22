import React, { Component } from 'react';
import { Navigations } from '../../../components/Navigations'

class LengthCalculator extends React.Component {
    render() {
        return (
            <div className="content">
                <div>
                    <Navigations />
                    <div className="heading">
                        <h2>Comming soon!</h2>
                    </div>
                    <a href="https://reference.medscape.com/calculator/infant-weight-age-percentile">Link to CDC's Calculator</a>
                </div>
                <div className="footer">
                    <footer>
                        <div className="footer-head">
                            <h5>Mushroom</h5>
                        </div>
                        <div className="footer-info">
                            <h6> Information Sourced from the Center for Disease Control and The World Health Organization</h6>
                        </div>
                        <div className="footer-copyright">
                            <h6 > &copy; 2020 Copyright: Mushroom</h6>
                        </div>
                    </footer>
                </div>
            </div>
        )
    }
}
export default LengthCalculator;