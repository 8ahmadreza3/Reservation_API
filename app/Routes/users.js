const express = require('express')
const router = express.Router()
const usersController = require('../Controllers/Users')
const authUser = require('../Middlewares/authUser')
const authAdmin = require('../Middlewares/authAdmin')

router.get('/', [authAdmin], usersController.usersList)
router.post('/login', usersController.loginUser)
router.post('/signup', usersController.signUpUser)
router.delete('/:userName', [authAdmin], usersController.deleteUser)
router.patch('/:userName', [authUser], usersController.updateUser)
router.patch('/forgot/:userAuth', usersController.forgotPass)

module.exports = router
