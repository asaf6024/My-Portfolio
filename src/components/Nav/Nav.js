import React, { useState, useEffect } from 'react'
import { Navbar, Container, Nav, NavItem } from 'react-bootstrap'
import { MDBAnimation, MDBTooltip } from 'mdbreact'
// import { a } from "react-router-dom";
import './nav.css'
const NavPage = (props) => {
    const [active, setACtive] = useState('activea')
    const [bgDark, setBgDark] = useState(`
    linear-gradient(
        90deg,
        rgba(83, 91, 170, 1) 0%,
        rgba(15, 36, 55, 1) 43%,
        rgba(0, 0, 0, 1) 100%,
        rgba(53, 70, 49, 0.2528361686471463) 100%
      )`)
    useEffect(() => {

        window.addEventListener("scroll", handleScroll);


        // if (window.scrollY > 20)
        //     document.getElementById('navBar').style.background = '#212529'
    })

    const handleScroll = () => {
        if (window.scrollY > 40) {
            setBgDark('#212529')
            // document.getElementById('navBar').style.background = '#212529'
        } else {
            setBgDark(`
            linear-gradient(
                90deg,
                rgba(83, 91, 170, 1) 0%,
                rgba(15, 36, 55, 1) 43%,
                rgba(0, 0, 0, 1) 100%,
                rgba(53, 70, 49, 0.2528361686471463) 100%
              )`)
        }
    };

    const setActive = (e) => {

        // document.getElementsByClassName('collapse')[0].classList.remove('show')
        // document.querySelectorAll('.activea').forEach(e => e.classList.remove('activea'));
        // e.target.classList.add('activea')
        // setACtive('')
    }

    return (
        <Navbar variant="dark" bg="dark" style={{ background: bgDark }} expand="lg" className='col-sm-12' id='navBar'>
            {/* <Container > */}
            <Navbar.Brand href="/" className='col-sm-1 navLogo'><img src='./img/navLogo.png' style={{ color: 'white' }}
                width='80'
            /></Navbar.Brand>
            <Navbar.Brand href="/" className='col-sm-1'>Asaf Almog</Navbar.Brand>

            <Navbar.Toggle aria-controls="navbar-dark-example" />
            <Navbar.Collapse id="navbar-dark-example" className='col-sm-8 text-center'>
                <Nav >
                    <NavItem className='activeNav' onClick={(e) => setActive(e)}>
                        <a id='landingNavItem' href='/#landing'> About Me</a>
                    </NavItem>
                    <hr className='mobileHr' />
                    <NavItem>
                        <a id='portfolioNavItem' className='animated fadeInRight' href='#websites' onClick={() => props.setFunction('websites')}> My Portfolio</a>
                    </NavItem>
                    <hr className='mobileHr' />
                    <NavItem onClick={(e) => setActive(e)}>
                        <a id='skillsNavItem' className='animated fadeInRight' href='#skiils'> Skiils</a>
                    </NavItem>
                    <hr className='mobileHr' />
                    <NavItem onClick={(e) => setActive(e)}>
                        <a id='experienceNavItem' className='animated fadeInRight' href='#experience'> Experience</a>
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
                <a href="mailto:asafalmog119@gmail.com" className='col-sm-1 navFonts' title='email'>
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