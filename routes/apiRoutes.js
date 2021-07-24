const noteData = require('../data/noteData');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(noteData));

    app.post('/api/notes', (req,res) => {
        if (noteData.length < 20) {
            noteData.push(req.body);
            res.json(true);
        } else {
            
        }
        
    })
}