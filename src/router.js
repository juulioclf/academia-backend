const express = require('express');
const usersController = require('./controllers/userController')
const usersMiddleware = require('./middlewares/usersMiddleware')

const loginController = require('./controllers/loginController')
const loginMiddleware = require('./middlewares/loginMiddleware')


const router = express.Router()

router.get('/', (req, res) => res.status(200).send('o router tá rolando.'))

router.get('/users', usersController.getAllUsers)
router.get('/users/:id', usersController.getUserById)
router.post('/users', usersMiddleware.validateBody ,usersController.createUser)
router.post('/login', loginMiddleware.validateBody ,loginController.loginUser)

module.exports = router;