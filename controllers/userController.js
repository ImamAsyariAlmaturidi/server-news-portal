const { User } = require("../models/index");
class Controller {
  static async createUser(req, res, next) {
    const { username, email, password, address, phoneNumber } = req.body;
    try {
      const newUser = await User.create({
        username,
        email,
        password,
        address,
        phoneNumber,
      });
      res.status(201).json({
        statusCode: 201,
        data: newUser,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
