const fs = require("fs");
const util = require("util");

const noteData = "./db/db.json";

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class db {
  async readNotes() {
    try {
      const notesNew = await readFileAsync(noteData, "UTF8");
      return notesNew ? JSON.parse(notesNew) : [];
    } catch (error) {
      throw error;
    }
  }

  async addNote(data) {
    try {
      await writeFileAsync(noteData, JSON.stringify(data, null, "\t")).then(() => {
         console.log("Your new note has been added!");
      }
      );
    } catch (error) {
      throw error;
    }
  }

  async deleteNote(data) {
    try {
      await writeFileAsync(noteData, JSON.stringify(data, null, "\t")).then(() => {
        console.log("Your note has now been deleted!");
      }
    );
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new db();