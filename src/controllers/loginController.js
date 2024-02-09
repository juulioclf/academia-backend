const loginModel = require('../models/loginModel');

const loginUser = async (request, response) => {
    const { login, password } = request.body;

    let user;
    if (login.includes('@')) {
        user = await loginModel.getUserByEmail(login);
    } else {
        user = await loginModel.getUserByUsername(login);
    }

    if (!user) {
        return response.status(404).json({ message: 'Usuário não encontrado.' });
    }

    const passwordMatch = await loginModel.comparePassword(password, user.password);
    if (!passwordMatch) {
        return response.status(401).json({ message: 'Senha incorreta.' });
    }

    return response.status(200).json({ message: 'Login bem-sucedido.' });
};

module.exports = {
    loginUser
};