var bookList = [
  
    {
        id: 1,
        title: "The God of Small Things",
        author: "Arundhati Roy",
        year: 1997,
        imageUrl: "https://anylang.net/sites/default/files/styles/book_image/public/covers/god-small-things_1.jpg?itok=M2gaKTiC",
        link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
    },
    {
        id: 2,
        title: "The God of Small Things",
        author: "Arundhati Roy",
        year: 1997,
        imageUrl: "https://anylang.net/sites/default/files/styles/book_image/public/covers/god-small-things_1.jpg?itok=M2gaKTiC",
        link: "https://en.wikipedia.org/wiki/The_God_of_Small_Things"
    },
];

function createBookCard(book) {
    var bookElement = document.createElement('div');
    bookElement.className = 'book-card';
    bookElement.innerHTML = `
        <button class="delete-button" onclick="deleteBook(${book.id})">&times;</button>
        <img src="${book.imageUrl}" alt="${book.title}">
        <div class="book-info">
            <h3 class="book-title">${book.title}</h3>
            <p class="book-author">By ${book.author}</p>
            <p class="book-year">First published: ${book.year}</p>
            <a href="${book.link}" class="read-more" target="_blank">Read More</a>
        </div>
    `;
    return bookElement;
}

function displayBooks() {
    var bookGrid = document.getElementById('bookGrid');
    bookGrid.innerHTML = '';
    bookList.forEach(function (book) {
        var card = createBookCard(book);
        bookGrid.appendChild(card);
    });
}

function deleteBook(bookId) {
    bookList = bookList.filter(function (book) {
        return book.id !== bookId;
    });
    displayBooks();
}

function addNewBook() {
   let  doc_title = document.getElementById('bookTitle').value;
   let  doc_author = document.getElementById('bookAuthor').value;
   let  doc_year = parseInt(document.getElementById('bookYear').value);
   let  doc_imageUrl = document.getElementById('bookImage').value;
   let  doc_link = document.getElementById('bookLink').value;

    var newBook = {
        id: bookList.length + 1,
        title: doc_title,
        author: doc_author,
        year: doc_year,
        imageUrl: doc_imageUrl,
        link: doc_link
    };

    //adding books list
    bookList.push(newBook);
    displayBooks();
    //reset form
    document.getElementById('bookForm').reset();
    modal();
}

function modal() {
    var form = document.getElementById('addBookForm');
    var addButton = document.getElementById('addBookButton');
    if (form.style.display === 'none') {
        form.style.display = 'block';
        addButton.textContent = 'Cancel';
    } else {
        form.style.display = 'none';
        addButton.textContent = 'Add Book';
    }
}

function searchBooks() {
    var searchText = document.getElementById('searchInput').value.toLowerCase();
    var filteredBooks = bookList.filter(function (book) {
        return book.title.toLowerCase().includes(searchText) ||
         book.author.toLowerCase().includes(searchText);
    });

    //after fillterd  new arrays  list

    var bookGrid = document.getElementById('bookGrid');
    bookGrid.innerHTML = '';
    filteredBooks.forEach(function (book) {
        var card = createBookCard(book);
        bookGrid.appendChild(card);
    });
}

displayBooks();
