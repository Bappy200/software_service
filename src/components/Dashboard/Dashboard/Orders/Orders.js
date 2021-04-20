import React, { useEffect, useState } from 'react'
import SideBar from '../../SideBar/SideBar'

function Orders() {
    const [orders, setOrders] = useState([])
    
    useEffect(() => {
        fetch('https://calm-basin-96440.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])




    console.log(orders)
    return (
        <div>
            <div classNameNameName="row">
                <div classNameNameName="col-md-3">
                    <SideBar></SideBar>
                </div>
                <div classNameNameName="col-md-9">
                    <table className="table" style={{width:'700px',marginLeft:'300px'}}>
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">EmailID</th>
                                <th scope="col">Service</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(order => <tr>
                                <td>{order.user}</td>
                                <td>{order.email}</td>
                                <td>{order.title}</td>
                                <td>{order.state}</td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Orders
