const request = require("supertest");
const app = require("../app");
const { sequelize } = require("../models/index");

// afterAll(async () => {
//     await sequelize.queryInterface.bulkDelete('Users', null, { truncate: true, cascade: true, restartIdentity: true })
// })

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
