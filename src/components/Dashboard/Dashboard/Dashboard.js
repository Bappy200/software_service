import React, { useContext } from 'react'
import { UserContext } from '../../../App'
import SideBar from '../SideBar/SideBar'
import welcomeImage from "../../../images/welcomeImage.jpg"

function Dashboard() {
    const[loginUser] = useContext(UserContext)
    return (
        <section>
            <div className="row">
                <div className="col-md-3">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-9">
                <h2 style={{textAlign:'center', textTransform:'uppercase'}}>Welcome {loginUser.displayName}</h2>
                    <div style={{textAlign:'center'}}>
                        <img  src={welcomeImage} alt="welcome_image"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard
