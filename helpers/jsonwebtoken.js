const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY
const signToken = (payload) => {
  return jwt.sign(payload, secretKey);
};

const verifyToken = (token) => {
  return jwt.verify(token, secretKey)
}
module.exports = { signToken , verifyToken};
 