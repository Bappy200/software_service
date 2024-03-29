import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../App'
import ServiceItem from '../../Home/Service/ServiceItem'
import SideBar from  '../SideBar/SideBar'

function Booking() {
    const[booking, setBooking] = useState([])
    const[loginUser] = useContext(UserContext)
    useEffect(()=>{
        fetch(`https://calm-basin-96440.herokuapp.com/booking?email=${loginUser.email}`)
        .then(res=> res.json())
        .then(data => setBooking(data))
    },[loginUser.email])
    console.log(booking)
    return (
        <section>
        <div className="row">
            <div className="col-md-3">
                <SideBar></SideBar>
            </div>
            <div className="col-md-9">
                <div className="row">
                    {
                       booking.map(order => <ServiceItem key={order._id} fromBooking = {true} {...order}></ServiceItem>)
                    }
                </div>
            </div>
        </div>
    </section>
    )
}

export default Booking
