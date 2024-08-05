const express = require('express')
const router = express.Router()
const usersController = require('../Controllers/Users')
const authUser = require('../Middlewares/authUser')
const authAdmin = require('../Middlewares/authAdmin')

router.get('/', [authAdmin], usersController.list)
router.post('/login', usersController.login)
router.post('/signup', usersController.signUp)
router.delete('/:userName', [authAdmin], usersController.remove)
router.patch('/:userName', [authUser], usersController.update)
router.patch('/forgot/:userAuth', usersController.forgotPass)

module.exports = router
