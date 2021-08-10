import { MDBRow, MDBAnimation } from "mdbreact"
import './landing.css'
const Landing = () => {
    return (
        <div className='container-fluid landingDiv'>
            <div className='container' id='landing'>
                <MDBRow>
                    <MDBAnimation type="fadeIn" delay=".5s" className="text-center" data-mdb-animation-start="onHover">

                        <div className='col-md-6 col-sm-12 landingContent'>
                            <p style={{ fontSize: '20pt' }}> Hi, I'm Asaf!<br />
                                I'm a <b>Front End Developer</b> who specializes in <br />
                                <span className='font-italic'>React, JavaScript, Css</span> and more..<br />
                                {/* Find details about my Websites, Skiils and Experience below */}
                            </p>
                        </div>
                    </MDBAnimation>
                    <MDBAnimation type="fadeIn" delay="3.5s" className="text-center" data-mdb-animation-start="onHover">

                        <img className='col-md-6 col-sm-12 landingImg' src="img/Asaf2.png" alt='Asaf' />
                    </MDBAnimation>
                    {/* <MDBAnimation type="fadeOut" delay="3.8s" className="text-center arrowDown" id="arrowDownA">
                            <img className='col-md-6 col-sm-12 landingImg' src="img/Asaf2.png" alt='Asaf' />
                        </MDBAnimation>
                        <MDBAnimation type="fadeIn" delay="2.5s" className="text-center arrowDown" id="arrowDownA">
                            <img className='col-md-6 col-sm-12 landingImg' src="img/Asaf.png" alt='Asaf' />
                        </MDBAnimation> */}

                    <MDBAnimation type="fadeIn" delay=".8s" className="text-center arrowDown" id="arrowDownA">
                        <a href="#websites">
                            <i className="arrow bounce text-center fas fa-angle-down"></i>
                        </a>
                    </MDBAnimation>
                </MDBRow>


            </div>

        </div >
    )
}
export default Landing