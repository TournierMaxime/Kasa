import logo from '../assets/images/logo.png'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt='logo Kasa' className='header__img' />
            <div className='header__link'>
                <a href='/'>Accueil</a>
                <a href='/about'>A propos</a>
            </div>
        </div>
    )
}

export default Header