
import { React, useContext } from 'react';


import ProductCard from '../ProductCard/ProductCard'
import { ProductContext } from '../providers/products';

import './ProductList.css'


export default (props) => {

    const produtos = useContext(ProductContext)


    

    return (
        <div className='List'>

            <div className='ProductWrap'>

            {produtos.map(item => <div> {item.name} </div>)}

            </div>

            <div className='Infowrap'>
                <div className='TotalWrap'>
                    <span>Total do Pedido: <strong>R$:500</strong></span>
                </div>
                <div className='ButtonWrap'>
                    <button className="Finalizar">Finalizar Compra</button>
                </div>
            </div>


        </div>
    );
}