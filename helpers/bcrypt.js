const bcrypt = require("bcryptjs");

const hashsingPassword = (pass) => {
  const salt = bcrypt.genSaltSync(10);
  const newPassword = bcrypt.hashSync(pass, salt);
  return newPassword;
};

const comparePassword = (pass) => {
  const result = bcrypt.compareSync(pass);
  return result;
};

module.exports = {
  hashsingPassword,
  comparePassword,
};
