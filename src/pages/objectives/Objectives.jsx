import React from 'react';

// Scss files
import './Objectives.scss';

const Objectives = () => {
    return (
        <>
            <div className='objectivesHeroSection'>
                <div className='objectivesHeroSection__header'>
                    <h1> OUR OBJECTIVE</h1>
                    <img
                    src='https://images.unsplash.com/photo-1516685304081-de7947d419d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80'
                    alt=''
                    />
                </div>
                <div className="objectivesHeroSection__content">
                    <ul className="objectivesHeroSection__content__main">
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
                        <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
                    </ul>
                    <div className="objectivesHeroSection__content__rightSide">
                        <h2>Our Work</h2>
                        <div className="group">
                            <img
                            src='https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
                            alt=''
                            />
                            <h3>Corona crises: our response</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi officiis qui unde sit sed delectus nesciunt, quaerat?</p>
                        </div>
                        <div className="group">
                            <img
                            src='https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
                            alt=''
                            />
                            <h3>Corona crises: our response</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
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

export default Objectives;