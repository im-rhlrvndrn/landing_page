import React from 'react';

// Scss files
import './Objectives.scss';

const Objectives = () => {
    return (
        <>
            <div className='objectivesHeroSection'>
                <img
                    src='https://images.unsplash.com/photo-1516685304081-de7947d419d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80'
                    alt=''
                />
                <div className='objectivesHeroSection__content'>
                    <h1>Every Indian is Graduated</h1>
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

export default Objectives;