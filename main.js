const user_input = document.querySelector("input");
const button = document.querySelector("button");
const responseDiv = document.querySelector("#results");

button.addEventListener('click', async () => {
  event.preventDefault();
  const term = user_input.value;
  const apiUrl = `https://cors-anywhere.herokuapp.com/goodreads-server-express--dotdash.repl.co/search/${term}`;
  const response = await axios.get(apiUrl);
  console.log(response.data.list);
  const books = response.data.list;
  books.forEach(book => { 
    console.log(book);
    const bookItem = document.createElement('div');
    bookItem.innerHTML = `
          <p>${book.authorName}</p>
          <p>${book.title}</p>
          <img src=${book.imageUrl}/>
          <hr/>
      `;
    responseDiv.append(bookItem);
  })
});