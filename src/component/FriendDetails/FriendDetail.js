import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId}=useParams();

    const [userSpesific,setUserSpesifi]=useState({})

    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(req=>req.json())
        .then(data =>setUserSpesifi(data))
    },  )
        
    return (
        <div>
            <p>here are details{userSpesific.name}</p>
        </div>
    );
};

export default FriendDetail;