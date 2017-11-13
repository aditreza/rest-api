const express = require('express')
const router = express.Router()
const User = require('../controllers/userControllers')
const verify = require('../middleware/isLogin')

router.get('/users', verify.isLogin, verify.isAdmin, User.getAllUsers)
router.get('/users/:id', verify.isLogin, verify.isAdmin, verify.isAuthById, User.getUserById)
router.post('/users', verify.isLogin, verify.isAdmin, User.createUser)
router.delete('/users/:id', verify.isLogin, verify.isAdmin, User.destroyUser)
router.put('/users/:id', verify.isLogin, verify.isAdmin, verify.isAuthById, User.updateUsers)
router.post('/signup', User.signUpUsers)
router.post('/signin', User.signinUsers)

module.exports = router
