import React, { useEffect, useState } from 'react'
import About from '../Experience/Experience'
import Skiils from '../Skills/Skills'
import Websites from '../Websites/Websites'
import Landing from '../../components/Landing/Landing'
import { useHistory } from "react-router-dom";

const Home = (props) => {
    let lastKnownScrollPosition = 0;
    const [renderWebsites, setRenderWebsites] = useState(false)
    const [renderSkills, setRenderSkills] = useState(false)
    const [renderExperience, setRenderExperience] = useState(false)
    let history = useHistory();

    useEffect(() => {
        setDisplay(props.navItemCicked, () => {
            history.push(`/#${props.navItemCicked}`)
        });

        // console.log('navItemCicke', props.navItemCicke)
    })

    const setDisplay = (element) => {

        // console.log('element', element)
        if (element == 'websites') {
            setRenderWebsites(true)
            document.getElementById('portfolioNavItem').style.display = 'block'
        }
        else if (element == 'skills') {
            setRenderSkills(true)
            document.getElementById('skillsNavItem').style.display = 'block'
        }
        else if (element == 'experience') {
            setRenderExperience(true)
            document.getElementById('experienceNavItem').style.display = 'block'
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', function (e) {
            lastKnownScrollPosition = window.scrollY;

            let active = document.getElementsByClassName("activeNav");


            if (lastKnownScrollPosition < 600) {
                while (active.length)
                    active[0].classList.remove("activeNav");
                document.getElementById("landingNavItem").classList.add("activeNav")
                if (lastKnownScrollPosition < 600 && lastKnownScrollPosition > 100) {
                    setRenderWebsites(true)
                    document.getElementById('portfolioNavItem').style.display = 'block'
                }
            }

            else if (lastKnownScrollPosition > 600 && lastKnownScrollPosition < 1400) {
                while (active.length)
                    active[0].classList.remove("activeNav");
                document.getElementById("portfolioNavItem").classList.add("activeNav")
                if (lastKnownScrollPosition < 1400 && lastKnownScrollPosition > 800) {
                    setRenderSkills(true)
                    document.getElementById('skillsNavItem').style.display = 'block'
                }
            }
            else if (lastKnownScrollPosition > 1400 && lastKnownScrollPosition < 2200) {
                while (active.length)
                    active[0].classList.remove("activeNav");
                document.getElementById("skillsNavItem").classList.add("activeNav")
                if (lastKnownScrollPosition < 2200 && lastKnownScrollPosition > 1750) {
                    setRenderExperience(true)
                    document.getElementById('experienceNavItem').style.display = 'block'
                }
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
            <Landing setDisplay={setDisplay} />

            {
                renderWebsites &&
                <>
                    <hr />
                    <Websites isHome={true} setDisplay={setDisplay} />
                </>
            }
            {
                renderSkills &&
                <>
                    <hr />
                    <Skiils isHome={true} setDisplay={setDisplay} />
                </>
            }
            {
                renderExperience &&
                <>
                    <hr />
                    <About isHome={true} />
                </>
            }


        </div>
    )
}
export default Home