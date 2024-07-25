[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=15442980&assignment_repo_type=AssignmentRepo)
# P2-Challenge-1 (Server Side)


> Tuliskan API Docs kamu di sini
API Documentation |
-------------------------------------------
# Product API Documentation

## Endpoint :

### List of available endpoints:

- **User**
  - POST /user/login
  - POST /user/add-user

- **Article**
  - GET /articles
  - POST /articles
  - GET /articles/:id
  - DELETE /articles/:id
  - PUT /articles/:id
  - PATCH /articles/:id

- **Category**
  - GET /categories
  - POST /categories
  - GET /categories/:id
  - DELETE /categories/:id
  - PUT /categories/:id

&nbsp;

# User

## 1. POST /user/login

### Request:

- **Body:**
  - email: string
  - password: string

### Responses:

- **201 - OK:**
  - access_token: string

- **400 - Bad Request:**
  - message: "Email or password is required"

- **401 - Unauthorized:**
  - message: "Invalid email/password"

&nbsp;

## 2. POST /user/add-user

### Request:

- **Body:**
  - email: string
  - password: string
  - username: string
  - phoneNumber: string
  - address: string

### Responses:

- **201 - Created:**
  - message: "Success create new user"
  - user:
    - email: string
    - password: string
    - username: string
    - phoneNumber: string
    - address: string

- **400 - Bad Request:**
  - message: 
    - "Email is required" 
    - OR "Invalid email format"
    - OR "Email must be unique"
    - OR "Username is required"
    - OR "Password is required"
    - OR "phoneNumber is required"
    - OR "Address is required"

&nbsp;

# Article

## 1. GET /articles

### Description:

- Get all articles from database

### Request:

- **Headers:**
  - access_token: string

### Responses:

- **200 - OK:**
  - Array of articles with properties:
    - title: string
    - content: string
    - imgUrl: string
    - categoryId: number
    - authorId: number

- **404 - Not Found:**
  - message: "There is no data / data empty"

&nbsp;

## 2. GET /articles/:id

### Description:

- Get article by ID from database

### Request:

- **Headers:**
  - access_token: string

- **Params:**
  - id: integer (required)

### Responses:

- **200 - OK:**
  - Article object with properties:
    - title: string
    - content: string
    - imgUrl: string
    - categoryId: number
    - authorId: number

- **404 - Not Found:**
  - message: "Article not found"

&nbsp;

## 3. POST /articles

### Description:

- Add article to database.

### Request:

- **Headers:**
  - access_token: string

- **Body:**
  - title: string
  - content: string
  - imgUrl: string
  - categoryId: number

### Responses:

- **200 - OK:**
  - message: "Success Add Article"
  - article:
    - title: string
    - content: string
    - imgUrl: string
    - categoryId: number

- **400 - Bad Request:**
  - message: "Invalid input"
  - OR "Validation error message"

&nbsp;

## 4. PUT /articles/:id

### Description:

- Update article in the database.

### Request:

- **Headers:**
  - access_token: string

- **Params:**
  - id: integer (required)

- **Body:**
  - title: string
  - content: string
  - imgUrl: string
  - categoryId: number

### Responses:

- **200 - OK:**
  - message: "Success Update Article"

- **400 - Bad Request:**
  - message: "Invalid input"
  - OR "Validation error message"

- **404 - Not Found:**
  - message: "Article not found"

&nbsp;

## 5. DELETE /articles/:id

### Description:

- Delete article by ID

### Request:

- **Headers:**
  - access_token: string

- **Params:**
  - id: integer (required)

### Responses:

- **200 - OK:**
  - message: "Article success to delete"

- **404 - Not Found:**
  - message: "Article not found"

&nbsp;

## 6. PATCH /articles/:id

### Description:

- Update partial article data (e.g., image)

### Request:

- **Headers:**
  - access_token: string

- **Params:**
  - id: integer (required)

- **Body:**
  - imgUrl: string

### Responses:

- **200 - OK:**
  - message: "Article image has been updated"

- **404 - Not Found:**
  - message: "Article not found"

&nbsp;

# Category

## 1. GET /categories

### Description:

- Get all categories from database

### Request:

- **Headers:**
  - access_token: string

### Responses:

- **200 - OK:**
  - Array of categories with properties:
    - name: string

- **400 - Not Found:**
  - message: "There is no data / data empty"

&nbsp;

## 2. GET /categories/:id

### Description:

- Get category by ID from database

### Request:

- **Headers:**
  - access_token: string

- **Params:**
  - id: integer (required)

### Responses:

- **200 - OK:**
  - Category object with properties:
    - name: string

- **404 - Not Found:**
  - message: "Category not found"

&nbsp;

## 3. POST /categories

### Description:

- Add category to database.

### Request:

- **Headers:**
  - access_token: string

- **Body:**
  - name: string

### Responses:

- **200 - OK:**
  - message: "Success Add Category"
  - category:
    - name: string

- **400 - Bad Request:**
  - message: "Invalid input"
  - OR "Validation error message"

&nbsp;

## 4. PUT /categories/:id

### Description:

- Update category in the database.

### Request:

- **Headers:**
  - access_token: string

- **Params:**
  - id: integer (required)

- **Body:**
  - name: string

### Responses:

- **200 - OK:**
  - message: "Success Update Category"

- **400 - Bad Request:**
  - message: "Invalid input"
  - OR "Validation error message"

- **404 - Not Found:**
  - message: "Category not found"

&nbsp;

## 5. DELETE /categories/:id

### Description:

- Delete category by ID

### Request:

- **Headers:**
  - access_token: string

- **Params:**
  - id: integer (required)

### Responses:

- **200 - OK:**
  - message: "Category success to delete"

- **404 - Not Found:**
  - message: "Category not found"

&nbsp;

# Global Error

### Responses:

- **401 - Unauthorized:**
  - message: "Invalid token"

- **500 - Internal Server Error:**
  - message: "Internal server error"

  &nbsp;

# Public Article

## 7. GET /public/articles?filter=1

### Description:

- Get articles with filter from database

### Request:

- **Query Parameters:**
  - filter: integer (optional)

### Responses:

- **200 - OK:**
  - data: Object

- **404 - Not Found:**
  - message: "There is no data / data empty"

...

## 8. GET /public/articles?page[number]=2&page[size]=2

### Description:

- Get paginated articles from database

### Request:

- **Query Parameters:**
  - page[number]: integer (optional)
  - page[size]: integer (optional)

### Responses:

- **200 - OK:**
  - data: Object

- **404 - Not Found:**
  - message: "There is no data / data empty"

...

## 9. GET /public/articles?search=keyword

### Description:

- Search articles in the database

### Request:

- **Query Parameters:**
  - search: string (optional)

### Responses:

- **200 - OK:**
  - data: Object

- **404 - Not Found:**
  - message: "There is no data / data empty"

...

## 10. GET /public/articles?sort=field_name

### Description:

- Sort articles in the database

### Request:

- **Query Parameters:**
  - sort: string (optional)

### Responses:

- **200 - OK:**
  - data: Object

- **404 - Not Found:**
  - message: "There is no data / data empty"

...

## 11. GET /public/articles?filter=1&sort=field_name&page[number]=2&page[size]=2&search=keyword

### Description:

- Filter, sort, paginate, and search articles in the database

### Request:

- **Query Parameters:**
  - filter: integer (optional)
  - sort: string (optional)
  - page[number]: integer (optional)
  - page[size]: integer (optional)
  - search: string (optional)

### Responses:

- **200 - OK:**
  - data: Object

- **404 - Not Found:**
  - message: "There is no data / data empty"

...