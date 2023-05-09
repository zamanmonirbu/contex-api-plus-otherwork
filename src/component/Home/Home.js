import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Home = () => {
    const [user,setUser]=useState([]);
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/users`;
        fetch(url)
        .then(req=>req.json())
        .then(data=>setUser(data))
    },[])
    return (
        <div>
            {
                user.map(person=><Friend friend={person}></Friend>)
            }
            <p> From Home</p>
            <Link to={'/'}>Home</Link>
            <Link to={'/contact'}>Assect</Link>

        </div>
    );
};

export default Home;