import React, { useEffect, useState } from 'react'
import ServiceItem from "./ServiceItem";


function Service() {
    const [services,setServices] = useState([])
    useEffect(() => {
        fetch('https://calm-basin-96440.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    
    return (
        <section>
            <div className="heading">
                <h2>Our Service</h2>
                <p>SBI presents a unique service package to suit your needs! </p>
            </div>
            <div className="row">
                {
                    services.map(service => <ServiceItem key={service._id} {...service}/>)
                }
            </div>
        </section>
    )
}

export default Service
