import React from 'react'
import About from '../About/About'
import Skiils from '../Skills/Skills'
import Websites from '../Websites/Websites'
const Home = () => {
    return (
        <div>
            <div className='text-center'>
            </div>
            <About isHome={true} />
            <Websites isHome={true} />
            <Skiils isHome={true} />
        </div>
    )
}
export default Home