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
        <MDBCol className={`${classOfCard} colOfImage`}

            style={{ display: 'inline-block' }}>
            <MDBCard style={{ margin: styleOfCard }}>
                <img id='cardImage' className="img-fluid" src={props.src} />
                <MDBCardBody className='cardOfTechnologies'>
                    <div className='titleDiv'>
                        <MDBCardTitle className='titleOfCard'>{props.name}</MDBCardTitle>
                        {/* <h3>{props.name}</h3> */}
                    </div>
                </MDBCardBody>
            </MDBCard>
        </MDBCol >
    )
}

export default Card;