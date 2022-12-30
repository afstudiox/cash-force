const userService = require('../services/userService');

const userController = {
  getAll: async (req, res) => {
    const userList = await userService.getAll();
    res.status(200).json(userList);
  },
} 

module.exports = userController;