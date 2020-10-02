import React from 'react';

// Scss files
import './Vision.scss';

const Vision = () => {
    return (
        <>
            <div className='visionHeroSection'>
                <div className="visionHeroSection__header">
                    <img
                        src='https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80'
                        alt=''
                    />
                    <h1>Keep their dreams alive...</h1>
                </div>
                <div className='visionHeroSection__content'>
                    <h1>Vission</h1>
                    <div className='visionHeroSection__content__gridContainer'>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora beatae
                            quisquam, corporis fugiat deleniti dolores! Corporis quia quis commodi
                            dicta, magnam provident iste accusantium eveniet ullam, itaque modi, velit
                            quas!
                        </p>
                        <img
                            src='https://images.unsplash.com/photo-1524081081171-7960da1de373?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
                            alt=''
                        />
                        <img
                            src='https://images.unsplash.com/photo-1467307983825-619715426c70?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=670&q=80'
                            alt=''
                        />
                        <img
                            src='https://images.unsplash.com/photo-1517330357046-3ab5a5dd42a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
                            alt=''
                        />
                        <img
                            src='https://images.unsplash.com/photo-1591278169022-4eac0c7d1e3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
                            alt=''
                        />
                    </div>
                </div>
                <div className="visionHeroSection__cta">
                    <h2>Start Contributing to growth of Indian Economy</h2>
                    <p className="cta">Donate 1$ Now</p>
                </div>
            </div>
        </>
    );
};

export default Vision;