import React, { useEffect, useState } from 'react'
import ServiceItem from '../../Home/Service/ServiceItem'
import SideBar from '../SideBar/SideBar'

function ManageService() {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://calm-basin-96440.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handlerDeleteService = (id) => {
        fetch(`https://calm-basin-96440.herokuapp.com/deleteService?id=${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(result => {
          if(result){
            alert('Service delete')
          }
        })
        console.log(id)

    }

    return (
        <section>
            <div className="row">
                <div className="col-md-3">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-9">
                    <div className="row">
                        {
                            services.map(service => <ServiceItem key={service._id} {...service} handlerDeleteService={handlerDeleteService} fromMangeService={true}></ServiceItem>)
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ManageService
