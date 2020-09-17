import React from 'react';
import Milestone from '../../components/Milestone/Milestone';

// Scss files
import './About.scss';

const About = () => {
    return (
        <>
            <div className='aboutHeroSection'>
                <img
                    src='https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80'
                    alt=''
                />
                <div className='aboutHeroSection__content'>
                    <h1>About us</h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora beatae
                        quisquam, corporis fugiat deleniti dolores! Corporis quia quis commodi
                        dicta, magnam provident iste accusantium eveniet ullam, itaque modi, velit
                        quas!
                    </p>
                </div>
            </div>

            <div className='overTheYearsSection'>
                <div className='overTheYearsSection__wrapper'>
                    <div className='overTheYearsSection__wrapper__mainHeader'>
                        <span className='subtitle'>Our Story</span>
                        <h1>Over the years</h1>
                    </div>
                    <div className='overTheYearsSection__wrapper__container'>
                        <Milestone
                            year='1999'
                            milestoneHeading='Founded'
                            milestoneDesc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                                sit eius, deserunt recusandae vel quidem? Quidem vero dolorem ipsam
                                quam ipsa unde error quisquam. Reiciendis?'
                        />

                        <Milestone
                            year='2002'
                            milestoneHeading='Top growth oriented company award'
                            milestoneDesc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                                sit eius, deserunt recusandae vel quidem? Quidem vero dolorem ipsam
                                quam ipsa unde error quisquam. Reiciendis?'
                        />
                    </div>
                </div>
            </div>

            <div className='becomeOurPartSection'>
                <div className='becomeOurPartSection__gridContainer'>
                    <img
                        src='https://images.unsplash.com/photo-1507537417841-81e85feb9bd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
                        alt=''
                    />
                    <img
                        src='https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
                        alt=''
                    />
                    <div className='becomeOurPartSection__gridContainer__content'>
                        <span className='subtitle'>Gallery</span>
                        <h1>become part of our story</h1>
                    </div>
                    <img
                        src='https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE3MzYxfQ&auto=format&fit=crop&w=1051&q=80'
                        alt=''
                    />
                    <img
                        src='https://images.unsplash.com/photo-1566258124199-8ff94ca38182?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
                        alt=''
                    />
                    <img
                        src='https://images.unsplash.com/photo-1511376979163-f804dff7ad7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80'
                        alt=''
                    />
                </div>
            </div>
        </>
    );
};

export default About;
