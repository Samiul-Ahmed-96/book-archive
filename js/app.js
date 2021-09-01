//get the books from api
const loadBooks = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    //clear search field value
    searchField.value = '';
    const url = `http://openlibrary.org/search.json?q=${searchText}`;
    //call the api and get the response
    fetch(url)
    .then(res => res.json())
    //pass the data in another function
    .then(data => getBooks(data.docs))
}

//show books in the books container
const getBooks = (books) =>{
    const booksArray = books;
    const bookLength = books.length;
    const booksContainer = document.getElementById('books-container');
    //Clear the container
    booksContainer.textContent = ' ';
    //get the book using for each
    booksArray.forEach(book => {
        console.log(book)
        //create a new div
        const bookDiv = document.createElement('div');
        bookDiv.classList.add("book-details");
        //insert the value in the new div
        bookDiv.innerHTML = `
        <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" alt="">
        <h2>Name:${book.title}</h2>
        <h3>Author:${book.author_name}</h3>
        <h4>First Publish : ${book.first_publish_year}</h4>
        
        `
        //Insert the div into books container
        booksContainer.appendChild(bookDiv);
    });
} 