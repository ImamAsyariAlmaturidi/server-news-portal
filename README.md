[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=15442980&assignment_repo_type=AssignmentRepo)
# P2-Challenge-1 (Server Side)

> Tuliskan API Docs kamu di sini
API Documentation

**Article Endpoints**

* **Get All Articles**
> Retrieves a list of all articles.

**URL:** `/article`
**Method:** GET
**Response:**
  - Status Code: 200 (OK)
  - Body: An array of JSON objects representing articles. Each object includes properties like `id`, `title`, `content`, `author`, `category` (if applicable), and `createdAt` (timestamp).

**Example Response:**

```json
[
    {
        "id": 1,
        "title": "Introduction to APIs",
        "content": "This article provides an overview of...",
        "author": "Jane Smith",
        "category": "Tech",
        "createdAt": "2024-07-23T00:00:00.000Z"
    },
    {
        "id": 2,
        "title": "Building a CRUD API",
        "content": "Learn how to create...",
        "author": "John Doe",
        "category": "Development",
        "createdAt": "2024-07-22T23:59:00.000Z"
    }
]
