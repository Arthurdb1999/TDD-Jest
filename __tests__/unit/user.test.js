const bcrypt = require('bcryptjs')

const { User } = require('../../src/app/models');
const truncate = require('../utils/truncate')

describe('User', () => {
    beforeEach(async () => {
        await truncate();
    })

    it('should encrypt user password', async () => {
        const user = await User.create({ name: 'Diego', email: 'diego@rocketseat.com.br', password: 'a12312' });

        const compareHash = await bcrypt.compare('a12312', user.password_hash)

        expect(compareHash).toBe(true);
    });
})