const noteData = require('./noteData');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(noteData));

    app.post('/api/notes', (req,res) => {
        
    })
}