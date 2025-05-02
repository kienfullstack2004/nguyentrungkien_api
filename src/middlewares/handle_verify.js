require("dotenv").config();
const jwt = require("jsonwebtoken");

class verifyToken {

  authentoken = (req,res,next) => {

     const token = req.headers["authorization"].split(' ')[1];

     if(!token) return res.status(401).json({
        code: -1,
        message:"Token is blank!"
     })

     jwt.verify(token,process.env.SECRET_KEY,(err, user) => { 
        if(!err){
            req.user = user,
            next();
        }
     })

  } 

}

module.exports = new verifyToken();