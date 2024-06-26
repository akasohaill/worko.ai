
# Node.js Backend API

## Overview

This project is a Node.js backend API built with MVC architecture. It handles CRUD operations for a `user` resource, including listing users, fetching user details by ID, creating, updating, and deleting users. The API also implements basic authentication and validation.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Testing](#testing)
- [Contributing](#contributing)

## Features

- MVC architecture
- CRUD operations for `user` resource
- Basic authentication
- Data validation using Joi
- MongoDB integration
- Environment-based configuration
- Unit testing with Jest

## Project Structure

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

## Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB

### Steps

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/nodejs-backend.git
    cd nodejs-backend
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Create a `.env` file in the root directory and add the following:**
    ```
    PORT=3000
    DB_URI=mongodb://localhost:27017/your-db
    JWT_SECRET=your-jwt-secret
    ```

4. **Start the server:**
    ```bash
    npm start
    ```

5. **Run tests:**
    ```bash
    npm test
    ```

## Usage

### Starting the Server

To start the server, run:

```bash
npm start
```

### Running Tests

To run tests, use:

```bash
npm test
```

## API Endpoints

### User Resource

- **GET /api/worko/user**: List all users
- **GET /api/worko/user/:userId**: Get user details by ID
- **POST /api/worko/user**: Create a new user
- **PUT /api/worko/user/:userId**: Update a user
- **PATCH /api/worko/user/:userId**: Partially update a user
- **DELETE /api/worko/user/:userId**: Soft delete a user

### User Payload

- `id` (generated)
- `email` (validated)
- `name`
- `age`
- `city`
- `zipCode` (validated)

## Environment Variables

The application requires the following environment variables:

- `PORT`: The port on which the server runs
- `DB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT authentication

## Testing

Unit tests are written using Jest. To run tests, use:

```bash
npm test
```

Ensure you have at least 60% test coverage.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any changes you wish to make.
