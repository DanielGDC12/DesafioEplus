import { React } from 'react'
import './ProductCard.css';
import imagem from '../../Images/products/impressora-canon-160-160.jpg'
export default (props) => {




    return (

        <div className='Card'>
            <div className='ImageContainer'>
                <img src={imagem} className='Impressora' alt={props.id} />
            </div>
            <div className='InfoContainer'>
                <div className='nameContainer'>
                    <span className="productName">{props.name}</span>
                </div>
                <div className='productQtd'>
                    <span className="quantidade">Qtd: {props.quantity}</span>
                    <span className="price">{props.price}</span>
                </div>
            </div>

        </div>
    );
}