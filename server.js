const express = require('express');
const app = express();
const PORT = process.env.PORT || 3050;
const fs = require('fs');



app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app) //this needs to be the route;

app.listen(PORT, () => {
    console.log(`App is listening on PORT: ${PORT}`);
});

app.get()

// fs.readFile(__dirname + 'public/index.html', function(err, data) {
//     if (err) throw err;
//     res.writeHead(200, { 'Content-Type': 'public/notes.html'});
//     res.end(data);
// });

