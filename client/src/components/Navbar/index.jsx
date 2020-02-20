import React from "react"
import { Link } from 'react-router-dom'
import './navbar.css'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function NavBarComponent({ loggedIn, _logout }) {
    return (
     
        <Nav className="navbar">
            {loggedIn ?
                <ul className="nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="nav-link" onClick={_logout}>
                            Logout
                        </Link>
                    </li>
                </ul>
                :
                <ul className="nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                           Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">
                            Login
						</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/signup" className="nav-link">
                            Sign Up
						</Link>
                    </li>
                    <li>
                    <Navbar expand="lg">
                <NavDropdown title="Milestones" id="collasible-nav-dropdown">
                    <NavDropdown.Item className='item' href="/cognitive">Cognitive</NavDropdown.Item>
                    <NavDropdown.Item href="/motor">Motor</NavDropdown.Item>
                    <NavDropdown.Item href="/social">Social</NavDropdown.Item>
                    <NavDropdown.Item href="/verbal">Verbal</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Sleeping & Eating Recomendations" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/sleeping">Sleeping</NavDropdown.Item>
                    <NavDropdown.Item href="/eating">Eating</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Percentile Calculators" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/percentile">Weight Percentile Calculator</NavDropdown.Item>
                    <NavDropdown.Item href="/percentile">Length Percentile Calculator</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Parent Resources" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/doctorSearch">Find a Pediatrician</NavDropdown.Item>
                    <NavDropdown.Item href="/meditation">Meditation</NavDropdown.Item>
                </NavDropdown>
            </Navbar>
                    </li>
                </ul>
            }
        </Nav>
    )
}

export const NavBar = React.memo(NavBarComponent);