const api = require('express').Router()
const methods = require('../helpers/methods')



api.get('/notes', (req, res) => {
    console.info(`${req.method} request received for notes`);

    methods.getNotes().then(
        data => {
            return res.json(data)
        }
    )
});

api.post('/notes', (req, res) => {
    
    console.info(`${req.method} request received to submit notes`);

    methods.postNote(req.body)
    .then((note) => res.json(note))
});

api.delete('/notes/:id', (req, res) => {
    console.info(`${req.method} request received to delete notes`);

    methods.deleteNote(req.params.id)
    .then(() => res.json({ok: true}))
});

module.exports = api;









// const router = require('express').Router();
// const fs = require('fs');
// const { nanoid } = require('nanoid');
// const path = require('path');
// const dbPath = path.join(__dirname, '../db/db.json')

// router.get('/notes', (req, res) => {
//     fs.readFile(dbPath, 'utf8', (err, data) => {
//         res.json(JSON.parse(data));
//     });
// });

// router.post('/notes', (req, res) => {

//     const {title, text} = req.body; //deconstruct the body of the request
//     const newNote = { title, text, id: nanoid(5) } //rebuild, with unique id

//     fs.readFile(dbPath, 'utf8', (err, data) => {
//         const notes = JSON.parse(data);
//         notes.push(newNote);
//         fs.writeFile(dbPath, JSON.stringify(notes), (err) => {
//             err ? console.log(err) : console.log('Note added!');
//         });
//         res.json(newNote);
//     });
// });

// router.delete('/notes/:id', (req, res) => {
//     const id = req.params.id;
//     fs.readFile(dbPath, 'utf8', (err, data) => {
//         const notes = JSON.parse(data);
//         const newNotes = notes.filter(note => note.id !== id);
//         fs.writeFile(dbPath, JSON.stringify(newNotes), (err) => {
//             err ? console.log(err) : console.log('Note deleted!');
//         });
//         res.json(newNotes);
//     });
// });

// module.exports = router;

