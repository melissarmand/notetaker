const noteData = require('../data/noteData');
const noteDb = require('../db/db.json');
const fs = require('fs');
const path = require('path');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(noteDb));
        console.log('we are getting it');
    
    app.post('/api/notes', (req,res) => {
        var newNote = req.body;
        

        fs.writeFile('noteDb', JSON.stringify(newNote), function(err) {
            if (err) throw (err);
        });
        console.log('file written to db')
        
        res.json(newNote);


    
    }
        //console.log('We are posting it')
        

    )
}