const express = require("express");
const router = express.Router();
const {authentoken} = require("../middlewares/handle_verify");
const userController = require("../controllers/auth.controller");

router.get('/getuserdata',authentoken,userController.getUserCurrent);
router.get('/getUsers',userController.getUsers);
router.post('/comment/create',authentoken,userController.comment);
router.post('/update/:id',userController.updateUser);
router.get('/comment/getcomment/:id',userController.getComment);

module.exports = router;