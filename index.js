function bookSearch(event) {
  event.preventDefault();

  var booksInStore = [
    {
      name: "Dracula",
      author: "Bram Stoker",
      ISBN: 9781853260865,
      available: 5,
    },
    {
      name: "Dune",
      author: "Frank Herbert",
      ISBN: 9780593099322,
      available: 15,
    },
    {
      name: "Harry Potter and the Philosopher's Stone",
      author: "J.K. Rowling",
      ISBN: 9781408855652,
      available: 25,
    },
    {
      name: "Inkheart",
      author: "Cornelia Funke",
      ISBN: 9781912626847,
      available: 0,
    },
    {
      name: "Stardust",
      author: "Neil Gaiman",
      ISBN: 9780755322824,
      available: 11,
    },
    {
      name: "The Hobbit : or There and Back Again",
      author: "J. R. R. Tolkien",
      ISBN: 9780261102217,
      available: 4,
    },
  ];

  function retrieveBookInfo(index) {
    if (booksInStore[index].available === 0) {
      alert("Out of stock");
    } else if (booksInStore[index].available < 10) {
      alert("Low stock");
    } else {
      alert("In stock!");
    }
    let placeholder = document.querySelector(`#book-input`);
    placeholder.value = ``;
  }

  let chosenBook = document.querySelector(`#book-input`).value;
  for (let i = 0; i < booksInStore.length; i++) {
    if (chosenBook === booksInStore[i].name) {
      retrieveBookInfo(i);
    }
  }
}

let form = document.querySelector(`#book-choice`);
form.addEventListener("submit", bookSearch);
