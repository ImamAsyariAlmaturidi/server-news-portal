const request = require("supertest");
const app = require("../app");
const { sequelize } = require("../models/index");
const articles = require('../datas/article.json')
const categories = require('../datas/category.json')
const users = require('../datas/user.json');
const { hashsingPassword } = require("../helpers/bcrypt");
const { signToken } = require('../helpers/jsonwebtoken');
const { INTEGER } = require("sequelize");

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

     access_token = signToken(payload)

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

});
