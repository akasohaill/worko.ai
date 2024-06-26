// tests/userService.test.js
const userService = require('../src/services/userService');
const userDao = require('../src/daos/userDao');

jest.mock('../src/daos/userDao');

describe('User Service', () => {
    it('should get all users', async () => {
        userDao.getUsers.mockResolvedValue([{ name: 'John Doe' }]);
        const users = await userService.getUsers();
        expect(users).toEqual([{ name: 'John Doe' }]);
    });

    // Add more tests for other methods
});
