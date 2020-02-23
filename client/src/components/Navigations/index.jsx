import React from "react"
import { Link } from 'react-router-dom'
import './navigations.css'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from './logo.jpg'
import {GiMushroomGills, GiMushroom} from "react-icons/gi"
function NavigationsComponent() {
  return (
    <div className="navB">
      <Navbar expand="lg">
        <Navbar.Brand href="/"> <GiMushroom size="50px" />Mushroom  </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
              <NavDropdown.Item href="/milestoneshome">Milestones</NavDropdown.Item>
              <NavDropdown.Item href="/activitieshome">Activities</NavDropdown.Item>
              <NavDropdown.Item href="/parentshome">Parent Resources</NavDropdown.Item>
              <NavDropdown.Item href="/emergency">Emergency</NavDropdown.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export const Navigations = React.memo(NavigationsComponent);