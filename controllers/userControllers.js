const User = require('../models').User
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const secret = process.env.secretKey


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
  const saltRounds = 10
  bcrypt.hash(req.body.password, saltRounds).then(function(hash){
    User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      username: req.body.username,
      password: hash,
      role: 'user'
    }).then(function () {
      res.send('success create user')
    }).catch(err => {
      if (err) {
        console.log(err)
      }
    })
  })
}

const destroyUser = (req, res) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  }).then(function () {
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
  },{
    where: {
      id: req.params.id
    }
  }).then(function () {
    res.send('success update User')
  }).catch(err => {
    if (err) {
      console.log(err)
    }
  })
}

const signUpUsers = (req, res) => {
  const saltRounds = 10
  bcrypt.hash(req.body.password, saltRounds).then(function(hash){
    User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      username: req.body.username,
      password: hash,
      role: 'user'
    }).then(function () {
      res.send('success signup user')
    }).catch(err => {
      if (err) {
        console.log(err)
      }
    })
  })
}

const signinUsers = (req, res) => {
  User.findOne({
    where : {
      username : req.body.username
    }
  }).then(function(data_User){
    if(data_User){
      bcrypt.compare(req.body.password, data_User.password).then(function(result){
        if(result){
          jwt.sign({
            id : data_User.id,
            username : data_User.username,
            role : data_User.role
          }, secret, function(err, token) {
            res.send(token)
          })
        }
      })
    }
  }).catch(err => {
    if(err){
      console.log(err);
    }
  })
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  destroyUser,
  updateUsers,
  signUpUsers,
  signinUsers
}
