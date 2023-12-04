import React from 'react'
import Hero from '../Hero/Hero'
import image from './../../assets/landing.png'
import NavBar from '../NavBar/NavBar'
import SearchForm from '../SearchForm/SearchForm'

function Header() {
    return (
        <header data-aos="fade-right">
            <div className='vh-100 p-4'>
                <Hero 
                className='rounded-5 h-100' 
                img={image} 
                center 
                title='Helping Others' 
                secTitleLine='Live & Travel' 
                subTitle='Special offers to suit your plan'>
                    <NavBar transpartent />
                </Hero>
            </div>
                <SearchForm both />
        </header>
    )
}

export default Header