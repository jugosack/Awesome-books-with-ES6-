/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
import './modules/date.js';
import './modules/view.js';
import './modules/bookform.js';
import './modules/book.js';
import './modules/showbook.js';




 //Show Books on the first load
  const toDisplay = new ShowBooks();
  toDisplay.iterateBooks();
  
  
  