# Node.js Backend API Project Report

## Project Overview

This project involves the creation of a Node.js backend API with a Model-View-Controller (MVC) architecture. The API performs CRUD operations on a `user` resource, including listing users, fetching user details by ID, creating, updating, and deleting users. Additionally, basic authentication and validation mechanisms are implemented.

## Project Structure

The project structure follows the MVC pattern, organizing the code into controllers, services, data access objects (DAOs), models, and routes. The directory structure is as follows:

```
nodejs-backend/
├── src/
│   ├── controllers/
│   │   └── userController.js
│   ├── services/
│   │   └── userService.js
│   ├── daos/
│   │   └── userDao.js
│   ├── models/
│   │   └── userModel.js
│   ├── dtos/
│   │   └── userDTO.js
│   ├── routes/
│   │   └── userRoutes.js
│   ├── middlewares/
│   │   ├── validate.js
│   │   └── authMiddleware.js
│   ├── utils/
│   │   └── db.js
│   └── app.js
├── tests/
│   └── userService.test.js
├── .env
├── .gitignore
├── package.json
├── babel.config.js
├── jest.config.js
└── README.md
```

## API Endpoints

The API provides the following endpoints for the `user` resource:

- **GET /api/worko/user**: List all users.
- **GET /api/worko/user/:userId**: Get user details by ID.
- **POST /api/worko/user**: Create a new user.
- **PUT /api/worko/user/:userId**: Update a user.
- **PATCH /api/worko/user/:userId**: Partially update a user.
- **DELETE /api/worko/user/:userId**: Soft delete a user.

## Payload and Validation

### User Payload

The user payload includes the following fields:
- `id` (generated)
- `email` (validated)
- `name`
- `age`
- `city`
- `zip code` (validated)

### Validation

Validation is handled using the `Joi` library. The validation logic is defined in the `dtos` directory.

```javascript
// src/dtos/userDTO.js
import Joi from 'joi';

const userSchema = Joi.object({
    email: Joi.string().email().required(),
    name: Joi.string().required(),
    age: Joi.number().integer().min(0),
    city: Joi.string().required(),
    zipCode: Joi.string().pattern(/^\d{5}$/).required(),
});

const userUpdateSchema = Joi.object({
    email: Joi.string().email(),
    name: Joi.string(),
    age: Joi.number().integer().min(0),
    city: Joi.string(),
    zipCode: Joi.string().pattern(/^\d{5}$/),
});

const userIdSchema = Joi.object({
    userId: Joi.string().required(),
});

export { userSchema, userUpdateSchema, userIdSchema };
```

### Middleware for Validation

```javascript
// src/middlewares/validate.js
import Joi from 'joi';

const validate = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.message });
    }
    next();
};

const validateParams = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.params);
    if (error) {
        return res.status(400).json({ message: error.message });
    }
    next();
};

export { validate, validateParams };
```

## Authentication

Basic authentication is implemented using a middleware that checks for the presence of an `Authorization` header.

```javascript
// src/middlewares/authMiddleware.js
import jwt from 'jsonwebtoken';

const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: 'Authorization header required' });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Token required' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }
};

export default authenticate;
```

## Database Configuration

The application uses MongoDB as the database, with the connection configuration read from environment variables.

```javascript
// src/utils/db.js
import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

export default connectDB;
```

## Unit Testing

Unit tests are written using Jest, with a minimum coverage of 60%. Tests are located in the `tests` directory.

```javascript
// tests/userService.test.js
import userService from '../src/services/userService.js';

describe('User Service', () => {
    it('should create a new user', async () => {
        const user = {
            email: 'test@example.com',
            name: 'Test User',
            age: 25,
            city: 'Test City',
            zipCode: '12345',
        };
        const result = await userService.createUser(user);
        expect(result).toHaveProperty('id');
        expect(result.email).toBe('test@example.com');
    });
});
```

## Installation and Setup

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo/nodejs-backend.git
    cd nodejs-backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add the following:
    ```
    PORT=3000
    DB_URI=Mongo_url
    JWT_SECRET=your-jwt-secret
    ```

4. Start the server:
    ```bash
    npm start
    ```

5. Run tests:
    ```bash
    npm test
    ```

## Conclusion

This project demonstrates how to set up a Node.js backend with a structured MVC architecture, including authentication, validation, and unit testing. It provides a robust foundation for building scalable and maintainable web applications.

---

Feel free to modify the report to better fit your needs or add any additional information specific to your project.
