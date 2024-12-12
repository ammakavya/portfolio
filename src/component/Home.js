import React from 'react'
import AboutMe from './AboutMe'
import Contact from './pages/Contact'
import Skills from './pages/Skills'
import Herocompo from '../Herocompo'

export const Home = () => {
    return (
        <div>
            <Herocompo />
            <AboutMe />

            <Skills />
        </div>
    )
}
