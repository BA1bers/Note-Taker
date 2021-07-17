const express = require ("express");
const app = express;
const PORT = 3001;

//middlewear
app.request(express.urlencoded({
    extended: true}
    ));
app.use(express.json());
app.use(express.static("public"));
app.use(require("./Routes/htmlroutes"));
app.use(require("./Routes/apiroutes"));

app.listen (PORT, () => {
    console.log (`App listening on PORT ${PORT}`);
});