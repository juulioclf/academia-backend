const connection = require('./connection');
const bcrypt = require('bcrypt');

const getAllUsers = async () => {

    const [users] = await connection.execute('SELECT * FROM user');
    return users;
};

const getUserById = async (userId) => {
    const [user] = await connection.execute('SELECT * FROM user WHERE id = ?', [userId]);
    return user;
};

const createUser = async (user) => {
    const {username, email, password} = user
    const dateUTC = new Date(Date.now()).toUTCString()
    const hashedPassword = await bcrypt.hash(password, 10)

    const query = 'INSERT INTO user(username, email, password, created_at, type) VALUES (?, ?, ?, ?, ?)';

    const [createdUser] = await connection.execute(query, [username, email, hashedPassword, dateUTC, 'teacher']);

    return {user: username}
}

const  getAlreadyExists = async (username, email) => {
    const [existingUser] = await connection.execute(
        'SELECT * FROM user WHERE username = ? OR email = ?', [username, email]
    );
        
    console.log(existingUser.length)

    if (existingUser.length === 0) {
        return false
    } else {
        return true
    }
};


module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    getAlreadyExists
}