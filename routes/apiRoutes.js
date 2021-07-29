const noteData = require('../data/noteData');
const noteDb = require('../db/db.json');
const fs = require('fs');
const path = require('path');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(noteDb));
        console.log('we are getting it');
    
    app.post('/api/notes', (req,res) => res.json(req.body)
        //console.log('We are posting it')
        

    )
}