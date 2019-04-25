# MyBookshelf

### Introduction 

MyBookshelf is a reading tracker application to keep record of the book I am reading. It serves as virtual shelves of three kind: `For Later`, `In Progress` and `Completed` shelves.

### Built With

Back End  
* AWS DynamoDB  
* AWS Lambda  
* AWS API Gateway  

Front End  
* JavaScript
* jQuery
* HTML 
* CSS

### Setup 

You can run this app on your machine by following the instructions below:  
* `git clone git@github.com:clairebvs/my_bookshelf.git`  
* `npm install`  
* `npm start`  
* `http://localhost:8080/` to run your application.

### The Application 

<img width="1437" alt="Screen Shot 2019-04-25 at 10 15 16 AM" src="https://user-images.githubusercontent.com/34726107/56758166-37f10680-6753-11e9-838f-c5d01ef05da1.png">

### API Endpoints

API Endpoints written using AWS API Gateway. 
`GET` `https://hyhr9kcpu4.execute-api.us-east-2.amazonaws.com/production/books` 

~~~~
{
  statusCode: 200,
  headers: {
   Access-Control-Allow-Origin: "*"
  },
  body: [
    {
      shelf: 0,
      id: 2,
      title: "Learn Java the easy way",
      author: "Bryson Payne"
    },
    {
      shelf: 1,
      id: 1,
      title: "Eloquent Ruby",
      author: "Russ Olsen"
    }
  ]
}
~~~~

