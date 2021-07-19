const express = require('express');
const app = express();
const PORT = process.env.PORT || 3050;
const fs = require('fs');


app.use(express.urlencoded({extended: true}));
app.use(express.json());

require('./assets/js/apiRoutes')(app);
require('./assets/js/htmlRoutes')(app) //this needs to be the route;

app.listen(PORT, () => {
    console.log(`App is listening on PORT: ${PORT}`);
});