const fs = require("fs");
const path = require("path");

function createNewNote(body, noteSet) {
    const note = body;
    noteSet.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: noteSet
        }, null, 2)
    )
    return note;
}

function deleteNote(noteSet, id) {
    let deleteID = parseInt(id);
    noteSet.splice(deleteID, 1);

    // This loop re-writes the indexes for the remaining notes.
    for (let i = deleteID; i < noteSet.length; i++) {
        noteSet[i].id = i.toString();
    }

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: noteSet
        }, null, 2)
    )
}

module.exports = {
    createNewNote,
    deleteNote
};