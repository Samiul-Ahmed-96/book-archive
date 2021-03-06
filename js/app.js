
const error = document.getElementById('error-show');
const totalItem = document.getElementById('total-item-show');
//get the books from api
const loadBooks = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    totalItem.innerText = '';
    //clear search field value
    searchField.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    //error handle
    if(searchText === ""){
        error.innerText = 'search field cannot be empty';
        return;
    }
    //call the api and get the response
    fetch(url)
    .then((res) => res.json())
    //pass the data in another function
    .then((data) => {
    //error handle
    if(data.offset === null){
        error.innerText = 'No Result Found';
    }else if(data.offset !== null){
        error.innerText = '';
    }
    getBooks(data.docs);  
   
    })
    
}

//show books in the books container
const getBooks = (books) =>{
    
    const booksArray = books;
    const bookLength = books.length;
    totalItem.innerText ='Total Item Found : '+bookLength;
    const booksContainer = document.getElementById('books-container');
    //Clear the container
    booksContainer.textContent = ' ';
    //get the book using for each
    booksArray.forEach(book => {
        error.innerText = '';
        //create a new div
        const bookDiv = document.createElement('div');
        bookDiv.classList.add("book-details");
        //insert the value in the new div
        bookDiv.innerHTML = `
        <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" alt="">
        <h2>Name: ${book.title}</h2>
        <h3>Author: ${book.author_name[0]}</h3>
        <h5>Publisher: ${book.publisher[0]}</h5>
        <h4>First Publish : ${book.first_publish_year}</h4>
        `
        //Insert the div into books 
        booksContainer.appendChild(bookDiv);
    });
} 