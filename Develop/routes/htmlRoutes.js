const path = require('path')
const axios = require('axios')

module.exports = app => {
    axios.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })

    axios.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/notes.html"))
    })

    
}
