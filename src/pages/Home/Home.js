import React, { useEffect } from 'react'
import About from '../Experience/Experience'
import Skiils from '../Skills/Skills'
import Websites from '../Websites/Websites'
import Landing from '../../components/Landing/Landing'

const Home = () => {
    useEffect(() => {

    })
    return (
        <div>
            <div className='text-center'>
            </div>
            <Landing />
            <hr />
            <About isHome={true} />
            <hr />
            <Skiils isHome={true} />
            <hr />
            <Websites isHome={true} />

        </div>
    )
}
export default Home