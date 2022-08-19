import React, { useState } from "react"
import { MDBRow, MDBAnimation } from "mdbreact"
import './landing.css'
const Landing = (props) => {
    const [startText, setStartText] = useState(`Let's Start`)
    const [display, setDisplay] = useState(true)

    return (
        <div className='container-fluid landingDiv'>
            <div className='container' id='landing'>
                <MDBRow className='rowOfLanding'>
                    <div className='col-md-6 col-sm-12 landingContent'>
                        <p style={{ fontSize: '20pt' }}>
                            <MDBAnimation type="fadeIn" delay=".5s" className="text-center" data-mdb-animation-start="onHover">

                                Hi, I'm Asaf!<br />
                            </MDBAnimation>
                            <MDBAnimation type="fadeInLeft" delay="1.5s" className="text-center" data-mdb-animation-start="onHover">
                                I'm a <b>Front End Developer.</b> <br /><br />
                                Well-versed in numerous programming languages including
                                <br />

                                <span className='font-italic'>React JS, Vue.js, JavaScript, Css</span> and more..<br />
                                {/* Find details about my Websites, Skiils and Experience below */}
                            </MDBAnimation>

                            <MDBAnimation type="fadeIn" delay="4.5s" className="text-center" data-mdb-animation-start="onHover">
                                <div className='caracteristics'>
                                    <div className='caracteristicsDivs'>
                                        <p>3 Years of <br />Experince</p>
                                        <i className="fas fa-briefcase fa-2x"></i>
                                    </div>
                                    <div className='caracteristicsDivs'>
                                        <p>Great<br /> Self-Learning</p>
                                        <i className="fas fa-book-reader fa-2x"></i>
                                    </div>
                                    <div className='caracteristicsDivs'>
                                        <p>A Team Player</p>
                                        <i className="far fa-handshake fa-2x"></i>
                                    </div>
                                    <div className='caracteristicsDivs'>
                                        <p>Willing to<br /> Work Hard</p>
                                        <i className="far fa-thumbs-up fa-2x"></i>
                                    </div>


                                </div>


                            </MDBAnimation>

                        </p>
                    </div>
                    <MDBAnimation type="fadeIn" delay="0.5s" className="text-center landingImgDiv" data-mdb-animation-start="onHover">

                        <img className='col-md-6 col-sm-12 landingImg' src="img/Asaf2.png" alt='Asaf' />
                    </MDBAnimation>
                    {/* <MDBAnimation type="fadeOut" delay="3.8s" className="text-center arrowDown" id="arrowDownA">
                            <img className='col-md-6 col-sm-12 landingImg' src="img/Asaf2.png" alt='Asaf' />
                        </MDBAnimation>
                        <MDBAnimation type="fadeIn" delay="2.5s" className="text-center arrowDown" id="arrowDownA">
                            <img className='col-md-6 col-sm-12 landingImg' src="img/Asaf.png" alt='Asaf' />
                        </MDBAnimation> */}


                    <MDBAnimation type="fadeIn" delay="6.5s" className="text-center arrowDown" id="arrowDownA">
                        <a href="#websites">
                            <i className="arrow bounce text-center fas fa-angle-down"
                                onClick={() => {
                                    props.setDisplay('websites')
                                    setStartText(``)
                                    setDisplay(false)
                                }}
                            ><h3>{startText}</h3>
                            </i>
                        </a>
                        {/* {
                            display ?
                                <a href="#websites">
                                    <i className="arrow bounce text-center fas fa-angle-down"
                                        onClick={() => {
                                            props.setDisplay('websites')
                                            setStartText(``)
                                            setDisplay(false)
                                        }}
                                    ><h3>{startText}</h3>
                                    </i>
                                </a>

                                :
                                <>
                                    <h3>{startText}</h3>
                                    <a href="tel:972502820405" className='col-sm-1 navFonts' title='mobile'>
                                        <i className="fas fa-phone"></i>
                                    </a>
                                    <a href="mailto:972502820405" className='col-sm-1 navFonts' title='email'>
                                        <i className="far fa-envelope"></i>
                                    </a>
                                </>
                        } */}


                    </MDBAnimation>
                </MDBRow>


            </div>

        </div >
    )
}
export default Landing