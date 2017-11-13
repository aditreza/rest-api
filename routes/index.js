const express = require('express')
const router = express.Router()

router.get('/', function(req,res){
  res.send('Rest API with Express, Sequelize, & JWT')
})

module.exports = router
