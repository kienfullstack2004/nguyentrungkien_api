const service = require("../services/post.service");


const createPost = async (req, res) => {
    try {
        const responsive = await service.createPostService(req.body);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code: -1,
            message: "Interal Server Error"
        })
    }
}


const getAllPost = async (req, res) => {
    try {

        const responsive = await service.getAllPostService(req.user);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code: -1,
            message: "Interal Server Error"
        })
    }
}
const getAllPostNoUser = async (req, res) => {
    try {

        const responsive = await service.getAllPostServiceNoUser();
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code: -1,
            message: "Interal Server Error"
        })
    }
}


const getPosts = async(req,res) => {
    try {
        const responsive = await service.getPostsService();
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code:-1,
            message:"Interal Server Error"
        })
    }
}

const getOnePost = async (req, res) => {
    try {

        const responsive = await service.getOnePostService(req.params.id);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code: -1,
            message: "Interal Server Error"
        })
    }
}
const getOnePostNoUser = async (req, res) => {
    try {

        const responsive = await service.getOnePostNoUserService(req.params.id);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code: -1,
            message: "Interal Server Error"
        })
    }
}

const deletePost = async (req, res) => {
    try {
        const responsive = await service.deletePostService(req.params.id);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code: -1,
            message: "Interal Server Error"
        })
    }
}

const updatePost = async (req, res) => {
    try {
        const responsive = await service.updatePostService(req.params.id, req.body);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code: -1,
            message: "Interal Server Error"
        })
    }
}

const getPostNew = async(req,res) => {
    try {
        const responsive = await service.getPostNewService();
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code:-1,
            message:"Interal Server Error"
        })
    }
}

const findCountNotiUser = async(req,res) => {
    try {
        const responsive = await service.findCountNotiUserServer(req.user);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code:-1,
            message:"Interal Server Error"
        })
    }
}

const deleteNoti = async(req,res) => {
    try {
        const responsive = await service.deleteNotiService(req.params.id);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code:-1,
            message:"Interal Server Error"
        })
    }
}

const countAboutPost = async(req,res) => {
    try {
        const responsive = await service.countAboutPostService(req.params.id,req.body);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code:-1,
            message:"Interal Server Error"
        })
    }
}

const countCommentAboutIdPost = async(req,res) => {
    try {
        const responsive = await service.countCommentAboutIpPostService(req.params.id);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code:-1,
            message:"Interal Server Error"
        })
    }
}

module.exports = {
    createPost,
    getAllPost,
    getOnePost,
    deletePost,
    updatePost,
    getPostNew,
    getPosts,
    findCountNotiUser,
    deleteNoti,
    countAboutPost,
    countCommentAboutIdPost,
    getAllPostNoUser,
    getOnePostNoUser
}