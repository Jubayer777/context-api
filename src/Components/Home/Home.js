import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Categories from '../Categories/Categories';

const Home = () => {
    const catagory=useContext(CategoryContext);
    return (
        <div style={{border:'1px solid red'}}>
            <h1>This is Home Count: {catagory}</h1>
            <Categories></Categories>
        </div>
    );
};

export default Home;