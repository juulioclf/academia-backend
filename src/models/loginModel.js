const connection = require('./connection');
const bcrypt = require('bcrypt');

const getUserByEmail = async (email) => {
    const [rows] = await connection.query('SELECT * FROM user WHERE email = ?', [email]);
    return rows[0];

};

const getUserByUsername = async (username) => {
    const [rows] = await connection.query('SELECT * FROM user WHERE username = ?', [username]);
    return rows[0];
    
};

const comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};

module.exports = {
    getUserByEmail,
    getUserByUsername,
    comparePassword
}