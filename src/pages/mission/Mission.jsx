import React from 'react';

// Scss files
import './Mission.scss';

const Mission = () => {
    return (
        <>
            <div className='missionHeroSection'>
                <img
                    src='https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
                    alt=''
                />
                <div className='missionHeroSection__content'>
                    <h1>Education is necessity for every Poor kid in India</h1>
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

export default Mission;