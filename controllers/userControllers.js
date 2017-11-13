const User = require('../models').User

const getAllUsers = (req, res) => {
    User.findAll().then(data_Users => {
        res.send(data_Users)
    }).catch(err => {
        if (err) {
            console.log(err)
        }
    })
}

const getUserById = (req, res) => {
    User.findById(req.params.id).then(data_Users => {
        res.send(data_Users)
    }).catch(err => {
        if (err) {
            console.log(err)
        }
    })
}

const createUser = (req, res) => {
    User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        role: req.body.role
    }).then(function() {
        res.send('success create user')
    }).catch(err => {
        if (err) {
            console.log(err)
        }
    })
}

const destroyUser = (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    }).then(function() {
        res.send('success delete user')
    }).catch(err => {
        if (err) {
            console.log(err)
        }
    })
}

const updateUsers = (req, res) => {
    User.update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        role: req.body.role
    }, {
        where: {
            id: req.params.id
        }
    }).then(function() {
        res.send('success update User')
    }).catch(err => {
        if (err) {
            console.log(err)
        }
    })
}


module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    destroyUser,
    updateUsers
}