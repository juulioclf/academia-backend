const usersModel = require('../models/usersModel')

const getAllUsers = async (request, response) => {

    const users = await usersModel.getAllUsers()

    return response.status(200).json(users)
};

const getUserById = async (request, response) => {

    const userId = request.params.id
    const user = await usersModel.getUserById(userId)

    return response.status(200).json(user)
};

const createUser= async (request, response) => {

    const userBody = request.body;

    if (usersModel.getAlreadyExists(userBody.username, userBody.email).length) {
        return response.status(400).json({ message: "User/Email already in use!"})
    }
    
    const user = await usersModel.createUser(userBody)

    return response.status(200).json({message: "Usuario criado com sucesso!", user: `${user.user}`})
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser
}