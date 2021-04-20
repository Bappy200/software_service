import React from 'react'
import { useHistory } from 'react-router'
import './ServiceItem.css'
function ServiceItem({ description, title, imageUrl, price, _id, state, fromBooking, fromMangeService, handlerDeleteService }) {
  const history = useHistory()
  const handlerService = (id) => {
    history.push(`/book/${id}`)
  }



  return (
    <div className='col-md-4'>
      <div className="card">
        <div className="card__side card__side--front-1">
          <div className="card__title card__title--1">
            {
              fromBooking && <p className='text-white align-items-right'>{state}</p>
            }
            <img className='img-fluid' src={imageUrl} alt="images" />
            <h4 className="card__heading">{title}</h4>
          </div>

          <div className="card__details">
            <p>{description}</p>
          </div>
        </div>
        <div className="card__side card__side--back card__side--back-1">
          <div className="card__cta">
            <div className="card__price-box">
              <p className="card__price-only">Only</p>
              <p className="card__price-value">${price}</p>
            </div>


            {!fromBooking && <>
              {fromMangeService ?
                <button className="brnad-button" onClick={() => handlerDeleteService(_id)}>Delete</button>
                :
                <button className="brnad-button" onClick={() => handlerService(_id)}>Select</button>}
            </>}



          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceItem
