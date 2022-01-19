
import Product from '../../Images/Products/impressora-canon-160-160.jpg';


import './ProductCard.css';

export default (props) => {


  
    return (

        <div className='Card'>
            <div className='ImageContainer'>
                <img src={props.image} className='Impressora' alt='Impressora' />
            </div>
            <div className='InfoContainer'>
                <span className="Productname">{props.name}</span>
                <div className='ProductQtd'>
                    <span className="quantidade">Qtd: {props.quantity}</span>
                    <span className="price">R$:{props.price}</span>
                </div>
            </div>

        </div>
    );
}