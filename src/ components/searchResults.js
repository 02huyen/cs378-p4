import React from 'react';

const SearchResult = ({ bookTitles }) => {
    return (
        <>        
            {bookTitles.map((title, index) => (
                <p key={title + index}>{title}</p>
            ))
            }
        </>
    )
}
export default SearchResult
