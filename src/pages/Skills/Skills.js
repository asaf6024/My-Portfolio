import React from 'react'
import technologies from '../../dist/obj/technologies'
import libraries from '../../dist/obj/libraries'
import tools from '../../dist/obj/tools'
import systems from '../../dist/obj/systems'
import './skills.css'
import Card from '../../components/Card/Card'
import { MDBRow } from 'mdbreact'
const Skiils = (props) => {

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
            <div className='container'>
                {
                    !props.isHome ?
                        <h1 className='text-center'>My Skills</h1>
                        : <h2 className='display-h1 text-center'>My Skills</h2>
                }
                <hr />
                <div classNameName="showcase-content">
                    <div>
                        {/* <h1>Asaf Almog</h1> */}
                        <h3 className='text-center'>Web development</h3>
                        <MDBRow className='col-sm-12'>
                            {loadTechnologies()}
                        </MDBRow>
                        <hr />
                        <h3 className='text-center'>Web libraries</h3>
                        <MDBRow className='col-sm-12'>
                            {loadLibraries()}
                        </MDBRow>
                        <hr />
                        <h3 className='text-center'> Tools & Technologies</h3>
                        <MDBRow className='col-sm-12'>
                            {loadTools()}
                        </MDBRow>
                        <hr />
                        <h3 className='text-center'> Operating systems</h3>
                        <MDBRow className='col-sm-12'>
                            {loadSystems()}
                        </MDBRow>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skiils