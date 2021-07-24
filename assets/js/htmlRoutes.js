const path = require('path');

module.exports = (app) => {
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
        });
    app.get('*', (req,res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
};

fs.readFile(__dirname + '/index.html', function(err, data) {
    if (err) throw err;
    res.writeHead(200, { 'Content-Type': 'text/html'});
    res.end(data);
});