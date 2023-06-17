const express = require('express');
const htmlRoutes = require('./Develop/routes/htmlRoutes')
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));



// should be the route to the htmml pages
app.get(htmlRoutes)


app.get('/api/notes', (req, res) => {
    const notes = getNotes();
    res.json(notes);
  });
// hopefully the Post to save a new note
app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    const notes = getNotes();
    newNote.id = generateId();
    notes.push(newNote);
    saveNotes(notes);
    res.json(newNote);
  });

  // Function to read notes from the JSON file
function getNotes() {
    const data = fs.readFileSync(path.join(__dirname, 'db', 'notes.json'), 'utf8');
    return JSON.parse(data);
  }
  
  // Function to save notes to the JSON file
  function saveNotes(notes) {
    const data = JSON.stringify(notes, null, 2);
    fs.writeFileSync(path.join(__dirname, 'db', 'notes.json'), data);
  }
  
  // Function to generate a unique ID for notes
  function generateId() {
    return Math.random().toString(36).substr(2, 9);
  }



app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));