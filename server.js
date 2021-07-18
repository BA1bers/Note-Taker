const { request } = require("express");
const express = require ("express");
const PORT = process.env.PORT || 3001;
const apiRoutes = require("./Routes/apiroutes")
const htmlRoutes = require("./Routes/htmlroutes")
//middlewear
const app = express();
app.use(express.urlencoded({
    extended: true}
    ));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen (PORT, () => {
    console.log (`App listening on PORT ${PORT}`);
});