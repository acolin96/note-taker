const express = require('express');
const htmlRoutes = require('./Develop/routes/htmlRoutes')
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get(htmlRoutes)




app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));