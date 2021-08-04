import { MDBRow, MDBAnimation } from "mdbreact"
import './landing.css'
const Landing = () => {
    return (
        <div className='container-fluid landingDiv'>
            <div className='container' id='landing'>
                <MDBAnimation type="fadeIn" delay=".5s" className="text-center">
                    <MDBRow>
                        <div className='col-md-6 col-sm-12 landingContent'>
                            <p style={{ fontSize: '20pt' }}> Hi, I'm Asaf!<br />
                                I'm a <b>Front End Developer</b> who specializes in <br />
                                <span className='font-italic'>React, JavaScript, Css</span> and more..<br />
                                {/* Find details about my Websites, Skiils and Experience below */}
                            </p>
                        </div>
                        <img className='col-md-6 col-sm-12 landingImg' src="img/Asaf.jpeg" alt='Asaf' />
                        <MDBAnimation type="fadeIn" delay=".8s" className="text-center arrowDown" id="arrowDownA">
                            <a href="#websites">
                                <i className="arrow bounce text-center fas fa-angle-down"></i>
                            </a>
                        </MDBAnimation>
                    </MDBRow>
                </MDBAnimation>

            </div>

        </div>
    )
}
export default Landing