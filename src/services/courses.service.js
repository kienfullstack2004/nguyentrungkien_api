const { v4 } = require("uuid");
const data = require("../models");

const createCoursesService = ({title,
    des,
    image,
    price,
    viewer=0}) => new Promise(async(relsove,reject)=>{
    try {
        const responsive = await data.CoursesOnline.create({
            id: v4(),
            title,
            des,
            image,
            price,
            viewer:+viewer
        });

        return relsove({
            code: responsive ? 0 : 1,
            message: responsive ? "Create courses successfully" : "Create courses failed",
        })
    } catch (error) {
        return reject(error);
    }
})

const getAllCoursesService = () => new Promise(async(resolve, reject) => {
    try {
        const responsive = await data.CoursesOnline.findAll({
            include:[
                {model:data.Viewer,as:"coursesdata"}
            ]
        });
        return resolve({
            code: responsive ? 0 : 1,
            message: responsive ? "Get all courses successfully" : "Get all courses failed",
            data: responsive
       })

    } catch (error) {
        return reject(error);
    }
})


const updateCoursesService = (id,{title,des,image,price,viewer}) => new Promise(async(relsove,reject)=>{
    try {
        const responsive = await data.CoursesOnline.update({
            title,des,image,price:+price,viewer:+viewer
         },{where:{id}})
         relsove({
            code:responsive ? 0 : 1,
            message: responsive ? "Update success" : "Update faily!"
         })
    } catch (error) {
        return reject(error);
    }
})

const deleteCoursesService = (id) => new Promise(async(relsove,reject)=>{
    try {
        const responsive = await data.CoursesOnline.destroy({
            where:{id}
        })
        relsove({
            code:responsive ? 0 : 1,
            message:responsive ? "Delete success": "Delete fail"
        })
    } catch (error) {
        return reject(error);
    }
})

const getOneCoursesService = (id) => new Promise(async(relsove,reject)=>{
    try {
        const responsive = await data.CoursesOnline.findOne({
            where:{id}
        })
        return relsove({
            code:responsive ? 0 : 1,
            message:responsive ? "Ok" : "Fail",
            data: responsive 
        })
    } catch (error) {
        return reject(error);
    }
})

module.exports = {
    createCoursesService,
    getAllCoursesService,
    updateCoursesService,
    deleteCoursesService,
    getOneCoursesService,
}