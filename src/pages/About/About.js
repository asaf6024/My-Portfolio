import React from 'react'
import './about.css'
import { MDBRow } from 'mdbreact'
const About = (props) => {

    return (
        <div className='container-fluid'>
            <div className='container'>
                <div className='col-sm-12 text-center'>
                    {
                        !props.isHome ?
                            <h1 className>About Me</h1>
                            : <h2 className='display-h1'>About Me</h2>
                    }

                    <div className="showcase-content col-sm-12 ">
                        <div className='col-lg-6 col-sm-12'>

                            <div>
                                <p style={{ fontSize: '20pt' }}> Hi, I'm Asaf !<br />
                                    I am a Front End Developer who specified in <span className='font-otalic'>React, JavaScript</span> and more..<br />
                                    Check out about my Experience, Websites, Skiils in this website
                                </p>
                            </div>
                            <h3 className="my-1">My Experience:</h3>
                            <ul>
                                <li><strong>2020-2021 - Personal Projects</strong></li>
                                <span>
                                    Develop Websites of React, JavaScript, Sass
                                </span>
                                <li> <strong>2018-2020 - Software Implementation & Front End Developer at <a
                                    title='https://www.eventact.com/' href='https://www.eventact.com/' target="_blank">Eventact
                                </a>.</strong></li>
                                <span>
                                    Develop Websites of React, JavaScript, Sass
                                </span>
                                <li> <strong>2017-2018 - Israel support engineer at <a
                                    title='https://www.liveu.tv/' href='https://www.liveu.tv/' target="_blank">LiveU
                                </a>.</strong></li>
                                {/* <span>
                                Develop Websites of React, JavaScript, Sass
                            </span> */}

                            </ul>

                        </div>
                        <img className='col-lg-6 col-sm-12' src="img/Asaf.jpeg" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About