const { v4 } = require("uuid");
const data = require("../models");

const createViewerService = ({viewer,idrelative}) => new Promise(async(resolve, reject) => {
    try {
        const responsive = await data.Viewer.findOrCreate({
            where:{idrelative},
            defaults:{id: v4(),
            viewer,
            idrelative
            }
        })
        return resolve({
            code: responsive[1] ? 0 : 1,
            message: responsive[1] ? "Create viewer successfully" : "Create viewer failed",
        })
    } catch (error) {
        return reject(error);
    }
})


module.exports = {
   createViewerService 
}