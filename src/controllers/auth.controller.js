const services = require("../services/auth.service");

const login = async (req, res) => {
    try {
        const responsive = await services.loginService(req.body);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code: -1,
            message: "Interal Server Error"
        })
    }
}


const register = async (req, res) => {
    try {

        console.log(req.body)

        const responsive = await services.registerService(req.body);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code: -1,
            message: "Interal Server Error"
        })
    }
}

const comment = async (req, res) => {
    try {
        const responsive = await services.createComment(req.user, req.body);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code: -1,
            message: "Interal Server Error"
        })
    }
}

const getComment = async (req, res) => {
    try {
        const responsive = await services.getAllComment(req.params.id);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code: -1,
            message: "Interal Server Error"
        })
    }
}

const getUserCurrent = async (req, res) => {
    try {
        const { id } = req.user;
        const responsive = await services.getOneCurrentService(id);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code: -1,
            message: "Interal Server Error"
        })
    }
}

const updateUser = async (req, res) => {
    try {
        const responsive = await services.updateUserService(req.params.id, req.body);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code: -1,
            message: "Interal Server Error"
        })
    }
}
const getUsers = async (req, res) => {
    try {
        const responsive = await services.getUsersService();
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code: -1,
            message: "Interal Server Error"
        })
    }
}

module.exports = {
    login,
    register,
    comment,
    getComment,
    getUserCurrent,
    updateUser,
    getUsers
}