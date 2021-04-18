import React from 'react'
import Navbar from '../../Share/Navbar/Navbar'
import MainHeader from '../MainHeader/MainHeader'
import './Header.css'

function Header() {
    return (
        <header className='header-section animation'>
            <Navbar></Navbar>
            <MainHeader></MainHeader>
        </header>
    )
}

export default Header
