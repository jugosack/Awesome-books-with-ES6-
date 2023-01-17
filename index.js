/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
import './modules/date.js';
import './modules/view.js';
import './modules/bookform.js';



 class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.books = [];
    this.booksContainer = document.getElementById('books-container');
  }

  // eslint-disable-next-line class-methods-use-this
  storeBook(book) {
    localStorage.setItem('data-books', JSON.stringify(book));
  }

  getBooks() {
    if (!localStorage.getItem('data-books')) {
      this.books = [];
    } else {
      this.books = JSON.parse(localStorage.getItem('data-books'));
    }
    return this.books;
  }

  addBook(book) {
    const recoveredBooks = this.getBooks();
    recoveredBooks.push(book);
    this.storeBook(recoveredBooks);
  }

  removeBook(title, author) {
    this.books = this.books.filter((book) => book.title !== title || book.author !== author);
  }
}

export default class ShowBooks extends Book {
  displayBook(book) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    const pTitle = document.createElement('p');
    pTitle.textContent = `"${book.title}" by ${book.author}`;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('btn', 'btn-outline-danger');

    bookCard.append(pTitle, removeBtn);
    this.booksContainer.appendChild(bookCard);

    removeBtn.addEventListener('click', () => {
      this.removeBook(book.title, book.author);
      this.storeBook(this.books);
      this.booksContainer.removeChild(bookCard);
    });
  }

  iterateBooks() {
    this.books = JSON.parse(localStorage.getItem('data-books'));
    this.books.map((book) => this.displayBook(book));
  }
}


// Show Books on the first load
const toDisplay = new ShowBooks();
toDisplay.iterateBooks();
