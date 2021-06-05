const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    console.log(req.params.id);
    
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            console.log('Before +=', galleryItem.likes);
            
            galleryItem.likes += 1;
            console.log('After +=', galleryItem.likes);
            
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    // save a query to get all data from DB sorted by id
    const queryText = `SELECT * FROM "images"`
    // request data from DB
    pool.query(queryText)
    .then(response => {
        console.log('Received data from DB', response.rows);
        res.send(response.rows);
    })
    .catch(err => {
        console.log('Server error with GET request to DB', err);
        res.sendStatus(500)
    })


    // res.send(galleryItems);
}); // END GET Route

module.exports = router;