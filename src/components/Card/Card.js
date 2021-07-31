import React, { useEffect, useState } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import './card.css'
const Card = (props) => {
    const [classOfCard, setClassOfCard] = useState('col-sm-6 col-md-3 col-lg-2')
    const [styleOfCard, setStyleOfCard] = useState('')

    useEffect(() => {
        if (props.col != undefined) {
            setClassOfCard(props.col)
            setStyleOfCard('auto')
        }

    })
    return (

        <div className={`myCard text-center${classOfCard}`}>
            <div className='cardImage'>
                <img className="img-fluid" src={props.src} alt={props.src} />
            </div>

            <p className="text-center font-italic">{props.name}</p>
        </div>
    )
}

export default Card;