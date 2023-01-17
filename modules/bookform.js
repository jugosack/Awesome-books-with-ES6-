import ShowBooks from './showbook.js';

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