import React from 'react';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nation.css';


const Nation = (props) => {

    const nation = props.countryData
    const addHandle = props.addCountryHandler

    return (
        <Col lg="6"> 
            <div className="single-country text-left" >
                <div className="country-img text-center" >
                    <img src={nation.flag} className="img-fluid country-image" alt=""/>
                </div>
                <h2 className="title">{nation.name} </h2>
                <div className="line"></div>
                <h4 className="region" > Region: {nation.region}  </h4>
                <h4 className="capital" > Capital: {nation.capital} </h4>
                <h4 className="population" > Population: {nation.population} </h4>
                <button className="btn btn-lg btn-success mt-3" onClick={() => addHandle(props.countryData) }  > Add </button>
            </div>
        </Col>
    );
};

export default Nation;