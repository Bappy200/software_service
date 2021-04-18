import React  from 'react'
import Footer from '../../Share/Footer/Footer'
import About from '../About/About'
import Contuct from '../Contuct/Contuct'
import Features from '../Features/Features'
import Header from '../Header/Header'
import Testimonial from '../Testimonial/Testimonial'
import Service from '../Service/Service'


function Home() {
    
    return (
        <>
            <Header></Header>
            <About></About>
            <Service></Service>
            <Features></Features>
            <Testimonial></Testimonial>
            <Contuct></Contuct>
            <Footer></Footer>
        </>
    )
}

export default Home
