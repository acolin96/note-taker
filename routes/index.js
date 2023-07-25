const express = require('express');



// Import our files containing our routes
const apiRouter = require('./apiRoutes')

// Create and instance of express so we can apply the middleware and routing
const app = express();


app.use('/', apiRouter);

module.exports = app;

// const express = require('express');

// const apiRouter = require('./apiRoutes');
// const htmlRouter = require('./htmlRoutes');

// const app = express();

// app.use('/api' , apiRouter);
// app.use(htmlRouter);


// module.exports = app;