import React, { useContext } from 'react';
import { contexapi } from '../../App';

const CategoryDetails = (props) => {
    const count=useContext(contexapi)
    return (
        <div>
            <p>From CategoryDetails {count}</p>
        </div>
    );
};

export default CategoryDetails;