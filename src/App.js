import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import PopularSearchButton from './ components/popularSearchButton';
import SearchButton from './ components/SearchButton';
import BookSearchInput from './ components/BookSearchInput';

function App() {
    async function fetchGoogleBooksAPI(url) {
        try {
            const response = await fetch(url)
            const json = await response.json()
    
            document.getElementById("searchTitleResults").innerHTML = ""
    
            for (var bookResult = 0; bookResult < json.items.length; bookResult++) {
                var bookTitle = json.items[bookResult]
                // line of code from https://developers.google.com/books/docs/v1/getting_started
                document.getElementById("searchTitleResults").innerHTML += "<br>" + bookTitle.volumeInfo.title
            }
        } catch (err) {
            console.log("could not fetch book search")
            document.getElementById("searchTitleResults").innerHTML += "<br>" +  "No books found."
        }
    }
    
    const handleSearch = () => {
        setLittlePrinceButtonColor('')
        setLordOfRingsButtonColor('')
        setHarryPotterButtonColor('')
        const bookTitleInput = searchInput
        const formattedBookTitleInput = bookTitleInput.replace(/\s+/g, '+');
        const url = `https://www.googleapis.com/books/v1/volumes?q=${formattedBookTitleInput}`
        console.log(url)
        fetchGoogleBooksAPI(url)
    }
    
    const handleHarryPotterSearch = () => {
        setLittlePrinceButtonColor('')
        setLordOfRingsButtonColor('')
        setHarryPotterButtonColor('black')
        const bookTitleInput = "harry+potter"
        const url = `https://www.googleapis.com/books/v1/volumes?q=${bookTitleInput}`
        console.log(url)
        fetchGoogleBooksAPI(url)
    }
    const handleLordOfRingsSearch = () => {
        setLittlePrinceButtonColor('')
        setLordOfRingsButtonColor('black')
        setHarryPotterButtonColor('')
        const bookTitleInput = "the+lord+of+the+rings"
        const url = `https://www.googleapis.com/books/v1/volumes?q=${bookTitleInput}`
        console.log(url)
        fetchGoogleBooksAPI(url)
    }
    const handleLittlePrinceSearch = () => {
        setLittlePrinceButtonColor('black')
        setLordOfRingsButtonColor('')
        setHarryPotterButtonColor('')
        const bookTitleInput = "the+little+prince"
        const url = `https://www.googleapis.com/books/v1/volumes?q=${bookTitleInput}`
        console.log(url)
        fetchGoogleBooksAPI(url)
    }

    const [harryPotterButtonColor, setHarryPotterButtonColor] = useState('')
    const [lordOfRingsButtonColor, setLordOfRingsButtonColor] = useState('')
    const [littlePrinceButtonColor, setLittlePrinceButtonColor] = useState('')
    const [searchInput, setSearchInput] = useState('')
    
    return (
        <div onLoad={() => handleHarryPotterSearch()}>
        <img src={require('./photos/book_archive_logo.png')} id="logo" alt="Book Archive logo"/>
        <div className="row">
            <div className="col-9">
                <BookSearchInput setSearchInput={setSearchInput}/>
            </div>
            <div className="col">
                <SearchButton handleSearchClick={handleSearch} />
            </div>
        </div>
        <div className="row">
            <h4>Popular Searches</h4>
        </div>
        <div className="row">
            <div className="col-4">
                <PopularSearchButton
                    buttonTitle={"Harry Potter"}
                    handlePopularSearch={handleHarryPotterSearch}
                    buttonColor={harryPotterButtonColor} /> 
            </div>
            <div className="col-4">
            <PopularSearchButton
                    buttonTitle={"The Lord of the Rings"}
                    handlePopularSearch={handleLordOfRingsSearch}
                    buttonColor={lordOfRingsButtonColor} /> 
            </div>
            <div className="col-4">
            <PopularSearchButton
                    buttonTitle={"The Little Prince"}
                    handlePopularSearch={handleLittlePrinceSearch}
                    buttonColor={littlePrinceButtonColor} /> 
            </div>
        </div>
        <div className="row">
            <div className="row" id="searchTitleResults"></div>
        </div>
        <script src="script.js"></script>
    </div>
    )
}
export default App;
