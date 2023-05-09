import React from 'react';
import { Link,useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const navigate = useNavigate();
    


    const callId=(friendID)=>{
        const url=`friend/${friendID}`;
        navigate(url);
    }

    const {name,id}=props.friend;
    return (
        <div>
            <p>{name}</p>
            <p>{id}</p>
            <p>Id:<Link to={`/friend/${id}`} >{id} See more</Link> </p>
            <button onClick={()=>callId(id)} >Show more</button>

        </div>
    );
};

export default Friend;