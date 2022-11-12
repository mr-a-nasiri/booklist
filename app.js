const titleInput = document.getElementById('title'),
  authorInput = document.getElementById('author'),
  isbnInput = document.getElementById('isbn');

const bookList = document.getElementById('book-list');

// Book class
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
// UI Class
class UI {
  static addBook(book) {
    bookList.innerHTML += `
      <tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><span class='remove'>X</span></td>
      </tr>`;

    titleInput.value = '';
    authorInput.value = '';
    isbnInput.value = '';
  }

  static removeBook(target) {
    if (target.className === 'remove') {
      target.parentElement.parentElement.remove();
    }
  }

  static showAlert(message, type) {
    document.getElementById('message').innerHTML = `
    <div class='alert ${type}'>${message}</div>`;

    setTimeout(function () {
      document.querySelector('.alert').remove();
    }, 3000);
  }
}

document.getElementById('book-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const title = titleInput.value,
    author = authorInput.value,
    isbn = isbnInput.value;

  if (title.trim() === '' || author.trim() === '' || isbn.trim() === '') {
    UI.showAlert('Please fill all fields', 'error');
  } else {
    const book = new Book(title, author, isbn);
    UI.addBook(book);
  }
});

bookList.addEventListener('click', function (e) {
  UI.removeBook(e.target);
});
