import React from 'react';
import { Link } from 'react-router-dom';

const CountryInformation = (props) => {
    const {name}=props.user;
    const st={
        border:'2px solid black',
        width:'500px',
        height:'100px',
        margin:'20px',
        textAlign:'center'
    }
    return (
        <div style={st}>
            <p>Name:{name.common}</p>
            <Link to={`name/${name.common}`}>See more</Link>
        </div>
    );
};

export default CountryInformation;