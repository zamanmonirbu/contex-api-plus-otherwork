import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MoreInfo = () => {
    const {countryName}= useParams();
    const [more,setMore]=useState([]);
    useEffect(()=>{
        const url=`https://restcountries.com/v3.1/name/${countryName}`
        fetch(url)
        .then(req=>req.json())
        .then(data=>setMore(data))
    })
// const {cca2}=more[0].name.official;
console.log(more[0].cca2);
    return (
        <div>
            <p>Here are more info {more[0].cca2} </p>
        </div>
    );
};

export default MoreInfo;