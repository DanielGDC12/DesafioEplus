import {React, useState} from 'react';


import './Button.css';


export default (props) => {

    
   
    return(
        <div className='IconsContainer'>
                <button className="material-icons">search</button>
                <button className="material-icons">person</button>
                <button className="material-icons Cart"  >shopping_cart</button>
                    <div>
                        
                    </div>
            </div>
    );
}

/* onClick={onclick } {tog? <ProductList/> : "" } 
const [tog, setTog] = useState(false)

    const onclick = (e) => {
        e.preventDefault()
        setTog(!tog);
    }
*/