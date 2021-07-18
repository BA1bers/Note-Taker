//creates id
const nanoid = require("nanoid");
const router = require("express").Router();
//Requires test note
let notes = require("../db/db");
//Joins Paths
const path = require("path");
//reads and writes file
const fs = require("fs");
const { builtinModules } = require("module");

router.get("/notes", (req, res) => {
    res.json(notes)
});
//function for saving notes
router.post("/notes", (req, res) => {
    let request = req.body;
    req.body.id = nanoid(10);
    notes.push(request);
    res.json(notes);
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(notes))
})
//function for deleting notes
router.delete("/notes/:id", (req, res) => {
    const { id } = req.params;
    let deletedNote = notes.find(notes => notes.id === id);
    if (deletedNote) {
        notes = notes.filter(notes => notes.id != id)
        res.end()
        res.status(200)
    }
    //sends error if not working
    else {
        res.status(404)
    }
})

module.exports = router;
