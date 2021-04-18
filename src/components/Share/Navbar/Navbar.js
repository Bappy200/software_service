import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { UserContext } from '../../../App'

function Navbar() {
    const [loginUser,setLoginUser] = useContext(UserContext);
    console.log(loginUser)
    return (

            <nav class="navbar navbar-expand-lg navbar-light" style={{background:'rgba(56, 54, 54, 0.138)',boxShadow:' rgb(255 255 255 / 56%) 2px 1px 7px 0px',padding:'5px 100px'}}>
                <div class="container-fluid">
                    <Link class="navbar-brand text-white fw-bold" to="/">SBI</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item ">
                                <Link class="nav-link ms-3 text-white" aria-current="page" to='/'>Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link ms-3 text-white" to="/service">Service</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link ms-3 text-white" to="/features">Features</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link ms-3 text-white" to="/contuct">Contuct us</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link ms-3 text-white" to="/dashboard">Dashboard</Link>
                            </li>
                            <li class="nav-item">
                               {
                                   loginUser.email ?    <button className='brnad-button' onClick={()=> setLoginUser({})}>Sign Out</button> : <Link class="nav-link ms-3 text-white" to="/login">Login</Link>
                               }
                            </li>
                        </ul>
                         
                    </div>
                </div>
            </nav>
       
    )
}

export default Navbar
