const users = require('express').Router();
const {
  getUsers,
  getUser,
  updateAvatar,
  updateUserInfo,
  getUserInfo,
} = require('../controllers/users');

const {
  idValidation,
  userInfoValidation,
  userAvatarValidation,
} = require('../middlewares/validation');

users.get('/', getUsers);
users.get('/me', getUserInfo);
users.get('/:id', idValidation, getUser);
users.patch('/me', userInfoValidation, updateUserInfo);
users.patch('/me/avatar', userAvatarValidation, updateAvatar);

module.exports = users;
