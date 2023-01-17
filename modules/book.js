export default class Book {
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