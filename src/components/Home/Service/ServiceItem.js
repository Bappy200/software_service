import React from 'react'
import './ServiceItem.css'
function ServiceItem() {
    return (
        <div className='col-md-4 '>
            <div class="card">
            <div class="card__side card__side--front-1">
              <div class="card__title card__title--1">
                <i class="fas fa-paper-plane"></i>
                <h4 class="card__heading">Ecommerce Application</h4>
              </div>

              <div class="card__details">
               <p>
                    If your business sells products or services online, a custom ecommerce application is an essential competitive advantage. Syberry builds applications that streamline payment, inventory, reporting, and security to keep your business thriving.
               </p>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-1">
              <div class="card__cta">
                <div class="card__price-box">
                  <p class="card__price-only">Only</p>
                  <p class="card__price-value">$2.95/mo*</p>
                </div>
                <button class="brnad-button">Select</button>
              </div>
            </div>
          </div>
        </div>
    )
}

export default ServiceItem
