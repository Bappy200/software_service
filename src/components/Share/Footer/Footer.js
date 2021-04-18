import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        {name: "Custom Software Development" , link: "/Software"},
        {name: "Finance" , link: "/finance"},
        {name: "Treatment of Personal Diseases" , link: "/personal-treatment"},
        {name: "Construction" , link: "/construction"},
        {name: "Software Maintenance Program" , link: "/Program"},
    ]
    const ourAddress = [
        {name: "Meher pur - 101010" , link: "//google.com/map"},
        {name: "Subid pur" , link: "//google.com/map"},
       
    ]
    const services = [
        {name: "Custom Software Development" , link: "/Software"},
        {name: "Mobile Software Development" , link: "/mobile"},
        {name: "Software Prototyping" , link: "/prototyping"},
        {name: "Quality Assurance" , link: "/quality-assurance"},
        {name: "Software Modernization" , link: "/software-modernization"},
        {name: "Software Maintenance Program" , link: "/maintenance"},
    ]
    const industries  = [
        {name: "Finance" , link: "/finance"},
        {name: "Healthcare" , link: "/healthcare"},
        {name: "Mid-Sized Businesses" , link: "/businesses"},
        {name: "Tooth Extraction" , link: "/tooth-extract"},
        {name: "Big Data Solutions" , link: "/data"},
        
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Industries" menuItems={industries}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-brand">+4543525423</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p className='text-white'>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;