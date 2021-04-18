import React from 'react'
import './Testimonial.css'
import TestimonialItem from './TestimonialItem'
function Testimonial() {
    return (
        <section class="testimonial" id="testimonial">
        <div class="heading">
            <h2>Our Testimonial</h2>
            <p>What our customers say about us</p>
        </div>
        <div class="content">
           <TestimonialItem></TestimonialItem>
           <TestimonialItem></TestimonialItem>
        </div>
    </section>
    )
}

export default Testimonial
