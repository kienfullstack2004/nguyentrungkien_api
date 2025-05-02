// import { where } from "sequelize";
const {v4} = require("uuid");
const data = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const hashPassword = (password) => {
    return bcrypt.hashSync(password,bcrypt.genSaltSync(12));
}


const loginService = ({email,password}) => new Promise(async(resolve, reject) => {
    try {
    console.log(email,password);
     const userLogin = await data.User.findOne({
        where:{email},
        raw:true});

     const isPasswordValid = userLogin && bcrypt.compareSync(password,userLogin.password);

     const token = isPasswordValid && jwt.sign({id:userLogin.id,username:userLogin.username,avatar:userLogin?.avatar,email:userLogin?.email},process.env.SECRET_KEY,{
        expiresIn: "2d"
     });
    return resolve({
        code: token ? 0 : 1,
        message: userLogin && token ? "Login Successfully" : !isPasswordValid ? "Password is incorrect" : "Email is not registered",
        access_token: token ? token : null,
    });
    } catch (error) {
        return reject(error);
    }

})

const registerService = ({username,email,password}) => new Promise(async(resolve, reject) => {
    try {
 
       
    
        const userRegister = await data.User.findOrCreate({
            where:{email},
            defaults:{
                id: v4(),
                email : email,
                password: hashPassword(password),
                username: username
            }
        })
 
         
        return resolve({
            code: userRegister[1] ? 0 : 1,
            message: userRegister[1] ? "Register is successfully!" : "Register is faily!",
        })

    } catch (error) {
        return reject(error);
    }

})

const createComment = ({username},{message,idpost}) => new Promise(async(relsove,reject)=>{
    try {

        const responsive = await data.Comment.create({
            username,
            message,
            idpost,
            id:v4()
        })

        return relsove({
            code:responsive ? 0 : 1,
            message: responsive ? "Create comment success" : "Create comment faily!",
        })
    } catch (error) {
        return reject(error);
    }
})

const getAllComment = (id) => new Promise(async(relsove,reject)=>{
    try {
        const responsive = await data.Comment.findAll({
            where:{idpost:id},
            include:[
                {model:data.User,as:"usercomment",attributes:["avatar"]}
            ]
        });
        return relsove({
            code:responsive ? 0 : 1,
            message: responsive ? "OK" : "Fail",
            data: responsive
        })
    } catch (error) {
        return reject(error);
    }
})

const getOneCurrentService = (id) => new Promise(async(relsove,reject)=>{
    try {
        const responsive = await data.User.findOne({
            where:{id},
            attributes:{
                exclude:['password']
            }
        })

        return relsove({
            code:responsive ? 0 : 1,
            message: responsive ? "User data success":"User data fail",
            user:responsive
        })

    } catch (error) {
        return reject(error);
    }
})

const updateUserService = (id,{username,email,avatar}) => new Promise(async(relsove,reject)=>{
    try {
        const responsive = await data?.User.update({username,email,avatar},{
            where:{id}
        })
        relsove({
            code:responsive ? 0 : 1,
            message: responsive ? "Update User success" : "Update fail",
        });
    } catch (error) {
        return reject(error);
    }
})
const getUsersService = () => new Promise(async(relsove,reject)=>{
    try {
        const responsive = await data?.User.findAll({})
        relsove({
            code:responsive ? 0 : 1,
            message: responsive ? "Get all user success" : "Get all fail",
            data:responsive
        });
    } catch (error) {
        return reject(error);
    }
})



module.exports = {
    loginService,
    registerService,
    createComment,
    getAllComment,
    getOneCurrentService,
    getUsersService,
    updateUserService
}