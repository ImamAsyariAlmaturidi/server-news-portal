[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=15442980&assignment_repo_type=AssignmentRepo)
# P2-Challenge-1 (Server Side)

> Tuliskan API Docs kamu di sini
API Documentation |
for mostly endpoint need login first
-------------------------------------------
**Login Endpoints**
**URL:** `/user/login`
**Response:**
  - Status Code: 200 (OK)
  - Body: TOKEN`

-------------------------------------------
but you can access article without login first

-------------------------------------------
**Public Endpoints**



**Article Endpoints**
**URL:** `/public/article`

**Response:**
  - Status Code: 200 (OK)
  - Body: An array of JSON objects representing articles. Each object includes properties like `id`, `title`, `content`, `imgUrl` `authorId`, `categoryId` (include table user): `user`

**Example Response:*

```json
{
  "statusCode": 200,
  "message": "OK",
  "data": [
    {
      "id": 1,
      "title": "Mbappe Real Madrid",
      "content": "Mbappe masuk real madrid pada tanggal 16 july 2024",
      "imgUrl": "https://akcdn.detik.net.id/community/media/visual/2024/07/16/momen-mbappe-resmi-diperkenalkan-real-madrid-sebagai-pemain-baru-6_169.jpeg?w=600&q=90",
      "categoryId": 1,
      "authorId": 1,
      "createdAt": "2024-07-22T13:28:18.569Z",
      "updatedAt": "2024-07-22T13:28:18.569Z",
      "User": {
        "username": "imam",
        "email": "imam@gmail.com",
        "phoneNumber": "081234567",
        "address": "example street"
      }
    }
  ]
}

```


**Article By Id Endpoints**
**URL:** `/public/article/:id`

**Response:**
  - Status Code: 200 (OK)
  - Body: An array of JSON objects representing articles. Each object includes properties like `id`, `title`, `content`, `imgUrl` `authorId`, `categoryId` (include table user): `user`

**Example Response:*

```json
{
  "statusCode": 200,
  "message": "OK",
  "data": [
    {
      "id": 1,
      "title": "Mbappe Real Madrid",
      "content": "Mbappe masuk real madrid pada tanggal 16 july 2024",
      "imgUrl": "https://akcdn.detik.net.id/community/media/visual/2024/07/16/momen-mbappe-resmi-diperkenalkan-real-madrid-sebagai-pemain-baru-6_169.jpeg?w=600&q=90",
      "categoryId": 1,
      "authorId": 1,
      "createdAt": "2024-07-22T13:28:18.569Z",
      "updatedAt": "2024-07-22T13:28:18.569Z",
      "User": {
        "username": "imam",
        "email": "imam@gmail.com",
        "phoneNumber": "081234567",
        "address": "example street"
      }
    }
  ]
}

```
-------------------------------------------
* **Get All Articles**
> Retrieves a list of all articles.

**URL:** `/article`
**Method:** GET
**Response:**
  - Status Code: 200 (OK)
  - Body: An array of JSON objects representing articles. Each object includes properties like `id`, `title`, `content`, `imgUrl` `authorId`, `categoryId` (include table user): `user`

**Example Response:*

```json
{
  "statusCode": 200,
  "message": "OK",
  "data": [
    {
      "id": 1,
      "title": "Mbappe Real Madrid",
      "content": "Mbappe masuk real madrid pada tanggal 16 july 2024",
      "imgUrl": "https://akcdn.detik.net.id/community/media/visual/2024/07/16/momen-mbappe-resmi-diperkenalkan-real-madrid-sebagai-pemain-baru-6_169.jpeg?w=600&q=90",
      "categoryId": 1,
      "authorId": 1,
      "createdAt": "2024-07-22T13:28:18.569Z",
      "updatedAt": "2024-07-22T13:28:18.569Z",
      "User": {
        "username": "imam",
        "email": "imam@gmail.com",
        "phoneNumber": "081234567",
        "address": "example street"
      }
    }
  ]
}
```

* **Get Articles By ID**
> Retrieves a articles where id same.


**URL:** `/article/:id`
**Method:** GET
**Response:**
  - Status Code: 200 (OK)
  - Body: An array of JSON objects representing articles by id. Each object includes properties like `id`, `title`, `content`, `imgUrl` `authorId`, `categoryId` (include table user): `user`

**Example Response:*

```json
{
  "statusCode": 200,
  "message": "OK",
  "data": [
    {
      "id": 1,
      "title": "Mbappe Real Madrid",
      "content": "Mbappe masuk real madrid pada tanggal 16 july 2024",
      "imgUrl": "https://akcdn.detik.net.id/community/media/visual/2024/07/16/momen-mbappe-resmi-diperkenalkan-real-madrid-sebagai-pemain-baru-6_169.jpeg?w=600&q=90",
      "categoryId": 1,
      "authorId": 1,
      "createdAt": "2024-07-22T13:28:18.569Z",
      "updatedAt": "2024-07-22T13:28:18.569Z",
      "User": {
        "username": "imam",
        "email": "imam@gmail.com",
        "phoneNumber": "081234567",
        "address": "example street"
      }
    }
  ]
}
```

* **Create Articles**
> Retrieves a new article.


**URL:** `/article`
**Method:** POST
**Response:**
  - Status Code: 201 (OK)
  - Body: An array of JSON objects representing new articles after create.
**Example Response:*

```json
{
  "statusCode": 201,
  "message": "OK",
  "data": [
    {
      "id": 1,
      "title": "Mbappe Real Madrid",
      "content": "Mbappe masuk real madrid pada tanggal 16 july 2024",
      "imgUrl": "https://akcdn.detik.net.id/community/media/visual/2024/07/16/momen-mbappe-resmi-diperkenalkan-real-madrid-sebagai-pemain-baru-6_169.jpeg?w=600&q=90",
      "categoryId": 1,
      "authorId": 1,
      "createdAt": "2024-07-22T13:28:18.569Z",
      "updatedAt": "2024-07-22T13:28:18.569Z",
      "User": {
        "username": "imam",
        "email": "imam@gmail.com",
        "phoneNumber": "081234567",
        "address": "example street"
      }
    }
  ]
}
```

* **Get All Articles**
> Retrieves a new articel after edit/put.


**URL:** `/article/:id`
**Method:** PUT
**Response:**
  - Status Code: 200 (OK)
  - Body: An array of JSON objects representing articles after put/update.
**Example Response:*

```json
{
  "statusCode": 200,
  "message": "OK",
  "data": [
    {
      "id": 1,
      "title": "Mbappe Man City",
      "content": "Mbappe Masuk Man City pada tanggal 20 july 2004",
      "imgUrl": "https://akcdn.detik.net.id/community/media/visual/2024/07/16/momen-mbappe-resmi-diperkenalkan-real-madrid-sebagai-pemain-baru-6_169.jpeg?w=600&q=90",
      "categoryId": 1,
      "authorId": 1,
      "createdAt": "2024-07-22T13:28:18.569Z",
      "updatedAt": "2024-07-22T13:28:18.569Z",
      "User": {
        "username": "imam",
        "email": "imam@gmail.com",
        "phoneNumber": "081234567",
        "address": "example street"
      }
    }
  ]
}
```
-------------------------------------------
**Category Endpoints**

* **Get All Category**
> Retrieves a list of all category.

**URL:** `/category`
**Method:** GET
**Response:**
  - Status Code: 200 (OK)
  - Body: An array of JSON objects representing articles. Each object includes properties like `id`, `name`, `createdAt`, `updatedAt`

**Example Response:*

```json
{
  "statusCode": 200,
  "message": "OK",
  "data": [
    {
      "name" : "e-sports"
    }
  ]
}
```

* **Create Category**
> Retrieves a new article.

**URL:** `/category`
**Method:** POST
**Response:**
  - Status Code: 201 (OK)
  - Body: An array of JSON objects representing new category after create.
**Example Response:*

```json
{
  "statusCode": 201,
  "message": "OK",
  "data": [
    {
     "name": "sports"
    }
  ]
}
```

* **Create Articles**
> Retrieves a new article.


**URL:** `/category/:id`
**Method:** DELETE
**Response:**
  - Status Code: 200 (OK)
  - message: "${category} success to delete".
**Example Response:*

```json
{
  "statusCode": 200,
  "message": "sports success to delete",
}
```
* **Update Category**
> Retrieves a Category after edit/put.

**URL:** `/category/:id`
**Method:** PUT
**Response:**
  - Status Code: 200 (OK)
  - Body: An array of JSON objects representing articles after put/update.
**Example Response:*

```json
{
  "statusCode": 200,
  "message": "OK",
  "data": [
   {
    "name" : "e-sport mobile legends"
   }
  ]
}
```



