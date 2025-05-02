const service = require("../services/alert.service");
const createAlert = async (req, res) => {
    try {
        const responsive = await service.createAlertService(req.body);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code: -1,
            message: "Interal Server Error"
        })
    }
}

const getAllService = async(req,res) => {
    try {
        const responsive = await service.getAllAlertService();
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code: -1,
            message: "Interal Server Error"
        })
    }
}

const deleteBanner = async(req,res) => {
    try {
        const responsive = await service.deleteBannerService(req.params.id);
        return res.status(200).json(responsive);
    } catch (error) {
        return res.status(500).json({
            code:-1,
            message:"Interal Server Error"
        })
    }
}

module.exports={
    createAlert,
    getAllService,
    deleteBanner
}