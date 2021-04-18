import React from 'react'
import AddService from '../AddService/AddService'
import SideBar from '../SideBar/SideBar'

function Dashboard() {
    return (
        <section>
            <div className="row">
                <div className="col-md-3">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-9">
                    <AddService></AddService>
                </div>
            </div>
        </section>
    )
}

export default Dashboard
