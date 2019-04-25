var api_url = 'https://hyhr9kcpu4.execute-api.us-east-2.amazonaws.com/production/books'

$('#shelves').on('click', function () {
  getBookData()
})

const getBookData = () => {
  fetch(`${api_url}`)
    .then(response => response.json())
    .then(data => populateBookData(data))
    .catch(error => console.error({error}));
}

const populateBookData = (data) => {
  var i = 0
  for (i = 0; i < 10; i++) {
      title = data.body[i].title;
      author = data.body[i].author;
      if (data.body[i].shelf === 0) {
        shelf = 'For Later';
      } else if (data.body[i].shelf === 1) {
        shelf = 'In progress';
      } else {
        shelf = 'Completed';
      }

  $('#books-list').append(`<tr>
    <td class='book-title'>${title}</td>
    <td class='book-author'>${author} </td>
    <td class='book-shelf'>${shelf} </td></tr>`)
	  }
  }
