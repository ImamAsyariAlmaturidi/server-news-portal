[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=15442980&assignment_repo_type=AssignmentRepo)
# P2-Challenge-1 (Server Side)

> Tuliskan API Docs kamu di sini
API Documentation

The API provides endpoints to manage articles, categories, and user authentication.

-ARTICLE ENDPOINT-

>Get All Articles
>Get a list of all articles.

URL: /article
Method: GET

>Get Article by ID
>Get a specific article by its ID.

URL: /article/:id
Method: GET

>Create New Article
>Create a new article.
URL: /article
Method: POST
Request Body:
{
  "title": "New Article",
  "content": "Lorem ipsum dolor sit amet.",
  "author": "John Doe"
}


>Update Article
>Update an existing article by its ID.

URL: /article/:id
Method: PUT
Request Body:
{
  "title": "Updated Article Title"
}

-CATEGORY ENDPOINT-
>Get All Categories
>Get a list of all categories.

URL: /category
Method: GET

>Create New Category
>Create a new category.

URL: /category
Method: POST
Request Body:
{
  "name": "Sports"
}

>Update Category
>Update an existing category by its ID.

URL: /category/:id
Method: PUT
Request Body:
{
  "name": "Updated Category Name"
}


-USER ENDPOINT-
>User Login
>Authenticate a user.

URL: /user/login
Method: POST
Request Body:
{
  "username": "john_doe",
  "password": "password123"
}

