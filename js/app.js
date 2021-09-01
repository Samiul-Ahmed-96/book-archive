//get the books from api
const loadBooks = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    const url = `http://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => getBooks(data.docs))
}

const getBooks = (books) =>{
    console.log(books)
} 