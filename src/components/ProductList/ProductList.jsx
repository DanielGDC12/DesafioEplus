
import { React, useContext } from 'react';


import { ProductCard } from '../ProductCard/ProductCard'
import { ProductContext } from '../providers/products';

import './ProductList.css'


export const ProductList = (props) => {

    const products = useContext(ProductContext)



    const qtd = products.filter(({ quantity }) => quantity === 2).reduce((prev, elem) => prev + ((elem.price + elem.price) / 100), 0)
    const totalValue = products.filter(({ quantity }) => quantity === 1).reduce((prev, elem) => prev + (elem.price / 100), qtd).toLocaleString('pt-BR', { style: 'decimal', currency: 'BRA' })


    return (
        <div className='List'>

            <div className='ProductWrap'>
                {products.map(product => (
                    <ProductCard image={product.image} alt={product.id} name={product.name} quantity={product.quantity} price={product.priceFormated} />
                ))}

            </div>


            <div className='Infowrap'>
                <div className='TotalWrap'>
                    <span>Total do Pedido: R$: <strong>{totalValue} </strong></span>
                </div>
                <div className='ButtonWrap'>
                    <button className="Finalizar">Finalizar Compra</button>
                </div>
            </div>


        </div>
    );
}