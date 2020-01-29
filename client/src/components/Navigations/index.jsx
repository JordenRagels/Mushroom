import React from "react"
import { Link } from 'react-router-dom'
import './navigations.css'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from './logo.jpg'
function NavigationsComponent() {
  return (
    <div className="navB">
      <Navbar collapseOnSelect expand="lg"  variant="dark">
        <Navbar.Brand>Mushroom  </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Milestones" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/cognitive">Cognitive</NavDropdown.Item>
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
              <NavDropdown.Item href="/percentile">Length Percentile Calculator</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Parent Resources" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/">Find a Pediatrician</NavDropdown.Item>
              <NavDropdown.Item href="/meditation">Meditation</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export const Navigations = React.memo(NavigationsComponent);