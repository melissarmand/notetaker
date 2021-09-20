const fs = require('fs');
const noteDb = JSON.parse(fs.readFileSync('./db/db.json'));
const path = require('path');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(noteDb));
        console.log('we are getting it');
    
    app.post('/api/notes', (req,res) => {
        let newNote = req.body;
        noteDb.push(newNote);

        fs.readFile("./db/db.json", (err) => {
            let jsonNotes = JSON.stringify(noteDb)
            
            
            fs.writeFile("./db/db.json", jsonNotes, (err) => {
                if (err) {
                    return console.log(err)
                } res.json(noteDb)
                console.log("Success!");
            })   
        
        })
        })
        
        //console.log('We are posting it')
        

    
}