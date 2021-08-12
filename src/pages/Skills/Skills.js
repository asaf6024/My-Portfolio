import React from 'react'
import technologies from '../../dist/obj/technologies'
import libraries from '../../dist/obj/libraries'
import tools from '../../dist/obj/tools'
import systems from '../../dist/obj/systems'
import './skills.css'
import Card from '../../components/Card/Card'
import { MDBRow, MDBCollapse, MDBAnimation } from 'mdbreact'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Skiils = (props) => {

    const renderNext = () => {
        props.setDisplay('renderSkills')
    }

    const loadTechnologies = () => technologies.map(technology => {
        return (
            <Card
                col='col-sm-4 col-md-3 col-lg-2'
                name={technology.name}
                src={technology.src}
            />
        )
    })
    const loadLibraries = () => libraries.map(library => {
        return (
            <Card
                col='col-sm-4 col-lg-3'
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
                col='col-sm-12 col-md-5 col-lg-5'
                name={system.name}
                src={system.src}
            />
        )
    })
    return (
        <div className='container-fluid'>
            <MDBAnimation type="fadeIn" delay="1s" className="text-center" data-mdb-animation-start="onHover">

                <div className='container' id='skiils'>
                    <div className='col-sm-12 text-center'>
                        {
                            !props.isHome ?
                                <h1 className='text-center'>My Skills</h1>
                                : <h2 className='display-h1 text-center sectionHeadline'>My Skills</h2>
                        }
                        {/* <hr className='skillsHr' />My Portfolio */}
                        <div className="showcase-content">
                            <div>
                                {/* <h1>Asaf Almog</h1> */}

                                <Tabs className='text-center'>
                                    <TabList>
                                        <Tab>Web development</Tab>
                                        <Tab>Web libraries</Tab>
                                        <Tab>Tools & Technologies</Tab>
                                        <Tab>Operating systems</Tab>
                                    </TabList>
                                    <br />
                                    <TabPanel>
                                        <MDBRow className='col-sm-12 skillItem animated fadeIn'>
                                            <h3 className='text-center'>Web development</h3>
                                            {loadTechnologies()}
                                        </MDBRow>
                                    </TabPanel>

                                    <TabPanel>
                                        <MDBRow className='col-sm-12 skillItem animated fadeInUp'>
                                            <h3 className='text-center'>Web libraries</h3>
                                            {loadLibraries()}
                                        </MDBRow>
                                    </TabPanel>

                                    <TabPanel>
                                        <MDBRow className='col-sm-12 skillItem animated fadeInLeft'>
                                            <h3 className='text-center'>  Tools & Technologies</h3>
                                            {loadTools()}
                                        </MDBRow>
                                    </TabPanel>

                                    <TabPanel>
                                        <MDBRow className='col-sm-12 skillItem animated fadeInRight'>
                                            <h3 className='text-center'> Operating systems</h3>
                                            {loadSystems()}
                                        </MDBRow>
                                    </TabPanel>
                                </Tabs>




                            </div>
                        </div>
                    </div>
                </div >
                <MDBAnimation type="fadeIn" delay=".8s" className="text-center arrowDown" id="arrowDownc">
                    <a href="#experience">
                        <i className="arrow bounce text-center fas fa-angle-down"
                            onClick={() => props.setDisplay('experience')}
                        ></i>
                    </a>
                </MDBAnimation>
            </MDBAnimation>
        </div >
    )
}
export default Skiils