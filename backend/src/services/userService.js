const { users } = require('../database/models');

const userService = {
  getAll: async () => {
    const usersList = await users.findAll();
  return usersList;
  },
}

module.exports = userService;
