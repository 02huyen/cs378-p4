import React from 'react';

const BookSearchInput = ({setSearchInput}) => {
    const handleInputChange = (event) => {
        setSearchInput(event.target.value)
    }
    return (
        <input 
            className="form-control form-control-lg" 
            id="searchBar" 
            placeholder="Book Name Here..." 
            onChange={handleInputChange} />
    )
}
export default BookSearchInput