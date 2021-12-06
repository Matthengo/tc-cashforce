const { User } = require('../database/models');

const getUserById = async (id) => {
  const user = await User.findByPk(id);
  return user;
}

module.exports = {
  getUserById,
}