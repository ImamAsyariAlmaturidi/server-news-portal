const { User } = require("../models/index");
class Controller {
  static async getUser(req, res) {
    try {
      const users = await User.findAll();
      res.status(200).json({
        statusCode: 200,
        message: "OK",
        data: users,
      });
    } catch (error) {
      res.status(500).json({ message: "internal server error" });
    }
  }
}

module.exports = Controller;
