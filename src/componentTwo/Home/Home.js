import React, { useEffect, useState } from 'react';
import CountryInformation from '../Information/CountryInformation';

const Home = () => {
    const [country,setCountry]=useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(req=>req.json())
        .then(data=>setCountry(data))
    },[])
    return (
        <div>
           {
             country.map(user=><CountryInformation user={user}></CountryInformation>)
           }
        </div>
    );
};

export default Home;