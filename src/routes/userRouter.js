// src/routes/userRoutes.js
import express from 'express';
import userController from '../controllers/userController.js';
import { validate, validateParams } from '../middlewares/validate.js';
import { userSchema, userUpdateSchema, userIdSchema } from '../dtos/userDTO.js';
import authenticate from '../middlewares/authMiddleware.js';

const router = express.Router();

router.use(authenticate);

router.get('/worko/user', userController.getUsers);
router.get('/worko/user/:userId', validateParams(userIdSchema), userController.getUserById);
router.post('/worko/user', validate(userSchema), userController.createUser);
router.put('/worko/user/:userId', validateParams(userIdSchema), validate(userUpdateSchema), userController.updateUser);
router.patch('/worko/user/:userId', validateParams(userIdSchema), validate(userUpdateSchema), userController.updateUser);
router.delete('/worko/user/:userId', validateParams(userIdSchema), userController.deleteUser);

export default router;
