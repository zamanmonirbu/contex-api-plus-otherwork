import React, { useContext } from 'react';
import { contexapi } from '../../App';
// import CategoryDetails from '../CategoryDetails/CategoryDetails';


const Category = () => {
    const count= useContext(contexapi)

    return (
        <div>
            <p>From category{count}</p>
        </div>
    );
};

export default Category;