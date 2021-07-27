const noteData = require('../data/noteData');
const noteDb = require('../db/db.json');
const path = require('path');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(noteDb));
    
    app.post('/api/notes', (req,res) => (noteDb).push(req.body)
    
       
        
    )
}