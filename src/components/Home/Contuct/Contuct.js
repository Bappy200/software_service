import React from 'react'
import './Contuct.css'
function Contuct() {
    return (
        <section className="contact">
        <div className="heading wheit">
            <h2>Contact Us</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className="content">
            <div className="contactInfo">
                <h3>Contact Info</h3>
                <div className="contactInfoBx">
                    <div className="box">
                        <div className="icon">
                            <i className="fa fa-map-marker"></i>
                        </div>
                        <div className="text">
                            <h3>Address</h3>
                            <p>Subidpur<br/>Meherpur,Dhaka<br/>Bangladesh</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <i className="fa fa-phone"></i>
                        </div>
                        <div className="text">
                            <h3>Phone</h3>
                            <p>+880182222222</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <i className="fa fa-envelope-o"></i>
                        </div>
                        <div className="text">
                            <h3>Email</h3>
                            <p>sbappyi200@gmail.com</p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="formBox">
                <form>
                    <h3>Message Me</h3>
                    <input type="text" placeholder="Full Name"/>
                    <input type="email" placeholder="Email"/>
                    <textarea placeholder="Your Message"></textarea>
                    <input type="submit" value="Send"/>
                </form>
            </div>
        </div>
    </section>
    )
}

export default Contuct
