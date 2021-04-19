import React, { useEffect, useState } from 'react'
import SideBar from '../../SideBar/SideBar'

function Orders() {
    const [orders, setOrders] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/orders')
        .then(res=> res.json())
        .then(data => setOrders(data))
    },[])
    console.log(orders)
    return (
        <section>
            <div className="row">
                <div className="col-md-3">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-9">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">EmailID</th>
                                <th scope="col">Service</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(order => <tr>
                                    <td>{order.user}</td>
                                    <td>{order.email}</td>
                                    <td>{order.title}</td>
                                    <td>{order.state}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Orders
