const noteData = require('../data/noteData');
const noteDb = require('../db/db.json');
const fs = require('fs');
const path = require('path');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(notes));
        console.log('we are getting it');
    
    app.post('/api/notes', (req,res) => {
        notes.push(req.body);
        
    
    }
        //console.log('We are posting it')
        

    )
}