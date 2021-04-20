import React, { useEffect, useState } from 'react'
import SideBar from '../SideBar/SideBar'
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import {  Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51IeBMjHc13JdSpdQJh3hM0o3sxg6qJVs1IlKksQLg3pFRjt437ygv3FYMPg03V8lhVwE6KAFndPa8B7uJDQPdpjR00NXv4Wmgj');
function Book() {
    
    
    const [book, setBook] = useState({})

   

    let { id } = useParams();
    useEffect(() => {
        fetch(`https://calm-basin-96440.herokuapp.com/book/${id}`)
            .then(res => res.json())
            .then(data => {
                delete data._id
                setBook(data)
            })
    }, [id])

  

    return (
        <section>
            <div className="row">
                <div className="col-md-3">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-9">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Service Name</label>
                            <input type="text"  value={book.title}  className="form-control" required disabled />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Price</label>
                            <input type="text"  value={book.price} className="form-control" required disabled />
                        </div>
                    </form>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm book={book}></CheckoutForm>
                    </Elements>
                </div>
            </div>
        </section>
    )
}

export default Book
