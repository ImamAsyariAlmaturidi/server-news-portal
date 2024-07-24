const { comparePassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jsonwebtoken");
const { User } = require("../models/index");

class Controller {
  static async login(req, res, next) {
    const { email, password } = req.body;
    try {

      if (!password || !email) {
        throw { name: "InvalidLogin" };
      }

      const user = await User.findOne({
        where: { email },
      });

      if (!user) {
        throw { name: "LoginError" };
      }
      
      const passwordMatch = comparePassword(password, user.password);

      if (!passwordMatch) {
        throw { name: "LoginError" };
      }

      const payload = {
        username: user.username,
        email: user.email,
        role: user.role
      };


      const access_token = signToken(payload);
      res.status(200).json({ access_token });
    } catch (err) {
      // console.log(err)
      next(err)
    }
  }
}

module.exports = Controller;
