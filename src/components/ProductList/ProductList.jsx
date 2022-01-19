
import { React, useContext } from 'react';


import ProductCard from '../ProductCard/ProductCard'
import { ProductContext } from '../providers/products';

import './ProductList.css'


export default (props) => {

    const products = useContext(ProductContext)

    const qtd = products.filter(({ quantity }) => quantity === 2).reduce((prev, elem) => prev + (elem.price + elem.price), 0)
    const totalValue = products.filter(({quantity}) => quantity === 1).reduce((prev,elem) => prev + elem.price, qtd).toLocaleString('en-US', {style:'decimal'})


    return (
        <div className='List'>

            <div className='ProductWrap'>
                {<ProductCard image={products[0].image} alt={products[0].id} name={products[0].name} quantity={products[0].quantity} price={products[0].priceFormated} />}
                {<ProductCard image={products[1].image} alt={products[1].id} name={products[1].name} quantity={products[1].quantity} price={products[1].priceFormated} />}
                {<ProductCard image={products[2].image} alt={products[2].id} name={products[2].name} quantity={products[2].quantity} price={products[2].priceFormated} />}
                {<ProductCard image={products[3].image} alt={products[3].id} name={products[3].name} quantity={products[3].quantity} price={products[3].priceFormated} />}
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