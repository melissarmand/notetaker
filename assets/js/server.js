const express = require('express');
const app = express();
const PORT = process.env.PORT || 3050;
const fs = require('fs');


app.use(express.urlencoded({extended: true}));
app.use(express.json());

require('./apiRoutes')(app);
require('./htmlRoutes') //this needs to be the route;

app.listen(PORT, () => {
    console.log(`App is listening on PORT: ${PORT}`);
});