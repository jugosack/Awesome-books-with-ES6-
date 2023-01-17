
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