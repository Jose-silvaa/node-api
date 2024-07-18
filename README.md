# Node API

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

## Description

This project is an API built using NodeJS, MongoDB as the database, and JWT for authentication control.

The API simulates the functionality of an expense control.

## API Endpoints

### Users

Obs : All routes below require the preceding route __/visitor__

```bash
GET /user/:username - This route allows the user to fetch a specific user based on their username.
```

```bash
GET /user/:email - This route allows the user to fetch a specific user based on their email.
```

```bash
GET  /users - This is a protected route and requires an accessToken to be passed in the header. Additionally, it only returns the user who is logged in to the system

[
  {
		"_id": "66998ae58a0dc10c474633df",
		"username": "jose",
		"email": "jose@gmail.com",
		"password": '"$2b$10$JTv3HYZELJC/J565SYemvu.6VXl4OkrHZPYtbJ1qvsz8qOjHMX5uu',
		"createdAt": "2024-07-18T21:36:37.491Z",
		"__v": 0
	}
]

```

```bash

POST /newUser - Register a new user, below we have a necessary example body

{
  {
	  "username" : "jose",
	  "email" : "jose@gmail.com",
	  "password": "abcdefghij"
  }
}

```
```bash
 POST /user/login  - This route allows the user to log in, below we have a necessary example body and response

  BODY 

  {
    "username" : "jose",
    "password" : "senhausuario"
  }

  RESPONSE 
  {
	  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicGFzc3dvcmQiOiJpbml0IiwiZW1haWwiOiJpbml0IiwidXNlcm5hbWUiOiJpbml0IiwiX2lkIjoiaW5pdCIsImNyZWF0ZWRBdCI6ImluaXQiLCJfX3YiOiJpbml0In0sInN0YXRlcyI6eyJyZXF1aXJlIjp7fSwiaW5pdCI6eyJf"
  }
```


```bash

PUT /update/:id - Update a user, below we have a necessary example body

{
	"username" : "jose vitor"
}

```

```bash
DELETE /delete/:id - Delete a user, below we have an example of a response.

{
  "message": "User delete successfully"
}
```



### Expense

Obs : All routes below require the preceding route __/cost__

```bash
GET  /expense - Fetches a list of all expenses, below we have an example of a response.

{
 "expenses": [
   {
	"_id": "665a3e5cdc52c5983b544be2",
	"price": 40.25,
	"description": "The price is cheaper",
	"category": "Soda",
	"status": "Unpaid",
	"createAt": "2024-05-31T21:17:16.580Z",
	"__v": 0
   }
  ]
}
```

```bash
POST /newExpense - Create a new expense, below we have a necessary example body.

{
  "price" : 3,
  "description" : "The price is more cheaper",
  "category" : "Candy",
  "status" : "Will Pay Next Month"
}
```

```bash
PUT /update/:id - Update a expense, below we have a necessary example body

{
  "status" : "Paid"
}
```


```bash

DELETE /delete/:id - Delete a expense, below we have an example of a response.

{
  "message": "Expense delete successfully"
}
```





## Licença

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

