import React from "react"
import { Link } from 'react-router-dom';
import './homenavs.css'
import { NavBar } from "../Navbar"
import { Navbar, Nav, NavDropdown, NavItem } from 'react-bootstrap';

function HomeNavs() {

    return (
   
        <div className="Homenav">    
         <div>
            <NavBar />
        </div>
            <h1 className="title">Mushroom</h1>
            <Navbar expand="lg">
                <NavDropdown title="Milestones" id="collasible-nav-dropdown">
                    <NavDropdown.Item className='item' href="/cognitive">Cognitive</NavDropdown.Item>
                    <NavDropdown.Item className='item' href="/motor">Motor</NavDropdown.Item>
                    <NavDropdown.Item className='item' href="/social">Social</NavDropdown.Item>
                    <NavDropdown.Item className='item' href="/verbal">Verbal</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Sleeping & Eating Recomendations" id="collasible-nav-dropdown">
                    <NavDropdown.Item className='item' href="/sleeping">Sleeping</NavDropdown.Item>
                    <NavDropdown.Item className='item' href="/eating">Eating</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Percentile Calculators" id="collasible-nav-dropdown">
                    <NavDropdown.Item className='item' href="/percentile">Weight Percentile <br></br>Calculator</NavDropdown.Item>
                    <NavDropdown.Item className='item' href="/percentile">Length Percentile Calculator</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Parent Resources" id="collasible-nav-dropdown">
                    <NavDropdown.Item className='item' href="/doctorSearch">Find a Pediatrician</NavDropdown.Item>
                    <NavDropdown.Item className='item' href="/meditation">Meditation</NavDropdown.Item>
                </NavDropdown>
            </Navbar>
            <footer>
                Mushroom
                <div className="Srcs">
                    Information Sourced from: The World Health Organization & The Center for Disease Contorl
                </div>
                <br></br>
            </footer>
        </div>
  
    )
}

export default HomeNavs;