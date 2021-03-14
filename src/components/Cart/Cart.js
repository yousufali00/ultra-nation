import React from 'react';
import "./Cart.css"

const Cart = (props) => {

    let countryCount = props.addedCountry

    const totalPopulation = countryCount.reduce( ( total, country ) => total + country.population, 0  ) 

    return (
        <div className="cart text-left">
            <h5> Total Country: {countryCount.length} </h5>
            <p> Total Population: {totalPopulation} </p>
        </div>
    );
};

export default Cart;