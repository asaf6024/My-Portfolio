import MyCarousel from '../../components/MyCarousel/MyCarousel'
import CarouselList from '../../components/CarouselList'


import React from 'react'
import websites from '../../dist/obj/websites'
import './websites.css'
const Websites = (props) => {

    return (
        <div className='container-fluid'>
            <div className='container'>
                <div className='col-sm-12 text-center'>
                    {
                        !props.isHome ?
                            <h1 className>My Websites</h1>
                            : <h2 className='display-h1'>My Portfolio</h2>
                    }

                    <CarouselList
                        myObject={websites}
                    />
                    {/* <MyCarousel myObject={websites} /> */}
                </div>
            </div>
        </div>
    )
}
export default Websites