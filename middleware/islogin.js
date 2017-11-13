const jwt = require('jsonwebtoken')
require('dotenv').config()
const secret = process.env.secretKey

const isLogin = (req, res, next) => {
  // verify a token symmetric
  jwt.verify(req.headers.token, secret, function(err, decoded) {
    if(err){
      console.log(err)
      res.send('silahkan login terlebih dahulu')
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
    res.status(401).send('tidak berhak untuk mengakses')
  }
}


module.exports = {
  isLogin,
  isAdmin
}
