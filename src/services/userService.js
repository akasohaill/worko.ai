// src/services/userService.js
// const userDao = require('../daos/userDao');
import userDao from '../daos/userDao.js'

const getUsers = async () => {
    return await userDao.getUsers();
};

const getUserById = async (userId) => {
    return await userDao.getUserById(userId);
};

const createUser = async (userData) => {
    return await userDao.createUser(userData);
};

const updateUser = async (userId, userData) => {
    return await userDao.updateUser(userId, userData);
};

const deleteUser = async (userId) => {
    return await userDao.deleteUser(userId);
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
