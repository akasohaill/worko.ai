// src/dtos/userDTO.js
// const Joi = require('joi');
import Joi from 'joi'

const userSchema = Joi.object({
    email: Joi.string().email().required(),
    name: Joi.string().required(),
    age: Joi.number().required(),
    city: Joi.string().required(),
    zipCode: Joi.string().required()
});

const userUpdateSchema = Joi.object({
    email: Joi.string().email(),
    name: Joi.string(),
    age: Joi.number(),
    city: Joi.string(),
    zipCode: Joi.string()
});

const userIdSchema = Joi.object({
    userId: Joi.string().required()
});

module.exports = {
    userSchema,
    userUpdateSchema,
    userIdSchema
};
