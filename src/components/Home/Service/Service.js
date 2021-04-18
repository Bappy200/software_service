import React from 'react'
import ServiceItem from "./ServiceItem";


function Service() {
    return (
        <section>
            <div class="heading">
                <h2>Our Service</h2>
                <p>SBI presents a unique service package to suit your needs! </p>
            </div>
            <div className="row">
                <ServiceItem />
            </div>
        </section>
    )
}

export default Service
