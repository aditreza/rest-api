const jwt = require('jsonwebtoken')
require('dotenv').config()
const secret = process.env.secretKey

const isLogin = (req, res, next) => {
  // verify a token symmetric
  jwt.verify(req.headers.token, secret, function(err, decoded) {
    if(err){
      console.log(err)
      res.send('please login first')
    }else{
      req.headers.decoded = decoded
      next()
    }
  })
}

const isAdmin = (req, res, next) => {
  if(req.headers.decoded.role == 'admin'){
    next()
  }else{
    res.status(401).send('you have no right to access')
  }
}

const isAuthById = (req,res, next) => {
  if(req.headers.decoded.id == req.params.id){
    next()
  }else{
    res.status(401).send('you have no right to access')
  }
}

module.exports = {
  isLogin,
  isAdmin,
  isAuthById
}
