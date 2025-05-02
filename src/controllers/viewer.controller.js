const service = require("../services/viewer.service");

const createViewer = async(req,res) => {
    try {
        const responsive = await service.createViewerService(req.body);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code:-1,
            msg:"Interal Server Error"
        })
    }
} 

module.exports = {
    createViewer
}