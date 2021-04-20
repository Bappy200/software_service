import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const CheckoutForm = ({book}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loginUser] = useContext(UserContext)

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      book.paymentMethod = paymentMethod;
      book.email = loginUser.email;
      book.user = loginUser.displayName;
      book.state = 'Recive'
      console.log('[PaymentMethod]', paymentMethod);

      fetch('https://calm-basin-96440.herokuapp.com/booking',{
          method:'POST',
          headers: { 'Content-Type': 'application/json' },
          body:JSON.stringify(book)
        })
        .then(res=> res.json())
        .then(data =>{
          if(data){
            alert('Order Successfuly')
          }
        })
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button className='brnad-button mt-3' type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};
export default CheckoutForm