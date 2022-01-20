import { React, useState } from 'react';
import { ProductList } from '../ProductList/ProductList';

import './Button.css';


export const Button = () => {

    const [tog, setTog] = useState(false)

    const onclick = (e) => {
        e.preventDefault()
        setTog(!tog);
    }

    return (
        <div className='iconsContainer'>
            <div className='searchBtn'>
                <button className="material-icons">search</button>
            </div>
            <div className='pBtn'>
                <button className="material-icons">person</button>
            </div>
            <div className='cartBtn'>
                <button className="material-icons Cart" onClick={onclick} >shopping_cart</button>
            </div>
            <div>
                {tog ? <ProductList /> : ""}
            </div>
        </div>
    );
}


