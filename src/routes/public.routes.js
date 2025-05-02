const authRoutes = require("./auth.routes");
const postRoutes = require("./post.routes");
const alertRoutes = require("./alert.routes");
const coursesRoutes = require("./courses.routes");
const viewerRoutes = require("./viewer.routes");
const userRoutes = require("./user.routes");

const initRoutes = (app) => {
    app.use("/viewer", viewerRoutes);
    app.use("/courses", coursesRoutes);
    app.use("/user", userRoutes);
    app.use("/alert", alertRoutes); 
    app.use("/post", postRoutes);
    app.use("/auth",authRoutes)
    return app.use("/",(req,res,next)=>{
        res.send("Error Server"); 
    })
}

module.exports = initRoutes;