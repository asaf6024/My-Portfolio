import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { MDBAnimation, MDBCard, MDBCardBody } from "mdbreact";
import './myCarousel.css'

const CarouselList = (props) => {
    const [isDisplayed, setIsDisplayed] = useState(false)

    const setDisplay = () => {
        if (!isDisplayed) {
            document.querySelectorAll(".cardOfWebsite").forEach(a => a.style.display = "initial")
            setIsDisplayed(true)
        }
        else {
            document.querySelectorAll(".cardOfWebsite").forEach(a => a.style.display = "none")
            setIsDisplayed(false)
        }
    }
    const loadWebsites = () => props.myObject.map((website, index) => {
        return (
            <div className='carouselItem'>
                {/* <a href={website.url} target='_blank'> */}
                {/* <a href={website.url} title={website.name} target='_blank' > */}
                <img className='myImageInCarousel animation fadeInLeft' src={website.src} alt={website.name} />
                <MDBAnimation type="bounce" delay=".3s" className="mdbAnimationButton bounce infinite">
                    <a className='btn myBtn arrow bounceButton'
                        href={website.url} title={website.url} target='_blank'>Open&nbsp;
                        <i className="fas fa-angle-double-right"></i>
                    </a>
                </MDBAnimation>

                {/* </a> */}
                {/* </a> */}
                <div className='carouselData text-center animation fadeInRight'>
                    <button id='carouelRight' className="btn myBtn"
                        onClick={index => setDisplay(index)}
                    >
                        <i className="fas fa-info"></i>

                    </button>
                    <MDBCard className='cardOfWebsite' style={{ background: website.background }}>
                        <MDBCardBody>
                            <table>
                                <tr>
                                    <td colSpan='2'>
                                        <h2 className='text-center font-weight-bold'>{website.name}</h2>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan='2'>
                                        <hr className='skillsHr' />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan='2'>
                                        <h5 className='text-center'>{website.year}, {website.frame}</h5>
                                        {
                                            website.description != null ?
                                                <p>{website.description}</p>
                                                : ''
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan='2'>
                                        <hr className='skillsHr' />
                                    </td>
                                </tr>
                                <tr>
                                    <td className='col-sm-8'>
                                        <h2>Technologies & Tools</h2>

                                    </td>
                                    {
                                        website.github != null ?
                                            <td>
                                                <h2>Source Code</h2>
                                            </td>
                                            : ''
                                    }
                                    {
                                        website.login != null ?
                                            <td>
                                                <h2>Login</h2>
                                            </td>
                                            : ''
                                    }

                                </tr>
                                <tr>
                                    <td>
                                        <ul>
                                            {website.technologies.map((element, index) => {
                                                return <li className='technologiesLi font-italic font-weight-bold' key={index}>{element}</li>
                                            })}
                                        </ul>
                                    </td>

                                    {
                                        website.github != null ?
                                            <>
                                                <td>
                                                    <h3 className='text-center'>
                                                        <a id='githubFont' href={website.github} target='_blank' title={website.github}>
                                                            <i className="fab fa-github fa-2x"></i>
                                                        </a>
                                                    </h3>
                                                </td>
                                            </>
                                            : ''
                                    }
                                    {
                                        website.login != null ?
                                            <>
                                                <td>
                                                    <img className='qrCodeImage' src={website.login.qrCode} alt='QR Code' />
                                                    <ul>
                                                        <li className='technologiesLi'>User Name: {website.login.userName}</li>
                                                        <li className='technologiesLi'>Password: {website.login.password}</li>
                                                    </ul>
                                                </td>
                                            </>
                                            : ''
                                    }

                                </tr>
                                {/* <tr>
                                    <td colSpan='2'>
                                        <hr className='skillsHr' />
                                    </td>
                                </tr> */}
                                {/* <tr>
                                    <td colSpan='4'>
                                        <a className='btn myBtn'
                                            href={website.url} title={website.url} target='_blank'>Open
                                            <i className="fas fa-angle-double-right"></i>
                                        </a>
                                    </td>
                                </tr> */}
                            </table>
                        </MDBCardBody>
                    </MDBCard>
                </div>

            </div >

        )
    })

    return (
        <Carousel className='col-sm-12 text-center'>
            {loadWebsites()}
        </Carousel>
    );
}
export default CarouselList

