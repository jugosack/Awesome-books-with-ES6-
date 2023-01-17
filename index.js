/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
import './modules/date.js';
import './modules/view.js';


class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
      this.books = [];
      this.booksContainer = document.getElementById('books-container');
    }
  
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
  
  class ShowBooks extends Book {
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
  
  const bookForm = document.getElementById('books');
  bookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    if (!title || !author) {
      alert('Please enter a Title and Author first');
      return;
    }
    const book = new ShowBooks();
    book.displayBook({ title, author });
    book.addBook({ title, author });
    
    //book.addEventListener(listHandler);
    
   // title.value = '';
   // author.value = '';
    bookForm.reset();
   
  });
  
 //Show Books on the first load
  const toDisplay = new ShowBooks();
  toDisplay.iterateBooks();
  
  
  /*const currentData = new Date();
  document.getElementById('current-time').innerHTML = currentData;*/
  
  /** ******* JUGOSLAV'S CODE *********************************** */
  /*
  const listLink = document.getElementById('listLink');
  const addBookLink = document.getElementById('addBookLink');
  const contactLink = document.getElementById('contactLink');
  
  const contactSection = document.getElementById('contact-section');
  const addBookSection = document.getElementById('form-books');
  const booksSection = document.getElementById('books-added');
  
  function listHandler(event) {
    event.preventDefault();
    listLink.style.color = 'white';
    addBookLink.style.color = '#D6D6D6';
    contactLink.style.color = '#D6D6D6';
    booksSection.style.display = 'block';
    addBookSection.style.display = 'none';
    contactSection.style.display = 'none';
  }
  
  function addBookHandler(event) {
    event.preventDefault();
    listLink.style.color = '#D6D6D6';
    addBookLink.style.color = 'white';
    contactLink.style.color = '#D6D6D6';
    booksSection.style.display = 'none';
    addBookSection.style.display = 'flex';
    contactSection.style.display = 'none';
  }
  
  function contactHandler(event) {
    event.preventDefault();
    listLink.style.color = '#D6D6D6';
    addBookLink.style.color = '#D6D6D6';
    contactLink.style.color = 'white';
    booksSection.style.display = 'none';
    addBookSection.style.display = 'none';
    contactSection.style.display = 'block';
  }
   

  listLink.addEventListener('click', listHandler);
  addBookLink.addEventListener('click', addBookHandler);
  contactLink.addEventListener('click', contactHandler);
  
  contactSection.style.display = 'none';
  addBookSection.style.display = 'none';
  */
 