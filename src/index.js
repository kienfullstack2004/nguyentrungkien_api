const express = require("express");
const app = express();
const cors = require("cors");
const initRoutes = require("./routes/public.routes");
const data = require("./config/connectDatabase");
const PORT = process.env.PORT || 5000;
data.connect();
app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.use(express.urlencoded({
    extended: true,
}))

app.use(express.json());
initRoutes(app);

app.listen(PORT, () => {
    console.log('App listening on port', PORT);
})


