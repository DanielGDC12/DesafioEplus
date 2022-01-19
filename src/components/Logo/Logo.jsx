import eplusLogo from '../../Images/agencia-eplus-n-logo.png';




export const Logo = () => {
    return (

        <div className='LogoContainer'>
            <img src={eplusLogo} className='Logo' alt='E-Plus Logo' />
        </div>
    );
}