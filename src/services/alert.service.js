const { v4 } = require("uuid");
const data = require("../models");

const createAlertService = ({image}) => new Promise(async(resolve, reject) => {
    try {
        const responsive = await data.Aleart.create({
            id: v4(),
            image
        })


        return resolve({
            code:responsive ? 0 : 1,
            message: responsive ? "Create alert successfully" : "Create alert failed"
        })

    } catch (error) {
        return reject(error);
    }
})

const getAllAlertService = () => new Promise(async(resolve, reject) => {
    try {
        const responsive = await data.Aleart.findAll({})
        return resolve({
            code: responsive ? 0 : 1,
            message: responsive ? "Get all alert successfully" : "Get all alert failed",
            data: responsive
        })

    } catch (error) {
        return reject(error);
    }
})

const deleteBannerService = (id) => new Promise(async(relsove,reject)=>{
    try {
        const responsive = await data.Aleart.destroy({
            where:{id}
        })
        relsove({
            code: responsive ? 0 : 1,
            message: responsive ? "Delete success" : "Delete fail!",
        });
    } catch (error) {
        return reject(error);
    }
})

module.exports = {
    createAlertService,
    getAllAlertService,
    deleteBannerService
}