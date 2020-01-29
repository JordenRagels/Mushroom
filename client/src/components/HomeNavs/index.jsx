import React from "react"
import { Link } from 'react-router-dom';
import './homenavs.css'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function HomeNavs() {

    return (
        <div className="Homenav">
            <h1 className="title">Mushroom</h1>
            <Navbar expand="lg">
            <NavDropdown title="Milestones"  id="collasible-nav-dropdown">
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
                <NavDropdown.Item href="/weightCalc">Weight Percentile Calculator</NavDropdown.Item>
                <NavDropdown.Item href="/lengthCalc">Length Percentile Calculator</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Parent Resources" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/doctorSearch">Find a Pediatrician</NavDropdown.Item>
                <NavDropdown.Item href="/meditation">Meditation</NavDropdown.Item>
            </NavDropdown>
            </Navbar>
        </div>
    )
}

export default HomeNavs;