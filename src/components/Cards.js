import React from 'react';
import CardItem from './CardItem';
import './Cards.css'
function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items' >
                        <CardItem 
                            src='images/img1.jpg'
                            text='Explore the hiddern waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path ='/services'></CardItem>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
