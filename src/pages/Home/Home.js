import React, { useEffect } from 'react'
import About from '../Experience/Experience'
import Skiils from '../Skills/Skills'
import Websites from '../Websites/Websites'
import Landing from '../../components/Landing/Landing'

const Home = () => {
    let lastKnownScrollPosition = 0;


    useEffect(() => {
        document.addEventListener('scroll', function (e) {
            lastKnownScrollPosition = window.scrollY;

            let active = document.getElementsByClassName("activeNav");


            if (lastKnownScrollPosition < 600) {
                while (active.length)
                    active[0].classList.remove("activeNav");
                document.getElementById("landingNavItem").classList.add("activeNav")
            }

            else if (lastKnownScrollPosition > 600 && lastKnownScrollPosition < 1400) {
                while (active.length)
                    active[0].classList.remove("activeNav");
                document.getElementById("portfolioNavItem").classList.add("activeNav")
            }
            else if (lastKnownScrollPosition > 1400 && lastKnownScrollPosition < 2200) {
                while (active.length)
                    active[0].classList.remove("activeNav");
                document.getElementById("skillsNavItem").classList.add("activeNav")
            }
            else if (lastKnownScrollPosition > 2200) {
                while (active.length)
                    active[0].classList.remove("activeNav");
                document.getElementById("experienceNavItem").classList.add("activeNav")
            }

        })
    })
    return (
        <div>
            <div className='text-center'>
            </div>
            <Landing />
            <hr />
            <Websites isHome={true} />
            <hr />
            <Skiils isHome={true} />
            <hr />
            <About isHome={true} />

        </div>
    )
}
export default Home