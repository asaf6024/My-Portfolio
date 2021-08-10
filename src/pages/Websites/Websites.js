import CarouselList from '../../components/MyCarousel/CarouselList'
import MyCarousel from '../../components/MyCarousel/MyCarousel'
import React from 'react'
import websites from '../../dist/obj/websites'
import './websites.css'
import { MDBAnimation } from 'mdbreact'
const Websites = (props) => {

    return (
        <div className='container-fluid'>
            <div className='container' id='websites'>
                <div className='col-sm-12 text-center'>
                    {
                        !props.isHome ?
                            <h1 className>My Websites</h1>
                            : <h2 className='display-h1'>My Portfolio</h2>
                    }
                    <br /><br />
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
                    <i className="arrow bounce text-center fas fa-angle-down"></i>
                </a>
            </MDBAnimation>
        </div>
    )
}
export default Websites