import React from 'react';

const SearchButton = ({handleSearchClick}) => {
    return (
        <button className="btn btn-dark" id="searchButton" onClick={() => handleSearchClick()}>Search</button>
    )
}
export default SearchButton