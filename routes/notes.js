const notes = require('express').Router();
const fs = require('fs')

notes.get('/', (req, res) => {
fs.readFile('./db/db.json', function(err, data) {
  res.json(JSON.parse(data))
})
})

notes.post('/', (req, res) => {
  const { title, text } = req.body;
if (req.body) {
  var notedata = []
    const newNote = {
     title,
     text,
    };
    fs.readFile('./db/db.json', function readFileCallback(err, data){
      if (err){
        console.log(err);
    } else {
      notedata = JSON.parse(data);
      notedata.push(newNote); //add some data
    json = JSON.stringify(notedata); //convert it back to json
    fs.writeFile('./db/db.json', json, 'utf8', function (err, data) {
      res.json(`Note added successfully 🚀`);
    }); // write it back 
}})} else {
    res.error('Error in adding note');
  }
})

notes.delete('/:id', (req, res) => {
  const { title, text } = req.body;
if (req.body) {
  var notedata = []
    const deleteNote = {
     title,
     text,
    };
    fs.readFile('./db/db.json', function readFileCallback(err, data){
      if (err){
        console.log(err);
    } else {
      notedata = JSON.parse(data);
      for (i = 0; i < notedata.length; i++) {
        if(notedata[i].toString() == deleteNote.toString()) {
          console.log(notedata);
          delete notedata[i];
          var filtered = notedata.filter(function (el) {
            return el != null;
          });
          console.log(filtered);
          var json = JSON.stringify(filtered);
          console.log(json)
          fs.writeFile('./db/db.json', json, function (err, data) {
        }
        
        );break; 
      }else {
        console.log(notedata[i].toString() == deleteNote.toString())
        console.log(notedata[i])
        console.log(deleteNote)
      }
    };
    }})}
})



module.exports = notes;