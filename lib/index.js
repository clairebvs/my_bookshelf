var api_url = 'https://dyntnvwx3a.execute-api.us-east-2.amazonaws.com/production/getAllBooks'

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
  for (i = 0; i < 10; i++) {
      title = data[i].title;
      author = data[i].author;
      shelf = data[i].shelf;
  $('#books-list').append(`<tr>
    <td class='book-title'>${title}</td>
    <td class='book-author'>${author} </td>
    <td class='book-shelf'>${shelf} </td></tr>`)
	  }
  }
