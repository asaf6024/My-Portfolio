import React from 'react'
import { Carousel } from 'react-bootstrap'
// import myImage from '../../dist/img/react.png'
import './myCarousel.css'

const MyCarousel = (props) => {

    const loadData = () => props.myObject.map(item => {
        { console.log("item", item) }
        return (

            <Carousel.Item interval={1000} className='col-sm-12 text-center' key={item.id}>
                <a href={item.url} title={item.url} target='_blank'>
                    <img
                        className="d-block w-5 col-sm-3"
                        src={item.src}
                        alt="First slide"
                    />
                </a>
                <br />
                <Carousel.Caption className='col-sm-12 text-center'>
                    <h3 className='text-center'>{item.name}</h3>
                </Carousel.Caption>
            </Carousel.Item>
        )
    })
    return (
        <Carousel>
            {loadData()}
        </Carousel>
    )
}
export default MyCarousel