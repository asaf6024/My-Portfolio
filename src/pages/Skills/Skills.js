import React, { useState } from 'react'
import technologies from '../../dist/obj/technologies'
import libraries from '../../dist/obj/libraries'
import tools from '../../dist/obj/tools'
import systems from '../../dist/obj/systems'
import './skills.css'
import Card from '../../components/Card/Card'
import { MDBRow, MDBCollapse, MDBAnimation } from 'mdbreact'

const Skiils = (props) => {
    const [collapseID, setICollapseID] = useState("")
    const [arrowIcon, setArrowIcon] = useState("fas fa-hand-point-down")
    const [arrowIcon2, setArrowIcon2] = useState("fas fa-hand-point-down")
    const [arrowIcon3, setArrowIcon3] = useState("fas fa-hand-point-down")

    const toggleCollapse = newCollapseID => () => {
        if (collapseID !== newCollapseID) {
            document.getElementById(newCollapseID).style.fontWeight = 'bold'
            document.getElementById('basicCollapse2').style.fontWeight = 'initial'
            document.getElementById('basicCollapse3').style.fontWeight = 'initial'
            setArrowIcon("fas fa-hand-point-up")
            setArrowIcon2("fas fa-hand-point-down")
            setArrowIcon3("fas fa-hand-point-down")
            setICollapseID(newCollapseID)
        }
        else {
            setArrowIcon("fas fa-hand-point-down")
            setICollapseID(false)
            document.getElementById(newCollapseID).style.fontWeight = 'initial'

        }
    }

    const toggleCollapse2 = newCollapseID => () => {
        if (collapseID !== newCollapseID) {
            document.getElementById(newCollapseID).style.fontWeight = 'bold'
            document.getElementById('basicCollapse1').style.fontWeight = 'initial'
            document.getElementById('basicCollapse3').style.fontWeight = 'initial'
            setArrowIcon2("fas fa-hand-point-up")
            setArrowIcon("fas fa-hand-point-down")
            setArrowIcon3("fas fa-hand-point-down")
            setICollapseID(newCollapseID)

        }
        else {
            setArrowIcon2("fas fa-hand-point-down")
            setICollapseID(false)
            document.getElementById(newCollapseID).style.fontWeight = 'initial'
        }
    }
    const toggleCollapse3 = newCollapseID => () => {
        if (collapseID !== newCollapseID) {
            document.getElementById(newCollapseID).style.fontWeight = 'bold'
            document.getElementById('basicCollapse1').style.fontWeight = 'initial'
            document.getElementById('basicCollapse2').style.fontWeight = 'initial'
            setArrowIcon3("fas fa-hand-point-up")
            setArrowIcon("fas fa-hand-point-down")
            setArrowIcon2("fas fa-hand-point-down")
            setICollapseID(newCollapseID)
        }
        else {
            document.getElementById(newCollapseID).style.fontWeight = 'initial'
            setArrowIcon3("fas fa-hand-point-down")
            setICollapseID(false)
        }
    }

    const loadTechnologies = () => technologies.map(technology => {
        return (
            <Card
                name={technology.name}
                src={technology.src}
            />
        )
    })
    const loadLibraries = () => libraries.map(library => {
        return (
            <Card
                name={library.name}
                src={library.src}
            />
        )
    })
    const loadTools = () => tools.map(tool => {
        return (
            <Card
                name={tool.name}
                src={tool.src}
            />
        )
    })
    const loadSystems = () => systems.map(system => {
        return (
            <Card
                col='col-sm-6'
                name={system.name}
                src={system.src}
            />
        )
    })
    return (
        <div className='container-fluid'>
            <div className='container' id='skiils'>
                {
                    !props.isHome ?
                        <h1 className='text-center'>My Skills</h1>
                        : <h2 className='display-h1 text-center'>My Skills</h2>
                }
                <hr className='skillsHr' />
                <div classNameName="showcase-content">
                    <div>
                        {/* <h1>Asaf Almog</h1> */}

                        <h3 className='text-center'>Web development</h3>
                        <MDBRow className='col-sm-12'>
                            {loadTechnologies()}
                        </MDBRow>
                        <hr className='skillsHr' />
                        <MDBRow className='col-sm-12'>
                            <div className='col-sm-4'>
                                <h3 className='text-center' id='basicCollapse1'>Web libraries</h3>
                                <h3 onClick={toggleCollapse("basicCollapse1")} className='text-center' style={{ cursor: 'pointer' }}>
                                    <i className={arrowIcon} style={{ display: 'inline-block' }} title='Click'></i>
                                </h3>
                            </div>

                            <div className='col-sm-4'>
                                <h3 className='text-center' id='basicCollapse2'> Tools & Technologies</h3>
                                <h4 onClick={toggleCollapse2("basicCollapse2")} className='text-center' style={{ cursor: 'pointer' }}>
                                    <i className={arrowIcon2} style={{ display: 'inline-block' }} title='Click'></i>
                                </h4>
                            </div>
                            <div className='col-sm-4'>
                                <h3 className='text-center' id='basicCollapse3'> Operating systems</h3>
                                <h4 onClick={toggleCollapse3("basicCollapse3")} className='text-center' style={{ cursor: 'pointer' }}>
                                    <i className={arrowIcon3} style={{ display: 'inline-block' }} title='Click'></i>
                                </h4>

                            </div>

                            {/* <hr className='skillsHr' />
                        <h3 className='text-center'>Web libraries</h3> */}

                            {/* <h4 onClick={toggleCollapse("basicCollapse1")} className='text-center' style={{ cursor: 'pointer' }}>
                            <i className={arrowIcon} style={{ display: 'inline-block' }}></i>
                            <> */}
                            <MDBCollapse id="basicCollapse1" isOpen={collapseID}>
                                <MDBRow className='col-sm-12'>
                                    {loadLibraries()}
                                </MDBRow>
                            </MDBCollapse>
                            {/* </>
                        </h4> */}


                            {/* <hr className='skillsHr' />
                        <h3 className='text-center'> Tools & Technologies</h3> */}
                            {/* <h4 onClick={toggleCollapse2("basicCollapse2")} className='text-center' style={{ cursor: 'pointer' }}>
                            <i className={arrowIcon2} style={{ display: 'inline-block' }}></i>
                            <> */}
                            <MDBCollapse id="basicCollapse2" isOpen={collapseID}>
                                <MDBRow className='col-sm-12'>
                                    {loadTools()}
                                </MDBRow>
                            </MDBCollapse>
                            {/* </>
                        </h4> */}


                            {/* <hr className='skillsHr' />
                        <h3 className='text-center'> Operating systems</h3> */}
                            {/* <h4 onClick={toggleCollapse3("basicCollapse3")} className='text-center' style={{ cursor: 'pointer' }}>
                            <i className={arrowIcon3} style={{ display: 'inline-block' }}></i>
                            <> */}
                            <MDBCollapse id="basicCollapse3" isOpen={collapseID}>
                                <MDBRow className='col-sm-12'>
                                    {loadSystems()}
                                </MDBRow>
                            </MDBCollapse>
                            {/* </>
                        </h4> */}
                        </MDBRow>
                    </div>
                </div>
            </div >
            <MDBAnimation type="fadeIn" delay=".8s" className="text-center arrowDown" id="arrowDownc">
                <a href="#experience">
                    <i className="arrow bounce text-center fas fa-angle-down"></i>
                </a>
            </MDBAnimation>
        </div >
    )
}
export default Skiils