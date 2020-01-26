import React from "react"
import { Link } from 'react-router-dom';

function HomeNavs() {
    return (
        <nav className="navbar">
                <ul className="nav">
                <li className="nav-item">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/cognitive" className="nav-link">
                            Cognitive Milestones
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/motor" className="nav-link">
                            Motor Milestones
						</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/social" className="nav-link">
                            Social Milestones
						</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/verbal" className="nav-link">
                            Verbal Milestones
						</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/percentile" className="nav-link">
                            Percentile Calculator
						</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/eating" className="nav-link">
                            Eating Chart
						</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/sleeping" className="nav-link">
                           Sleeping Chart
						</Link>
                    </li>
                </ul>
        </nav>
    )
}

export default HomeNavs;