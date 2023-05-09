import React, { useContext } from 'react';
import { contexapi } from '../../App';
// import Category from '../Category/Category';

const Home = () => {
    const [count,setCount]=useContext(contexapi);
   

    return (
        <div>
            <h3>Total count:{count}</h3>
            <button onClick={()=>setCount(count+1)} >Count</button>
           
        </div>
    );
};

export default Home;