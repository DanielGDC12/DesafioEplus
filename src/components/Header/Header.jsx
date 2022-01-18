import './Header.css';

import Logo from '../../Images/agencia-eplus-n-logo.png';


export default (props) => {
    return (
        <div className='Header'>  
                <div className='LogoContainer'>
                 <img src={Logo} className='Logo' alt='E-Plus Logo'/>
                </div>  
                
                <span className='Link'>Lorem Ipsum</span>
                <span className='Link'>Lorem Ipsum</span>
                <span className='Link'>Lorem Ipsum</span>
                <span className='Link'>Lorem Ipsum</span>
                <span className='Link'>Lorem Ipsum</span>
                    
                
           
                <div className='IconsContainer'>
                <span className="material-icons">search</span>
                <span className="material-icons">person</span>
                <span className="material-icons ">shopping_cart</span>
                </div>
                
        </div>
    );
}