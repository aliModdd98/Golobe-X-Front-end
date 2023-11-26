import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import FavoriteFilters from '../components/FavoriteFilters/FavoriteFilters'

function Favorites() {
    return (
        <>
            <NavBar />
            <FavoriteFilters />
            <Footer />
        </>
    )
}

export default Favorites