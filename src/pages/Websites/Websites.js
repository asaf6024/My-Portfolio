import CarouselList from '../../components/MyCarousel/CarouselList'
import MyCarousel from '../../components/MyCarousel/MyCarousel'
import React from 'react'
import websites from '../../dist/obj/websites'
import './websites.css'
import { MDBAnimation } from 'mdbreact'
const Websites = (props) => {

    return (
        <div className='container-fluid'>
            <MDBAnimation type="fadeIn" delay="1s" className="text-center" data-mdb-animation-start="onHover">
                <div className='container' id='websites'>
                    <div className='col-sm-12 text-center'>
                        {
                            !props.isHome ?
                                <h1 className='sectionHeadline'>My Websites</h1>
                                : <h2 className='display-h1 sectionHeadline'>My Portfolio</h2>
                        }
                        <br />
                        <CarouselList
                            myObject={websites}
                        />
                        {/* <MyCarousel
                        myObject={websites}
                    /> */}
                    </div>
                </div>
                <MDBAnimation type="fadeIn" delay=".8s" className="text-center arrowDown" id="arrowDownWebsites">
                    <a href="#skiils">
                        <i className="arrow bounce text-center fas fa-angle-down"
                            onClick={() => props.setDisplay('skills')}
                        ></i>
                    </a>
                </MDBAnimation>
            </MDBAnimation>

        </div>
    )
}
export default Websites