import React, { useContext } from 'react'
import { UserContext } from '../../../App'
import AddService from '../AddService/AddService'
import SideBar from '../SideBar/SideBar'

function Dashboard() {
    const[loginUser] = useContext(UserContext)
    return (
        <section>
            <div className="row">
                <div className="col-md-3">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-9">
                    <h2>Welcome "{loginUser.displayName}"</h2>
                </div>
            </div>
        </section>
    )
}

export default Dashboard
