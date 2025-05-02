const service = require('../services/courses.service');

const createCourses = async(req,res) => {
    try {
        const responsive = await service.createCoursesService(req.body);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code: -1,
            message: "Interal Server Error"
        })
    }
}



const getAllCourses = async(req,res) => {
    try {
        const responsive = await service.getAllCoursesService();
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code: -1,
            message: "Interal Server Error"
        })
    }
}

const updateCourses = async(req,res) => {
    try {
        const responsive = await service.updateCoursesService(req.params.id,req.body);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code:-1,
            message:"Interal Server Error"
        })
    }
}
const deleteCourses = async(req,res) => {
    try {
        const responsive = await service.deleteCoursesService(req.params.id);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code:-1,
            message:"Interal Server Error"
        })
    }
}

const getOneCourses = async(req,res) => {
    try {
        const responsive = await service.getOneCoursesService(req.params.id);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code:-1,
            message:"Interal Server Error"
        })
    }
}

module.exports = {
    createCourses,
    getAllCourses,
    updateCourses,
    deleteCourses,
    getOneCourses,
}