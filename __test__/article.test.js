const request = require("supertest");
const app = require("../app");
const { sequelize } = require("../models/index");
const articles = require('../datas/article.json')
const categories = require('../datas/category.json')
const users = require('../datas/user.json');
const { hashsingPassword } = require("../helpers/bcrypt");
const { signToken, verifyToken } = require('../helpers/jsonwebtoken');


let access_token;
let access_token_staff;
beforeAll(async () => {
    const user = users.map((el) => {

        el.createdAt = new Date();
        el.updatedAt = new Date();
        el.password = hashsingPassword(el.password)
        return el;
      });
      await sequelize.queryInterface.bulkInsert("Users", user, {});

      const category = categories.map((el) => {
        el.createdAt = new Date();
        el.updatedAt = new Date();
        return el;
      });
      await sequelize.queryInterface.bulkInsert("Categories", category, {});

    const article = articles.map((el) => {
        el.createdAt = new Date();
        el.updatedAt = new Date();
        return el
      });
      await sequelize.queryInterface.bulkInsert("Articles", article, {});

      const payload = {
        username: "imam",
        email: "imam@gmail.com",
        role: "Admin"
      }

      const payloadStaff = {
        username: "athif",
        email: "athif@gmail.com",
        role: "Staff"
      }

     access_token = signToken(payload)
     access_token_staff = signToken(payloadStaff)
})

afterAll(async () => {
    await sequelize.queryInterface.bulkDelete('Users', null, { truncate: true, cascade: true, restartIdentity: true })
    await sequelize.queryInterface.bulkDelete('Categories', null, { truncate: true, cascade: true, restartIdentity: true })
    await sequelize.queryInterface.bulkDelete('Articles', null, { truncate: true, cascade: true, restartIdentity: true })
})


describe("POST /article", () => {
  describe("POST /article - succes", () => {
    it("should be return a message and new data article", async () => {
        const body = {
            title : "ronaldo",
            content: "ronaldo makan seblak",
            imgUrl: "https://akcdn.detik.net.id/community/media/visual/2024/07/16/momen-mbappe-resmi-diperkenalkan-real-madrid-sebagai-pemain-baru-6_169.jpeg?w=600&q=90",
            categoryId: 1,
            authorId: 1
        }

        const response = await request(app).post("/article").set('Authorization', `Bearer ${access_token}`).send(body)
        expect(response.status).toBe(201)
        expect(response.body).toBeInstanceOf(Object)
        expect(response.body).toHaveProperty("data", expect.any(Object))
    });
  });

  describe("POST /article - failed", () => {
    it("should be return a error message", async () => {
        const body = {
            title : "ronaldo",
            content: "ronaldo makan seblak",
            imgUrl: "https://akcdn.detik.net.id/community/media/visual/2024/07/16/momen-mbappe-resmi-diperkenalkan-real-madrid-sebagai-pemain-baru-6_169.jpeg?w=600&q=90",
            categoryId: 1,
            authorId: 1
        }

        const response = await request(app).post("/article").send(body)
        expect(response.status).toBe(401)
        expect(response.body).toBeInstanceOf(Object)
        expect(response.body).toHaveProperty("message", `Please login first`)
    });
  });

  describe("POST /article - article", () => {
    it("should be return a error message", async () => {
        const body = {
            title : "ronaldo",
            content: "ronaldo makan seblak",
            imgUrl: "https://akcdn.detik.net.id/community/media/visual/2024/07/16/momen-mbappe-resmi-diperkenalkan-real-madrid-sebagai-pemain-baru-6_169.jpeg?w=600&q=90",
            categoryId: 1,
            authorId: 1
        }
        const response = await request(app).post("/article").set('Authorization', `Bearer adwdawdadawdawd`).send(body)
        expect(response.status).toBe(401)
        expect(response.body).toBeInstanceOf(Object)
        expect(response.body).toHaveProperty("message", `Please login first`)
    });
  });

  describe("POST /article - article", () => {
    it("should be return a message and new data article", async () => {
        const body = {
            content: "ronaldo makan seblak",
            imgUrl: "https://akcdn.detik.net.id/community/media/visual/2024/07/16/momen-mbappe-resmi-diperkenalkan-real-madrid-sebagai-pemain-baru-6_169.jpeg?w=600&q=90",
            categoryId: 1,
            authorId: 1
        }

        const response = await request(app).post("/article").set('Authorization', `Bearer ${access_token}`).send(body)
        expect(response.status).toBe(400)
        expect(response.body).toBeInstanceOf(Object)
        expect(response.body).toHaveProperty("message", expect.any(String))
    });
  });


  describe("PUT /article/:id - article", () => {
    it("should be return a message and new data article", async () => {
        const body = {
            title: "ashbahs",
            content: "ronaldo makan seblak",
            imgUrl: "https://akcdn.detik.net.id/community/media/visual/2024/07/16/momen-mbappe-resmi-diperkenalkan-real-madrid-sebagai-pemain-baru-6_169.jpeg?w=600&q=90",
            categoryId: 1,
            authorId: 1
        }

        const response = await request(app).put("/article/1").set('Authorization', `Bearer ${access_token}`).send(body)
        expect(response.status).toBe(200)
        expect(response.body).toBeInstanceOf(Object)
        expect(response.body).toHaveProperty("data", expect.any(Object))
    });
  });

  describe("PUT /article/:id - article", () => {
    it("should be return a message and new data article", async () => {
        const body = {
            title: "ashbahs",
            content: "ronaldo makan seblak",
            imgUrl: "https://akcdn.detik.net.id/community/media/visual/2024/07/16/momen-mbappe-resmi-diperkenalkan-real-madrid-sebagai-pemain-baru-6_169.jpeg?w=600&q=90",
            categoryId: 1,
            authorId: 1
        }

        const response = await request(app).put("/article/1").send(body)
        expect(response.status).toBe(401)
         // expect(response.body).toBeInstanceOf(Object)
        expect(response.body).toHaveProperty("message", 'Please login first')
    });
  });

  describe("PUT /article/:id - article", () => {
    it("should be return a message", async () => {
        const body = {
            title: "ashbahs",
            content: "ronaldo makan seblak",
            imgUrl: "https://akcdn.detik.net.id/community/media/visual/2024/07/16/momen-mbappe-resmi-diperkenalkan-real-madrid-sebagai-pemain-baru-6_169.jpeg?w=600&q=90",
            categoryId: 1,
            authorId: 1
        }

        const response = await request(app).put("/article/1").set('Authorization', `Bearer adwdjahwduw`).send(body)
        expect(response.status).toBe(401)
        // expect(response.body).toBeInstanceOf(Object)
        expect(response.body).toHaveProperty("message", 'Please login first')
    });
  });

  describe("PUT /article/:id - article", () => {
    it("should be return a message", async () => {
        const body = {
            title: "ashbahs",
            content: "ronaldo makan seblak",
            imgUrl: "https://akcdn.detik.net.id/community/media/visual/2024/07/16/momen-mbappe-resmi-diperkenalkan-real-madrid-sebagai-pemain-baru-6_169.jpeg?w=600&q=90",
            categoryId: 1,
            authorId: 1
        }

        const response = await request(app).put("/article/200").set('Authorization', `Bearer ${access_token}`).send(body)
        expect(response.status).toBe(404)
        expect(response.body).toBeInstanceOf(Object)
        expect(response.body).toHaveProperty("message", 'Data not found')
    });
  });

  describe("PUT /article/:id - article", () => {
    it("should be return a message error", async () => {
        const body = {
            title: "ashbahs",
            content: "ronaldo makan seblak",
            imgUrl: "https://akcdn.detik.net.id/community/media/visual/2024/07/16/momen-mbappe-resmi-diperkenalkan-real-madrid-sebagai-pemain-baru-6_169.jpeg?w=600&q=90",
            categoryId: 1,
            authorId: 1
        }

        const response = await request(app).put("/article/1").set('Authorization', `Bearer ${access_token_staff}`).send(body)
        expect(response.status).toBe(403)
        expect(response.body).toBeInstanceOf(Object)
        expect(response.body).toHaveProperty("message", 'You dont have any access')
    });
  });

  describe("PUT /article - article", () => {
    it("should be return a message error validate input", async () => {
        const body = {
            content: "ronaldo makan seblak",
            imgUrl: "https://akcdn.detik.net.id/community/media/visual/2024/07/16/momen-mbappe-resmi-diperkenalkan-real-madrid-sebagai-pemain-baru-6_169.jpeg?w=600&q=90",
            categoryId: 1,
            authorId: "ajwdjbw"
        }

        const response = await request(app).put("/article/1").set('Authorization', `Bearer ${access_token}`).send(body)
        expect(response.status).toBe(400)
        expect(response.body).toBeInstanceOf(Object)
        expect(response.body).toHaveProperty("message", 'Invalid input')
    });
  });

  describe("DELETE /article - article", () => {
    it("should be return a message error", async () => {
    
        const response = await request(app).delete("/article/1").set('Authorization', `Bearer ${access_token}`)
        expect(response.status).toBe(200)
        expect(response.body).toBeInstanceOf(Object)
        expect(response.body).toHaveProperty("message", expect.any(String))
    });
  });

  describe("DELETE /article - article", () => {
    it("should be return a message error login", async () => {
    
        const response = await request(app).delete("/article/1")
        expect(response.status).toBe(401)
        expect(response.body).toBeInstanceOf(Object)
        expect(response.body).toHaveProperty("message", 'Please login first')
    });
  });

  describe("DELETE /article - article", () => {
    it("should be return a message error", async () => {
    
        const response = await request(app).delete("/article/1").set('Authorization', `Bearer ahshwb`)
        expect(response.status).toBe(401)
        expect(response.body).toBeInstanceOf(Object)
        expect(response.body).toHaveProperty("message", expect.any(String))
    });
  });

  describe("DELETE /article - article", () => {
    it("should be return a message error", async () => {
    
        const response = await request(app).delete("/article/200").set('Authorization', `Bearer ${access_token}`)
        expect(response.status).toBe(404)
        expect(response.body).toBeInstanceOf(Object)
        expect(response.body).toHaveProperty("message", 'Data not found')
    });
  });

  describe("DELETE /article - article", () => {
    it("should be return a message error", async () => {
    
        const response = await request(app).delete("/article/3").set('Authorization', `Bearer ${access_token_staff}`)
        expect(response.status).toBe(403)
        expect(response.body).toBeInstanceOf(Object)
        expect(response.body).toHaveProperty("message", 'You dont have any access')
    });
  });

  describe("GET/article - article", () => {
    it("should be return a message and data", async () => {
    
        const response = await request(app).get("/public/article/2")
        expect(response.status).toBe(200)
        expect(response.body).toBeInstanceOf(Object)
        expect(response.body).toHaveProperty("data", expect.any(Object))
    });
  });

  describe("GET/article - article", () => {
    it("should be return a message and data", async () => {
    
        const response = await request(app).get("/public/article/1")
        expect(response.status).toBe(404)
        expect(response.body).toBeInstanceOf(Object)
        expect(response.body).toHaveProperty("message", 'Data not found')
    });
  });

  describe("GET/article - article", () => {
    it("should be return a message and data", async () => {
    
        const response = await request(app).get("/public/article")
        expect(response.status).toBe(200)
        expect(response.body).toBeInstanceOf(Object)
        expect(response.body).toHaveProperty("data", expect.any(Object))
    });
  });

  describe("GET/article - article", () => {
    it("should be return a message and data", async () => {
    
        const response = await request(app).get("/public/article/?filter=1")
        expect(response.status).toBe(200)
        expect(response.body).toBeInstanceOf(Object)
        expect(response.body).toHaveProperty("data", expect.any(Object))
    });
  });

  describe("GET/article - article", () => {
    it("should be return a message and data", async () => {
    
        const response = await request(app).get("/public/article/?page[number]=2&page[size]=2")
        expect(response.status).toBe(200)
        expect(response.body).toBeInstanceOf(Object)
        expect(response.body).toHaveProperty("data", expect.any(Object))
    });
  });

});
