import React from 'react'
import "./Features.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight,faStar } from '@fortawesome/free-solid-svg-icons'
function Features() {
    return (
        <section className='features-section animation'>
            <div className='our-featuers'>
              <h2 className='text-white fw-bold fs-1 mb-4'><FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon>  Why Choose SBI</h2>  
                <ul>
                    <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon> SBI provides a full professional development team with a customer-oriented approach</li>
                    <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon> SBI provides app delivery to the AppStore, Android Market, Windows Store, and the proper certifications for this purpose</li>
                    <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon> We have a separate specialty in the field of mobile technologies</li>
                    <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon> Our strength is the fruitful experience We have had working in various mobile development industries</li>
                    <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon> We possess a breadth of experience in mobile UI and design</li>
                </ul>
            </div>
        </section>
    )
}

export default Features
