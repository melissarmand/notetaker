const noteData = require('../data/noteData');
const path = require('path');

module.exports = (app) => {
    app.get('/api/notes', (req, res) =>  {
        res.sendFile(path.join(__dirname, '../db/db.json'));
        });
    app.post('/api/notes', (req,res) => {
        // if (noteData.length < 20) {
        //     noteData.push(req.body);
        //     res.json(true);
        // } else {
            
        // }
        
    })
}