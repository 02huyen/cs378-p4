import React from 'react';

const PopularSearchButton = ({buttonTitle, buttonColor, handlePopularSearch}) => {
    return (
        <button 
            className="btn btn-secondary" 
            onClick={() => handlePopularSearch()}
            style={
                {
                    backgroundColor: buttonColor
                }
            }>{buttonTitle}</button>
    )
}
export default PopularSearchButton