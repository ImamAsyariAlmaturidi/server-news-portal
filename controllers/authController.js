const { comparePassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jsonwebtoken");
const { User } = require("../models/index");

class Controller {
  static async login(req, res) {
    const { email, password } = req.body;
    try {

      if (!password || !email) {
        throw { message: "InvalidLogin" };
      }

      const user = await User.findOne({
        where: { email },
      });

      if (!user) {
        throw { message: "LoginError" };
      }
      
      const passwordMatch = comparePassword(password, user.password);

      if (!passwordMatch) {
        throw { message: "LoginError" };
      }

      const payload = {
        username: user.username,
        email: user.email,
        role: user.role
      };

      const access_token = signToken(payload);
      res.status(200).json({ access_token });
    } catch (error) {
        console.log(error)
      let message = "Internal server error";
      let status = 500;

      if (error.message === "InvalidLogin") {
        message = "Please input email and password";
        status = 401;
      }

      if (error.message === "LoginError") {
        message = "Invalid email or password";
        status = 401;
      }

      res.status(status).json({ message });
    }
  }
}

module.exports = Controller;
