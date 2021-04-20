import React, { useEffect, useState } from 'react'
import './Testimonial.css'
import TestimonialItem from './TestimonialItem'
function Testimonial() {
    const [reviwes,setReviews] = useState([])
    useEffect(() => {
        fetch('https://calm-basin-96440.herokuapp.com/reviwes')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    console.log(reviwes)
    return (
        <section className="testimonial" id="testimonial">
        <div className="heading">
            <h2>Our Testimonial</h2>
            <p>What our customers say about us</p>
        </div>
        <div className="content">
           {
               reviwes.map(reviwe => <TestimonialItem key={reviwe._id} {...reviwe}></TestimonialItem>)
           }
        </div>
    </section>
    )
}

export default Testimonial
