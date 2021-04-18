import React from 'react'
import aboutImg from '../../../images/about-us.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
function About() {
    return (
        <section>
            <div className="row">
                <div className="col-md-5 d-flex align-items-center ">
                    <img className='img-fluid animation' src={aboutImg} alt="imag"/>
                </div>
                <div className="col-md-7">
                    <h2 className='mt-5 mb-2 fw-bold'>Software Development</h2>
                    <p className=''>
                        We listen to your ideas and create custom software solutions from the ground up, designed especially for your business.
                        Syberry customers agree that our engineers and executive team are some of the best in the world. You can trust that we'll
                        do it right the first time.
                    </p>
                    <h4 className='mt-5 mb-2 fw-bold'>Quality Assurance</h4>
                    <p className='mb-3'>
                       We believe in getting it right every time - that's why our Quality Assurance and Production teams work separately. We conduct thorough and rigorous QA checks on all of our projects.
                       We can also check third-party products to ensure you're getting what you expect.
                    </p>
                    <button className='brnad-button'>Read More <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
                </div>
            </div>
        </section>
    )
}

export default About
