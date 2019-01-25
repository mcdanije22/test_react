import React from 'react';

const CtcCard = ({card})=>{
    const {test1, test2} = card;
    return (
        <div>
            <h1>
                {test1}
            </h1>
            <h2>
                {test2}
            </h2>
        </div>
    )
};
export default CtcCard;