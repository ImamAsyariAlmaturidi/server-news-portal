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
