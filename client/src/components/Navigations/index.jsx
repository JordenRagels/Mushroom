import React from "react"
import { Link } from 'react-router-dom'

function NavigationsComponent() {
    return (
        <nav className="navbar navbar-light bg-dark">
                <ul className="nav">
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
                </ul>
            }
        </nav>
    )
}

export const Navigations = React.memo(NavigationsComponent);