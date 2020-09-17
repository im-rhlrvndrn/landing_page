import React from 'react';

// Scss files
import './Home.scss';

const Home = () => {
    return (
        <>
            <div className='heroSection'>
                <div className='heroSection__heroSectionWrapper'>
                    <div className='heroSection__heroSectionWrapper__heroSectionContent'>
                        <h1>
                            Invest in the platform, <wbr /> where you have total control over your
                            business
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio autem
                            aperiam deserunt. Deserunt voluptatibus suscipit, inventore alias id non
                            quod debitis mollitia labore similique ab consequatur tempore? Eum,
                            doloremque dicta?
                        </p>
                        <div className='inputGroup'>
                            <input
                                type='email'
                                name='newsletter'
                                id='newsletter'
                                placeholder='Enter your email'
                            />
                            <p className='cta'>get started</p>
                        </div>
                    </div>
                    <img
                        src='https://images.unsplash.com/photo-1600185947497-9efadf13d099?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
                        alt=''
                    />
                </div>
            </div>
        </>
    );
};

export default Home;
