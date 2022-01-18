import React from 'react';
import Product from '../../Images/Products/impressora-canon-160-160.jpg';

import './ProductCard.css';

export default (props) => {
    return (
       <div className='Card'>
           <div className='ImageContainer'>
           <img src={Product} className='Impressora' alt='Impressora'/>
           </div>
           <div className='InfoContainer'>
           <span className="Productname">Impressora Top</span>
           <div className='ProductQtd'>
           <span className="quantidade">Qtd: 2</span>
           <span className="price">R$:50</span>
           </div>
           </div>

       </div>
    ); 
}