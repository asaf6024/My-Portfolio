import React, { useState } from 'react'
import { Navbar, Container, Nav, NavDropdown, NavItem } from 'react-bootstrap'
// import { a } from "react-router-dom";
import './nav.css'
const NavPage = () => {
    const [active, setACtive] = useState('activea')
    const setActive = (e) => {

        // document.getElementsByClassName('collapse')[0].classList.remove('show')
        // document.querySelectorAll('.activea').forEach(e => e.classList.remove('activea'));
        // e.target.classList.add('activea')
        // setACtive('')
    }

    return (
        <Navbar variant="dark" bg="dark" expand="lg" className='col-sm-12'>
            {/* <Container > */}
            {/* <Navbar.Brand href="/" className='col-sm-1'>My Portfolio</Navbar.Brand> */}
            <Navbar.Brand href="/" className='col-sm-1'>Asaf Almog</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-dark-example" />
            <Navbar.Collapse id="navbar-dark-example" className='col-sm-9 text-center'>
                <Nav >
                    <NavItem className='activeNav' onClick={(e) => setActive(e)}>
                        <a id='landingNavItem' href='/#landing'> Home</a>
                    </NavItem>
                    <hr className='mobileHr' />
                    <NavItem onClick={(e) => setActive(e)}>
                        <a id='portfolioNavItem' href='#websites'> My Portfolio</a>
                    </NavItem>
                    <hr className='mobileHr' />
                    <NavItem onClick={(e) => setActive(e)}>
                        <a id='skillsNavItem' href='#skiils'> Skiils</a>
                    </NavItem>
                    <hr className='mobileHr' />
                    <NavItem onClick={(e) => setActive(e)}>
                        <a id='experienceNavItem' href='#experience'> Experience</a>
                    </NavItem>
                    {/* <NavDropdown
                        id="nav-dropdown-dark-example"
                        title="Dropdown"
                        menuVariant="dark"
                    >
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated a</NavDropdown.Item>
                    </NavDropdown> */}

                </Nav>
            </Navbar.Collapse>
            <Navbar.Brand className='col-sm-2'>
                <a href="tel:972502820405" className='col-sm-1 navFonts' title='mobile'>
                    <i className="fas fa-phone"></i>
                </a>
                <a href="mailto:972502820405" className='col-sm-1 navFonts' title='email'>
                    <i className="far fa-envelope"></i>
                </a>
                <a href="https://github.com/asaf6024" className='navFonts' target='_blank' title='github' className='col-sm-1'>
                    <i className="fab fa-github"></i>
                </a>
            </Navbar.Brand>
            {/* </Container> */}
        </Navbar >
    )
}
export default NavPage