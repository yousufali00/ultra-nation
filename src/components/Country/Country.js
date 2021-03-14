import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Country.css';
import Nation from '../Nation/Nation';
import Cart from '../Cart/Cart';


const Country = () => {


    const [ countries, setCountries ] = useState([])  

    useEffect( () =>{

        fetch( 'https://restcountries.eu/rest/v2/all' )
        .then( res => res.json() )
        .then( data => setCountries(data) )

    } )

    const [cartCountry, setCartCountry] = useState([])

    const addHandle = (country) =>{
        console.log( country , 'country added' )
        let newCountryAdd = [ ...cartCountry , country ]
        setCartCountry( newCountryAdd )
        
    }

    return (
        
        <Row>
            <Col lg='8'>
                <Row >  
                    {
                        countries.map( country => <Nation countryData={country} key={country.alpha3Code} addCountryHandler={ () => addHandle(country)} ></Nation> )
                    } 
                </Row>
            </Col>
            <Col lg='4'> <Cart addedCountry = {cartCountry} ></Cart> </Col>
        </Row>
    );
};

export default Country;

