const { User } = require("../models/index");
class Controller {
  static async getUser(req, res) {
    try {
      const users = await User.findAll({
        attributes: ["username", "email", "phoneNumber", "address"],
      });

      res.status(200).json({
        statusCode: 200,
        message: "success get all users",
        data: users,
      });
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  }

  static async createUser(req, res) {
    const { username, email, password, phoneNumber, address } = req.body;
    try {
      await User.create({
        username,
        email,
        password,
        phoneNumber,
        address,
      });

      res.status(201).json({
        statusCode: 201,
        message: `Success create user ${username}`,
      });
    } catch (error) {
      if (error.name === "SequelizeUniqueConstraintError") {
        res.status(400).json({ message: error.errors[0].message });
      }
      if (error.name === "SequelizeValidationError") {
        res.status(400).json({ message: error.errors[0].message });
      }
      res.status(500).json({ message: "internal server error" });
    }
  }

  static async getUserById(req, res) {
    const id = req.params.id;
    try {
      const user = await User.findOne({
        where: {
          id,
        },
        attributes: ["username", "email", "phoneNumber", "address"],
      });

      if (!user) {
        throw { message: "error not found" };
      }

      res.status(200).json({
        statusCode: 200,
        message: "OK",
        data: user,
      });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  static async deleteUserById(req, res) {
    const id = req.params.id;
    try {
      const userId = await User.findByPk(id);

      await User.destroy({
        where: {
          id: userId.id,
        },
      });

      res.status(200).json({
        statusCode: 200,
        message: `User ${userId.username} success to delete`,
      });
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  }
}

module.exports = Controller;
