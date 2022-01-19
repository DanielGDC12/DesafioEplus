import { React } from 'react'
import './ProductCard.css';
import imagem from '../../Images/products/impressora-canon-160-160.jpg'




export const ProductCard = ({ image, id, name, quantity, price }) => {


    return (

        <div className='Card'>
            <div className='ImageContainer'>
                <img src={image} className='Impressora' alt={id} />
            </div>
            <div className='InfoContainer'>
                <div className='nameContainer'>
                    <span className="productName">{name}</span>
                </div>
                <div className='productQtd'>
                    <span className="quantidade">Qtd: {quantity}</span>
                    <span className="price">{price}</span>
                </div>
            </div>

        </div>
    );
}