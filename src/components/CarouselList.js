import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { MDBCol, MDBCard, MDBCardBody } from "mdbreact";

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
                <img className='myImageInCarousel' src={website.src} />
                <div className='carouselData text-center'>
                    <button id='carouelRight' className="btn myBtn"
                        onClick={index => setDisplay(index)}
                    >
                        <i className="fas fa-info"></i>

                    </button>
                    <MDBCard className='cardOfWebsite'>
                        <MDBCardBody>
                            <table>
                                <tr>
                                    <td colSpan='2'>
                                        <h2 className='text-center'>{website.name}</h2>
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

                                    <td>
                                        <h2>GitHub</h2>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <ul>
                                            {website.technologies.map((element, index) => {
                                                return <li className='technologiesLi' key={index}>{element}</li>
                                            })}
                                        </ul>
                                    </td>
                                    <td>

                                        {
                                            website.github != null ?
                                                <h3 className='text-center'>
                                                    <a id='githubFont' href={website.github} target='_blank' title={website.github}>
                                                        <i className="fab fa-github fa-2x"></i>
                                                    </a>
                                                </h3>


                                                :
                                                <h3 className='text-center'>
                                                    <a id='githubFont' href={website.github} target='_blank' title={`Not allowed`}>
                                                        <i style={{ cursor: 'not-allowed' }} className="fab fa-github fa-2x"></i>
                                                    </a>
                                                </h3>
                                        }
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan='2'>
                                        <hr className='skillsHr' />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan='4'>
                                        <a className='btn myBtn'
                                            href={website.url} title={website.url} target='_blank'>Open
                                            <i className="fas fa-angle-double-right"></i>
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </MDBCardBody>
                    </MDBCard>
                </div>

            </div >

        )
    })

    return (
        <Carousel className='col-sm-12 text-center'>
            {/* <div> */}
            {/* <img src="assets/1.jpeg" />
                <p className="legend">Legend 1</p>
            </div> */}
            {loadWebsites()}

            {/* {loadWImages()} */}
            {/* <div>
                <img src="assets/3.jpeg" />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img src="assets/3.jpeg" />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img src="assets/3.jpeg" />
                <p className="legend">Legend 3</p>
            </div> */}
        </Carousel>
    );
}
export default CarouselList

