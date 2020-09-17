import React from 'react';

// Scss files
import './Milestone.scss';

const Milestone = ({ year, milestoneHeading, milestoneDesc }) => {
    return (
        <div className='milestone'>
            <div className='milestone__yearAndMilestone'>
                <span className='subtitle'>{year}</span>
                <h1>{milestoneHeading}</h1>
            </div>
            <p className='milestone__additionalInfo'>{milestoneDesc}</p>
        </div>
    );
};

export default Milestone;
