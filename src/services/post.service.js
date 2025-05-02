const data = require("../models");
const { v4 } = require("uuid");


const createPostService = ({ title, des, image, author, viewers }) => new Promise(async (resolve, reject) => {
  try {

    let idHash = v4();

    const responsive = await data.PostList.create({
      id: idHash,
      title,
      des,
      image,
      author,
      viewers: +viewers
    })

    const reponsive1 = await data.User.findAll({});

    reponsive1?.length > 0 && reponsive1?.forEach(async (item) => {
      await data.Noti.create({
        id: v4(),
        image,
        title,
        iduser: item?.id,
        idpost: idHash
      });
    })

    return resolve({
      code: responsive ? 0 : 1,
      message: responsive ? "Create post successfully" : "Create post failed",
    })

  } catch (error) {
    return reject(error);
  }
})

const findCountNotiUserServer = ({id}) => new Promise(async(relsove,reject)=>{
    try {
        const responsive = await data.Noti.findAndCountAll({
            where:{iduser: id}
        })
        relsove({
            code:responsive ? 0 : 1,
            message:responsive ? "Get all success" : "Get all fail",
            data: responsive.rows,
            count:responsive?.count
        })
    } catch (error) {
        return reject(error);
    }
})


const getAllPostService = ({ username }) => new Promise(async (resolve, reject) => {
  try {

    const responsive = await data.PostList.findAll({
      where: { author: username },
      include: [
        { model: data.Viewer, as: "postdata" }
      ]
    });

    return resolve({
      code: responsive ? 0 : 1,
      message: responsive ? "Get all post success" : "Get all post fail",
      data: responsive
    })

  } catch (error) {
    return reject(error);
  }
})
const getAllPostServiceNoUser = () => new Promise(async (resolve, reject) => {
  try {

    const responsive = await data.PostList.findAll({
      include: [
        { model: data.Viewer, as: "postdata" }
      ]
    });

    return resolve({
      code: responsive ? 0 : 1,
      message: responsive ? "Get all post success" : "Get all post fail",
      data: responsive
    })

  } catch (error) {
    return reject(error);
  }
})

const getPostsService = () => new Promise(async (relsove, reject) => {
  try {
    const responsive = await data.PostList.findAll({
      order: [['createdAt', 'DESC']]
    })
    return relsove({
      code: responsive ? 0 : 1,
      message: responsive ? "Get All Post Success" : "Get All Post Fail",
      data: responsive
    })
  } catch (error) {
    return reject(error);
  }
})


const getOnePostService = (id) => new Promise(async (resolve, reject) => {
  try {
    const responsive = await data.PostList.findOne({
      where: {
        id
      },
      // attributes:{
      include: [
        { model: data.User, as: 'userdata', attributes: { exclude: ["password"] } }
      ]
      // }
    })
    return resolve({
      code: responsive ? 0 : 1,
      message: responsive ? "Get post successfully" : "Get post failed",
      data: responsive
    })
  } catch (error) {
    return reject(error);
  }
})
const getOnePostNoUserService = (id) => new Promise(async (resolve, reject) => {
  try {
    const responsive = await data.PostList.findOne({
      where: {
        id
      },
      // attributes:{
      include: [
        { model: data.User, as: 'userdata', attributes: { exclude: ["password"] } }
      ]
      // }
    })
    return resolve({
      code: responsive ? 0 : 1,
      message: responsive ? "Get post successfully" : "Get post failed",
      data: responsive
    })
  } catch (error) {
    return reject(error);
  }
})

const deletePostService = (id) => new Promise(async (relsove, reject) => {
  try {
    const responsive = await data.PostList.destroy({
      where: {
        id
      }
    })
    return relsove({
      code: responsive ? 0 : 1,
      message: responsive ? "Delete success !" : " Fail ",
    })
  } catch (error) {
    return reject(error);
  }
})

const updatePostService = (id, { title, des, image, author, viewers }) => new Promise(async (relsove, reject) => {
  try {

    console.log(id, {
      title, des, image, author, viewers
    })

    const responsive = await data.PostList.update({
      title, des, image, author, viewers
    }, { where: { id } });
    return relsove({
      code: responsive ? 0 : 1,
      message: responsive ? "Update success" : "Update fail!",
    })
  } catch (error) {
    return reject(error);
  }
})

const getPostNewService = () => new Promise(async (relsove, reject) => {
  try {
    const responsive = await data.PostList.findAll({
      order: [
        ['createdAt', 'DESC']
      ],
      include: [
        { model: data.Viewer, as: "postdata" }
      ]
    })
    return relsove({
      code: responsive ? 0 : 1,
      message: responsive ? "Ok" : 'Fail',
      data: responsive
    })
  } catch (error) {
    return reject(error);
  }
})

const deleteNotiService = (id) => new Promise(async(relsove,reject)=>{
  try {
    const responsive = await data.Noti.destroy({
      where:{id}
    })
    relsove({
      code:responsive ? 0 : 1,
      message:responsive ? "Delete success" : "Delete fail",
    })
  } catch (error) {
    return reject(error);
  }
})

const countAboutPostService = (id,{count}) => new Promise(async(relsove,reject)=>{
  try {
     const responsive = await data.PostList.update({
         viewers: count  
     },{
      where:{id}
     })

     return relsove({
      code: responsive ? 0 : 1,
      message: responsive ? "Count success" : "Count fail",
     })
  } catch (error) {
     return reject(error); 
  }
})

const countCommentAboutIpPostService = (id) => new Promise(async(relsove,reject)=>{
  try {
    const responsive = await data.Comment.findAndCountAll({
      where:{idpost:id}
    })
    relsove({
      code: responsive ? 0 : 1,
      message: responsive ? "Get success" : "Get fail",
      count: responsive?.count 
    })
  } catch (error) {
    return reject(error);
  }
})




module.exports = {
  getAllPostService,
  createPostService,
  getOnePostService,
  deletePostService,
  updatePostService,
  getPostNewService,
  getPostsService,
  findCountNotiUserServer,
  deleteNotiService,
  countAboutPostService,
  countCommentAboutIpPostService,
  getAllPostServiceNoUser,
  getOnePostNoUserService
}

