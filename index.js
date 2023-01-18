import './modules/date.js';
import './modules/view.js';
import ShowBooks from './modules/showbook.js';

const bookForm = document.getElementById('books');
bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title');
  const author = document.getElementById('author');

  if (!title || !author) {
    alert('Please enter a Title and Author first');
    return;
  }
  const book = new ShowBooks();
  book.displayBook({ title: title.value, author: author.value });
  book.addBook({ title: title.value, author: author.value });
  bookForm.reset();
});

// Show Books on the first load
const toDisplay = new ShowBooks();
toDisplay.iterateBooks();
