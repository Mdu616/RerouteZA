import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out our services!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-11.jpg'
              text='Droppings at your precise location'
              label='Location drop'
              path='/services'
            />
            <CardItem
              src='images/img-12.jpg'
              text='We cater for both food and goods delicery at reasonable rate'
              label='Food and goods'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-13.jpg'
              text='We offer a variety of payment methods'
              label='Easy payment method'
              path='/services'
            />
            <CardItem
              src='images/img-14.jpg'
              text='Experience delivery service to your convince'
              label='Delivery services'
              path='/products'
            />
            <CardItem
              src='images/img-15.jpg'
              text='pin your location for drop off'
              label='Pin your location'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
