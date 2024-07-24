const request = require("supertest");
const app = require("../app");
const { sequelize } = require("../models/index");
const articles = require('../datas/article.json')
const categories = require('../datas/category.json')
const users = require('../datas/user.json');
const { hashsingPassword } = require("../helpers/bcrypt");
const { signToken } = require('../helpers/jsonwebtoken');

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

describe("POST /user/login", () => {
  describe("POST /user/login - success", () => {
    it("should be return an object with message and token", async () => {
      const response = await request(app)
        .post("/user/login")
        .send({ email: "imam@gmail.com", password: "imam" });
      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body).toHaveProperty("access_token", expect.any(String));
    });
  });

  describe("POST /user/login - failed", () => {
    it("should be return an object with message", async () => {
      const response = await request(app)
        .post("/user/login")
        .send({ email: "", password: "imam" });
      expect(response.status).toBe(401);
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body).toHaveProperty("message", expect.stringContaining("Please input email or password"))
    });
  });

  describe("POST /user/login - failed", () => {
    it("should be return an object with message", async () => {
      const response = await request(app)
        .post("/user/login")
        .send({ email: "imam@gmail.com", password: "" });
      expect(response.status).toBe(401);
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body).toHaveProperty("message", expect.stringContaining("Please input email or password"))
    });
  });

  describe("POST /user/login - failed", () => {
    it("should be return an object with message", async () => {
      const response = await request(app)
        .post("/user/login")
        .send({ email: "imam@gmaadwdadwail.com", password: "imam" });
      expect(response.status).toBe(401);
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body).toHaveProperty("message", expect.stringContaining("Invalid email or password"))
    });
  });

  describe("POST /user/login - failed", () => {
    it("should be return an object with message", async () => {
      const response = await request(app)
        .post("/user/login")
        .send({ email: "imam@gmail.com", password: "immmmmmm" });
       
      expect(response.status).toBe(401);
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body).toHaveProperty("message", expect.stringContaining("Invalid email or password"))

    });
  });
});
