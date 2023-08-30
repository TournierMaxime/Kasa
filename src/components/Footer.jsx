import kasaWhiteLogo from '../assets/images/kasa-white.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__content'>
            <img src={kasaWhiteLogo} alt='logo Kasa' />
            <h5>© 2020 Kasa. All rights reserved</h5>
            </div>
        </div>
    )
}

export default Footer