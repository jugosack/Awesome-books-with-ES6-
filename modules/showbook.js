
import Book from './book.js';

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