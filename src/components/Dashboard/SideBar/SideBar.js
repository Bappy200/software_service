import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faPlus, faUser, faTasks, faComments, faUnlock } from '@fortawesome/free-solid-svg-icons'
import './SideBar.css'
import { UserContext } from '../../../App'

function SideBar() {
    const [isAdmin, setisAdmin] = useState(false);
    const [loginUser] = useContext(UserContext)
    useEffect(() => {
        fetch(`http://localhost:5000/isAdmin?email=${loginUser.email}`)
            .then(res => res.json())
            .then(data => setisAdmin(data))
    }, [loginUser.email])
    return (
        <aside>
            <h2 className='text-white fw-bold text-center'>SBI</h2>
            <ul className='pages'>
                <li>
                    <Link to='/book'><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>  Book</Link>
                </li>
                <li>
                    <Link to='/bookList'><FontAwesomeIcon icon={faUnlock}></FontAwesomeIcon>  Book List</Link>
                </li>
                <li>
                    <Link to='/reviwe'><FontAwesomeIcon icon={faComments}></FontAwesomeIcon>  Reviwe</Link>
                </li>

                {/*For normal user */}
                {
                    isAdmin && <>
                        <li>
                            <Link to='/orders'><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>  Order List</Link>
                        </li>
                        <li>
                            <Link to='/addService'><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>  Add Service</Link>
                        </li>
                        <li>
                            <Link to='/makeAdmin'><FontAwesomeIcon icon={faUser}></FontAwesomeIcon>  Make Admin</Link>
                        </li>
                        <li>
                            <Link to='/manageServices'><FontAwesomeIcon icon={faTasks}></FontAwesomeIcon>  Manage Services</Link>
                        </li>
                    </>
                }
            </ul>
        </aside>
    )
}

export default SideBar
