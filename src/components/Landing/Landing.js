import React, { useState } from "react"
import { MDBRow, MDBAnimation } from "mdbreact"
import './landing.css'
const Landing = (props) => {
    const [startText, setStartText] = useState(`Let's Start`)
    const [display, setDisplay] = useState(true)

    return (
        <div className='container-fluid landingDiv'>
            <div className='container' id='landing'>
                <MDBRow>
                    <div className='col-md-6 col-sm-12 landingContent'>
                        <p style={{ fontSize: '20pt' }}>
                            <MDBAnimation type="fadeIn" delay=".5s" className="text-center" data-mdb-animation-start="onHover">

                                Hi, I'm Asaf!<br />
                            </MDBAnimation>
                            <MDBAnimation type="fadeInLeft" delay="2s" className="text-center" data-mdb-animation-start="onHover">
                                I'm a <b>Front End Developer</b> that specializes in <br />
                                <span className='font-italic'>React, JavaScript, Css</span> and more..<br />
                                {/* Find details about my Websites, Skiils and Experience below */}
                            </MDBAnimation>

                        </p>
                    </div>
                    <MDBAnimation type="fadeIn" delay="5s" className="text-center landingImgDiv" data-mdb-animation-start="onHover">

                        <img className='col-md-6 col-sm-12 landingImg' src="img/Asaf2.png" alt='Asaf' />
                    </MDBAnimation>
                    {/* <MDBAnimation type="fadeOut" delay="3.8s" className="text-center arrowDown" id="arrowDownA">
                            <img className='col-md-6 col-sm-12 landingImg' src="img/Asaf2.png" alt='Asaf' />
                        </MDBAnimation>
                        <MDBAnimation type="fadeIn" delay="2.5s" className="text-center arrowDown" id="arrowDownA">
                            <img className='col-md-6 col-sm-12 landingImg' src="img/Asaf.png" alt='Asaf' />
                        </MDBAnimation> */}


                    <MDBAnimation type="fadeIn" delay="5.5s" className="text-center arrowDown" id="arrowDownA">
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