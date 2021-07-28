import React from 'react'
import About from '../Experience/Experience'
import Skiils from '../Skills/Skills'
import Websites from '../Websites/Websites'
import Landing from '../../components/Landing/Landing'
const Home = () => {
    return (
        <div>
            <div className='text-center'>
            </div>
            <Landing />
            <About isHome={true} />
            <Skiils isHome={true} />
            <Websites isHome={true} />

        </div>
    )
}
export default Home