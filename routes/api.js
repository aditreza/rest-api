const express = require('express')
const router = express.Router()
const User = require('../controllers/userControllers')

router.get('/users', User.getAllUsers)
router.get('/users/:id', User.getUserById)
router.post('/users', User.createUser)
router.delete('/users/:id', User.destroyUser)
router.put('/users/:id', User.updateUsers)

module.exports = router