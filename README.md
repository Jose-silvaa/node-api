# Node API

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

## Description

This project is an API built using NodeJS, MongoDB as the database, and JWT for authentication control.

The API simulates the functionality of an expense control.

## API Endpoints

### Users

Obs : All routes below require the preceding route __/visitor__

```bash
GET  /users - Fetches a comprehensive list of all users, below we have an example of a response

[
    {
	 "_id": "664fe48a1c027a3bd0f8235e",
	 "name": "silva",
	 "email": "franklin@gmail.com",
	 "createdAt": "2024-05-24T00:51:22.140Z",
	 "__v": 0
	}    
]

```

```bash

POST /newUser - Register a new user, below we have a necessary example body

{
	"name" : "Franklin",
	"email" : "franklin@gmail.com"
}

```

```bash

PUT /update/:id - Update a user, below we have a necessary example body

{
	"name" : "silva"
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

