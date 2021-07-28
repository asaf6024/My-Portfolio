import React, { useState } from 'react'
import { Navbar, Container, Nav, NavDropdown, NavItem } from 'react-bootstrap'
import { Link } from "react-router-dom";
import './nav.css'
const NavPage = () => {
    const [active, setACtive] = useState('activeLink')
    const setActive = (e) => {

        document.querySelectorAll('.activeLink').forEach(e => e.classList.remove('activeLink'));
        e.target.classList.add('activeLink')
        setACtive('')
    }

    return (
        <Navbar variant="dark" bg="dark" expand="lg" className='col-sm-12'>
            {/* <Container > */}
            {/* <Navbar.Brand href="/" className='col-sm-1'>My Portfolio</Navbar.Brand> */}
            <Navbar.Brand href="/" className='col-sm-1'>Asaf Almog</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-dark-example" />
            <Navbar.Collapse id="navbar-dark-example" className='col-sm-9 text-center'>
                <Nav >
                    <NavItem className={active} onClick={(e) => setActive(e)}>
                        <Link to='/'> Home</Link>
                    </NavItem>
                    <hr className='mobileHr' />
                    <NavItem onClick={(e) => setActive(e)}>
                        <Link to='/about'> My Experience</Link>
                    </NavItem>
                    <hr className='mobileHr' />
                    <NavItem onClick={(e) => setActive(e)}>
                        <Link to='/websites'> My Portfolio</Link>
                    </NavItem>
                    <hr className='mobileHr' />
                    <NavItem onClick={(e) => setActive(e)}>
                        <Link to='/skills'> Skiils</Link>
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
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}

                </Nav>
            </Navbar.Collapse>
            <Navbar.Brand href="/" className='col-sm-2'>
                <a href="tel:972502820405" className='col-sm-1 navFonts'>
                    <i className="fas fa-phone"></i>
                </a>
                <a href="mailto:972502820405" className='col-sm-1'>
                    <i className="far fa-envelope"></i>
                </a>
            </Navbar.Brand>
            {/* </Container> */}
        </Navbar>
    )
}
export default NavPage