import React from 'react';

// Scss files
import './Vision.scss';

const Vision = () => {
    return (
        <>
            <div className='visionHeroSection'>
                <img
                    src='https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80'
                    alt=''
                />
                <div className='visionHeroSection__content'>
                    <h1>Every Indian is Skilled</h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora beatae
                        quisquam, corporis fugiat deleniti dolores! Corporis quia quis commodi
                        dicta, magnam provident iste accusantium eveniet ullam, itaque modi, velit
                        quas!
                    </p>
                </div>
            </div>
        </>
    );
};

export default Vision;