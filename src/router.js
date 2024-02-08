const express = require('express');
const usersController = require('./controllers/userController')
const usersMiddleware = require('./middlewares/userMiddleware')

const router = express.Router()

router.get('/', (req, res) => res.status(200).send('o router tá rolando.'))

router.get('/users', usersController.getAllUsers)
router.get('/users/:id', usersController.getUserById)
router.post('/users', usersMiddleware.validateBody ,usersController.createUser)

module.exports = router;