// src/daos/userDao.js
// const User = require('../models/userModel');
import User from '../models/userModel.js'

const getUsers = async () => {
    return await User.find({ isDeleted: false });
};

const getUserById = async (userId) => {
    return await User.findById(userId).where({ isDeleted: false });
};

const createUser = async (userData) => {
    const user = new User(userData);
    return await user.save();
};

const updateUser = async (userId, userData) => {
    return await User.findByIdAndUpdate(userId, userData, { new: true }).where({ isDeleted: false });
};

const deleteUser = async (userId) => {
    return await User.findByIdAndUpdate(userId, { isDeleted: true }, { new: true });
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
