import React from 'react'
import './experience.css'
import { MDBCard, MDBAnimation, MDBCol } from 'mdbreact'
const Experience = (props) => {

    return (
        <div className='container-fluid'>
            <MDBAnimation type="fadeIn" delay=".5s" className="text-center">
                <div className='container' id='experience'>
                    <div className='col-sm-12 text-center'>
                        {/* <MDBRow>
                        <MDBCol>

                            <div className='cardOfMe'> */}
                        {
                            !props.isHome ?
                                <h1 className>My Experience</h1>
                                : <h2 className='display-h1'>My Experience</h2>
                        }
                        <br /><br />

                        <i className="fas fa-laptop-code fa-5x col-sm-12"></i>
                        <br /><br /> <br /><br />
                        <div className="showcase-content col-sm-12 ">

                            <ul>
                                <li><strong>2020-2021 - Personal Projects</strong></li>
                                <span>
                                    Develop Websites of React, JavaScript, Sass
                                </span>
                                <br /> <br /> <br />
                                <li> <strong>2018-2020 - Software Implementation & Front End Developer at <a
                                    title='https://www.eventact.com/' href='https://www.eventact.com/' target="_blank">Eventact
                                </a>.</strong></li>
                                <span>
                                    Develop Websites of React, JavaScript, Sass
                                </span>
                                <br /> <br /> <br />
                                <li> <strong>2017-2018 - Israel support engineer at <a
                                    title='https://www.liveu.tv/' href='https://www.liveu.tv/' target="_blank">LiveU
                                </a>.</strong></li>
                                {/* <span>
                                Develop Websites of React, JavaScript, Sass
                            </span> */}

                            </ul>
                        </div>
                    </div>
                    <MDBAnimation type="fadeIn" delay=".8s" className="text-center arrowDown" id="arrowDownB">
                        <a href="#skiils">
                            <i className="arrow bounce text-center fas fa-angle-down"></i>
                        </a>
                    </MDBAnimation>
                    {/* </MDBCol>
                    </MDBRow> */}

                    {/* </div> */}
                </div>
            </MDBAnimation>
        </div>
    )
}
export default Experience