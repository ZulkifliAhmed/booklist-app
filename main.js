let theAuthor = document.getElementById("author"),
  theTitel = document.getElementById("titel"),
  theNumber = document.getElementById("isbn"),
  submitBtn = document.getElementById("submitBtn");

// create books
class Book {
  constructor(author, titel, isbn) {
    this.author = author;
    this.titel = titel;
    this.isbn = isbn;
  }
}

// handeling ui
class Ui {
  // show data
  showData(book) {
    let list = document.querySelector(".bookList"),
      row = document.createElement("tr");
    row.innerHTML = `
      <td>${book.author}</td>
      <td>${book.titel}</td>
      <td>${book.isbn}</td>
      <td>
      <div class="delete">
      <i class="fa-regular fa-trash-can"></i>
      </div>
     </td>
   `;
    list.appendChild(row);
  }

  //clear the input after add
  clearData() {
    theAuthor.value = "";
    theTitel.value = "";
    theNumber.value = "";
  }

  // show alert messiges
  showAlert(mesg, name) {
    let div = document.createElement("div");
    div.className = `alert ${name}`;
    div.appendChild(document.createTextNode(mesg));
    let container = document.querySelector(".container");
    let form = document.querySelector(".bookForm");
    container.insertBefore(div, form);
    setTimeout(() => {
      document.querySelector(".done").remove();
    }, 1000);
  }

  //delete book from ui
  deleteBook(target) {
    target.parentElement.parentElement.remove();
  }
}

submitBtn.addEventListener("click", function (e) {
  let bookAuthor = theAuthor.value,
    bookTitel = theTitel.value,
    bookNumber = theNumber.value,
    book = new Book(bookAuthor, bookTitel, bookNumber),
    ui = new Ui();
  if (bookAuthor === "" && bookTitel === "" && bookNumber === "") {
    ui.showAlert("ples enter some information", "done");
  } else {
    ui.showData(book);
    ui.clearData();
    ui.showAlert("the book was added", "done");
  }
  e.preventDefault();
});

// delete handeling
document.addEventListener("click", function (e) {
  if (e.target.className == "delete") {
    let ui = new Ui();
    ui.showAlert("the book was removed", "done delete");
    ui.deleteBook(e.target);
  }
});
