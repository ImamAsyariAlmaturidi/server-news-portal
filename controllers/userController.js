const { User } = require("../models/index");
class Controller {
  static async getUser(req, res) {
    try {
      const users = await User.findAll();

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
      if (
        error.name === "SequelizeValidationError" ||
        error.name === "SequelizeUniqueConstraintError"
      ) {
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
      });

      if (!user) {
        throw { message: "ErrorNotFound" };
      }

      res.status(200).json({
        statusCode: 200,
        message: "OK",
        data: user,
      });
      
    } catch (error) {
      if (error) {
        res.status(404).json({ message: error.message });
      } else {
        res.status(500).json({ message: "internal server error" });
      }
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
