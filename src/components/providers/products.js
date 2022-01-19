import { React, useState, useEffect, createContext } from 'react'
import axios from 'axios'

export const ProductContext = createContext({})



export const ProductProvider = (props) => {
    const [products, setProducts] = useState([])

    async function fetchData() {
        let response = await axios('http://localhost:3001');
        let produtos = await response.data.cart.item;
        setProducts(produtos)
        return;

    }

    useEffect(() => {
        fetchData();
    }, [])

    const prod = products.map(item => {
        return {
            id: item.productId,
            name: item.name,
            salesChannel: item.salesChannel,
            available: item.available,
            priceFormated: item.bestPriceFormated,
            price: item.bestPrice,
            quantity: item.quantity,
            image: item.image
        }
    })

    return (
        <ProductContext.Provider value={prod}>
            {props.children}
        </ProductContext.Provider>
    )

}

