const util = require('util');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

const readFile = util.promisify(fs.readFile);

const writeFile = util.promisify(fs.writeFile);

class Methods { 
    async read() {
        const data = await readFile('./db/db.json', 'utf8');
        return JSON.parse(data) || [];
    }
   
    async write(data) {
        await writeFile("./db/db.json", JSON.stringify(data));
    }

   
    async getNotes() {
        const data = await this.read();
        return Array.isArray(data) ? data : [];
    }

     
    async postNote(note) {
        const { title, text } = note;
        if (!title || !text ) {
            throw new Error('Please enter a title and text for the note!')
        }

        
        const postedNote = { title, text, id: uuidv4()};
        const notes = await this.getNotes();
        notes.push(postedNote);
        await this.write(notes);
        return postedNote;
    }

     
    async deleteNote(id) {
        const notes = await this.getNotes();
       
        const updatedNotes = notes.filter(note => note.id !== id);
        await this.write(updatedNotes);
    }
}

module.exports = new Methods();