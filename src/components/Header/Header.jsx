import './Header.css';
import {React, useState,useEffect} from 'react'

import ProductList from '../ProductList/ProductList';
import Logo from '../../Images/agencia-eplus-n-logo.png';

   

export default (props) => {
    const [tog, setTog] = useState(false)

    const onclick = (e) => {
        e.preventDefault()
        setTog(!tog);
    }

  
    
    return (
        <div className='Header'>
            <div className='LogoContainer'>
                <img src={Logo} className='Logo' alt='E-Plus Logo' />
            </div>
            < a href="#" className='Link'>Lorem Ipsum</a>
            < a href="#" className='Link'>Lorem Ipsum</a>
            < a href="#" className='Link'>Lorem Ipsum</a>
            < a href="#" className='Link'>Lorem Ipsum</a>
            < a href="#" className='Link'>Lorem Ipsum</a>
            <div className='IconsContainer'>
                <button className="material-icons">search</button>
                <button className="material-icons">person</button>
                <button className="material-icons Cart" onClick={onclick } >shopping_cart
                </button>
                    <div>
                        {tog? <ProductList/> : "" }
                    </div>
            </div>

        </div>
    );
}