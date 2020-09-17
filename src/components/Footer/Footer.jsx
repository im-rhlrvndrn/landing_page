import React from 'react';
import { Link } from 'react-router-dom';

// Scss files
import './Footer.scss';

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='footer__wrapper'>
                    <div className='footer__wrapper__footerLogo'>
                        <h1>
                            genisis <br />
                            vision
                        </h1>
                    </div>
                    <div className='footer__wrapper__footerItemList'>
                        <span className='footer__wrapper__footerItemList__header'>Links</span>
                        <Link to='/about' className='footer__wrapper__footerItemList__footerItem'>
                            about us
                        </Link>
                        <Link to='/blog' className='footer__wrapper__footerItemList__footerItem'>
                            FAQ
                        </Link>
                        <Link to='/contact' className='footer__wrapper__footerItemList__footerItem'>
                            contact
                        </Link>
                    </div>
                    <div className='footer__wrapper__footerItemList'>
                        <span className='footer__wrapper__footerItemList__header'>Knowledge</span>
                        <Link to='/mission' className='footer__wrapper__footerItemList__footerItem'>
                            Mission
                        </Link>
                        <Link to='/vision' className='footer__wrapper__footerItemList__footerItem'>
                            vision
                        </Link>
                        <Link
                            to='/disclaimer'
                            className='footer__wrapper__footerItemList__footerItem'
                        >
                            disclaimer
                        </Link>
                    </div>
                    <div className='footer__wrapper__footerItemList'>
                        <span className='footer__wrapper__footerItemList__header'>
                            Social links
                        </span>
                        <Link to='/mission' className='footer__wrapper__footerItemList__footerItem'>
                            Facebook
                        </Link>
                        <Link to='/vision' className='footer__wrapper__footerItemList__footerItem'>
                            Instagram
                        </Link>
                        <Link
                            to='/disclaimer'
                            className='footer__wrapper__footerItemList__footerItem'
                        >
                            LinkedIn
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
