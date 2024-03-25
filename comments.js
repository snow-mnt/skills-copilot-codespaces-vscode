// Create web server
// Create the following routes:
// GET /comments - return all comments
// GET /comments/:id - return a single comment
// POST /comments - create a new comment
// PUT /comments/:id - update a comment
// DELETE /comments/:id - delete a comment

// Path: comments.js
const express = require('express');
const router = express.Router();

router.get('/comments', (req, res) => {
    res.send('GET /comments');
});

router.get('/comments/:id', (req, res) => {
    res.send('GET /comments/:id');
});

router.post('/comments', (req, res) => {
    res.send('POST /comments');
});

router.put('/comments/:id', (req, res) => {
    res.send('PUT /comments/:id');
});

router.delete('/comments/:id', (req, res) => {
    res.send('DELETE /comments/:id');
});

module.exports = router;

// Path: app.js
const express = require('express');
const comments = require('./comments');

const app = express();

app.use(comments);

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});

// Run the server
// $ node app.js
// Server started on http://localhost:3000
// Open your browser and visit http://localhost:3000/comments