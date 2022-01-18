import {React, useState} from 'react';


import './Button.css';
import ProductList from '../ProductList/ProductList';

export default (props) => {

    
   const [tog, setTog] = useState(false)

    const onclick = (e) => {
        e.preventDefault()
        setTog(!tog);
    }
    return(
        <div className='IconsContainer'>
                <button className="material-icons">search</button>
                <button className="material-icons">person</button>
                <button className="material-icons Cart" onClick={onclick } >shopping_cart</button>
                    <div>
                        {tog? <ProductList/> : "" }
                    </div>
            </div>
    );
}