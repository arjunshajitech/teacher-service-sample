const express = require('express');
const router = express.Router();
const db = require('./connection')

router.use(express.json());

/* <<<<<<<<<<<<<<<<<<<<<< add notes >>>>>>>>>>>>>>>>>>>>> */
router.post('/note', (req, res) => {

    var subject = req.body['subject'];
    var sem = req.body['sem'];
    var note = req.body['note'];

    const insertQuery = `INSERT INTO notes (subject,sem,note) VALUES (?, ?, ?)`;

    db.query(insertQuery, [subject,sem,note], (error) => {
        if (error) {
          console.error(error);
          return res.status(500).json({ error: 'Internal Server Error' });
        }
    })

    res.json({ message: 'Note added successfully !' });
})


/* <<<<<<<<<<<<<<<<<<<<<< get notes by sem >>>>>>>>>>>>>>>>>>>>> */
router.get('/note/:sem',(req,res) => {

    var sem = req.params.sem;
    
    const selectQuery = `SELECT * FROM notes WHERE sem = ?`;
    db.query(selectQuery, [sem], (error, results) => {
        if (error) {
          console.error(error);
          return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json(results);
      });
}) 

module.exports = router;