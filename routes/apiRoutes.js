const noteDb = require('../db/db.json');
const fs = require('fs');
const path = require('path');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(noteDb));
        console.log('we are getting it');
    
    app.post('/api/notes', (req,res) => {
        let newNote = req.body;
        notes.push(newNote);

        fs.readFile("./db/db.json", (err, data) => {
            let jsonNotes = JSON.stringify(noteDb)
            let notes = JSON.parse(data)
            
            fs.writeFile("./db/db.json", jsonNotes, (err) => {
                if (err) {
                    return console.log(err)
                } res.json(notes)
                console.log("Success!");
            })   
        
        })
        })
        
        //console.log('We are posting it')
        

    
}