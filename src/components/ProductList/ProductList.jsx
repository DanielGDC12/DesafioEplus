import React from 'react'

import ProductCard from '../ProductCard/ProductCard'

import './ProductList.css'


export default (props) => {
    return (
        <div className='List'>

            <div className='ProductWrap'>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
               
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