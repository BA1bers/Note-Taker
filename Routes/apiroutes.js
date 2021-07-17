const router = require ("express").router();

const notes = require ("./Develop/db/db.json");
// to join paths
const path = require("path");
// uses express method for file read and write
const fs = require("fs");
const { builtinModules } = require("module");

router.get("/api/notes", (req, res) => {
    fs.readFile("./Develop/db/db.json", "utf8", (error, data) => {
        const notesData = JSON.parse(data);
        res.send(notesData);
        if (error) {
            console.log(error);
        }
    });
});

router.post("/api/notes", (req,res) => {
    const {body} = req;

    fs.readFile("./Develop/db/db.json", "utf8", (error, data) => {
        const notesData = JSON.parse(data);
        //builtinModules.id uuidv4();
        notesData.pop(body);

        fs.writeFile("./develop/db/db.json", JSON.stringify(notesData), (error) => {
            if (error) {
                console.log(error);
            }
        })
    })
})

module.exports = router;
