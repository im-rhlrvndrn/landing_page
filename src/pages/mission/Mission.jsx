import React from 'react';

// Scss files
import './Mission.scss';

const Mission = () => {
    return (
        <>
            <div className='missionHeroSection'>
                <h1 className="missionHeroSection__title">Education is right of every children</h1>
                <img
                    src='https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
                    alt=''
                />
                <div className='missionHeroSection__content'>
                    <h1>Mission</h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora beatae
                        quisquam, corporis fugiat deleniti dolores! Corporis quia quis commodi
                        dicta, magnam provident iste accusantium eveniet ullam, itaque modi, velit
                        quas!
                    </p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus distinctio deleniti perspiciatis quasi quas dicta fugit. Voluptas ex mollitia veniam reprehenderit nemo, doloribus suscipit incidunt autem soluta similique, possimus qui!</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed laborum obcaecati iste quo sint reiciendis aperiam adipisci beatae nemo voluptas deserunt tenetur eligendi earum labore, placeat temporibus voluptatem impedit consectetur.</p>
                </div>
                <div className="missionHeroSection__cta">
                    <h2>Start Contributing to growth of Indian Economy</h2>
                    <p className="cta">Donate 1$ Now</p>
                </div>
            </div>
        </>
    );
};

export default Mission;