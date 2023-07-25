//Import modules and packages
const express = require('express');
const api = require('./routes/index')
const htmlRoutes = require('./routes/htmlRoutes')


const PORT = process.env.PORT || 3001;
const app = express();



app.use(express.json());

app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));

app.use('/api', api);
app.use('/', htmlRoutes);


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});