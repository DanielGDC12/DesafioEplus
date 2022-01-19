import './Header.css';
import { React } from 'react'


import { Logo } from '../Logo/Logo';
import { Button } from '../Button/Button';

import { Link } from '../Link/Link';



export const Header = () => {

    return (
        <div className='Header'>
            <Logo />
            <Link refer="#" />
            <Button />
        </div>
    );
}