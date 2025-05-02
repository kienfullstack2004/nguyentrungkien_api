const express = require('express');
const router = express.Router();

const postController = require("../controllers/post.controller");
const { authentoken } = require('../middlewares/handle_verify');

router.get("/getAllPost",authentoken, postController.getAllPost);
router.get("/getPosts",postController.getPosts);
router.get("/getPostNew", postController.getPostNew);
router.post("/create", postController.createPost);
router.get("/noti",authentoken,postController.findCountNotiUser);
router.get("/commentAboutIpPost/:id", postController.countCommentAboutIdPost);
router.post("/count/:id",postController.countAboutPost);
router.post('/update/:id',postController.updatePost);
router.delete('/delete/:id',postController.deletePost);
router.get("/getOnePost/:id", postController.getOnePost);
router.delete("/delete/noti/:id",postController.deleteNoti);

module.exports = router;
