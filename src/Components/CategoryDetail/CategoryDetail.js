import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetail = (props) => {
    const {name}=props.product;
    
    return (
        <div>
            <h5>This is your selected category detail </h5>
            <p>Selected products: {name}</p>
        </div>
    );
};

export default CategoryDetail;