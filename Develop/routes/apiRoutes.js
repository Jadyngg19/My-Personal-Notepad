const express = require("express");
const router = express.Router();

const uuid = require("uuid");

const db = require("../db/db");

router.get("/api/notes", async function (req, res) {
const notes = await db.readNotes();
return res.json(notes);
});

router.post("/api/notes", async function (req, res) {
const currentNotes = await db.readNotes();
let newNote = {
    id: uuid(),
    title: req.body.title,
    text: req.body.text,
};
await db.addNote([...currentNotes, newNote]);
return res.send(newNote);
});

router.delete("/api/notes/:id", async function (res, req) {
const noteToBeDeleted = req.params.id;
const currentNotes = await db.readNotes();
const newNoteData = currentNotes.filter((note) => note.id !== noteToBeDeleted);

await db.deleteNote(newNoteData);
return res.send(newNoteData);
});

module.exports = router;