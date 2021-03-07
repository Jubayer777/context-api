import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetail from '../CategoryDetail/CategoryDetail';

const allProducts =[{name:'Lanavo',category:'laptop'},{name:'Asus',category:'laptop'},{name:'Dell',category:'laptop'},
                 {name:'Samsung',category:'mobile'},{name:'Nokia',category:'mobile'},{name:'Apple',category:'mobile'},
                 {name:'Canon',category:'camera'},{name:'Nikkon',category:'camera'},{name:'Sony',category:'camera'}]

const Categories = () => {
    const [category]=useContext(CategoryContext);
    const [products, setproducts]=useState([]);
    useEffect(()=>{
           const matchedProducts=allProducts.filter(pd=>pd.category.toLowerCase() === category.toLowerCase());
           setproducts(matchedProducts);
    },[category])
    return (
        <div>
            <h4>Select Your category: {category}</h4>
            {
                products.map(pd=><CategoryDetail product={pd}></CategoryDetail>)
            }
        </div>
    );
};

export default Categories;