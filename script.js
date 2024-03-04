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
    const bookTitleInput = document.getElementById("searchBar").value.toLowerCase()
    const formattedBookTitleInput = bookTitleInput.replace(/\s+/g, '+');
    const url = `https://www.googleapis.com/books/v1/volumes?q=${formattedBookTitleInput}`
    console.log(url)
    fetchGoogleBooksAPI(url)
}

const handleHarryPotterSearch = () => {
    const bookTitleInput = "harry+potter"
    const url = `https://www.googleapis.com/books/v1/volumes?q=${bookTitleInput}`
    console.log(url)
    fetchGoogleBooksAPI(url)
}
const handleLordOfRingsSearch = () => {
    const bookTitleInput = "the+lord+of+the+rings"
    const url = `https://www.googleapis.com/books/v1/volumes?q=${bookTitleInput}`
    console.log(url)
    fetchGoogleBooksAPI(url)
}
const handleLittlePrinceSearch = () => {
    const bookTitleInput = "the+little+prince"
    const url = `https://www.googleapis.com/books/v1/volumes?q=${bookTitleInput}`
    console.log(url)
    fetchGoogleBooksAPI(url)
}
