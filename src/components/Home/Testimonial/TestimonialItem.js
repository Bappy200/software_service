import React from 'react'

function TestimonialItem({name,description,companyName}) {
    return (
        <div className="testimonialBox">
            <p>{description}</p>
            <h3>{name}<br/><span>{companyName}</span></h3>
        </div>
    )
}

export default TestimonialItem
