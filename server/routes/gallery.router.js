const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    const galleryId = req.params.id;
    // save a query to add a like to an image in the DB with a sanitized galleryId
    const queryText = `UPDATE "images" SET "likes" = likes + 1 WHERE "id" = $1;`
    // request a like increase to DB
    pool.query(queryText, [galleryId])
        .then(response => {
            // send back an OK if succesful
            res.sendStatus(200);
        })
        .catch(err => {
            console.log('Server error with PUT request to DB', err);
            res.sendStatus(500);
        });
}); // END PUT Route


// GET Route
router.get('/', (req, res) => {
    // save a query to get all data from DB sorted by id
    const queryText = `SELECT * FROM "images" ORDER BY "id" ASC`
    // request data from DB
    pool.query(queryText)
        .then(response => {
            console.log('Received data from DB', response.rows);
            res.send(response.rows);
        })
        .catch(err => {
            console.log('Server error with GET request to DB', err);
            res.sendStatus(500)
        });
}); // END GET Route

module.exports = router;