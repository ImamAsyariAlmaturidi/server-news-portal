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

      const user = await User.findOne({
        where: {
          email: newUser.email
        },
        attributes: ['id', 'username', 'email', "phoneNumber", 'address']
      })

      res.status(201).json({
        statusCode: 201,
        data: user,
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
