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
