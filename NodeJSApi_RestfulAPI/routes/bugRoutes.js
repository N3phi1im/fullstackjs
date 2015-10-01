var express = require('express');
var Bug = require('../models/Bug');
var router = express.Router();
var bugs = [];
bugs.push(new Bug('There needs to be more comments in this code', 7, 'jeremy'));
router.use(function (req, res, next) {
    console.log(req.method + " : " + req.originalUrl);
    next();
});
router.param('id', function (req, res, next, id) {
    for (var i = 0; i < bugs.length; i++) {
        if (bugs[i]._id.equals(id)) {
            req['bug'] = bugs[i];
            return next();
        }
    }
    var err = {
        status: 400,
        error: 'Could not find bug: ' + id
    };
    next(err);
});
router.get('/', function (req, res) {
    console.log(bugs);
    res.json(bugs);
});
router.get('/:id', function (req, res) {
    res.json(req['bug']);
});
router.post('/', function (req, res) {
    if (!req.body.description || !req.body.priority || !req.body.submittedBy) {
        return res.status(400).send({ error: 'Please fill out all fields.' });
    }
    var bug = new Bug(req.body.description, req.body.priority, req.body.submittedBy);
    bugs.push(bug);
    res.send({ name: bug._id, created: bug.created });
});
router.put('/:id', function (req, res) {
    req.body._id = req['bug']._id;
    bugs[bugs.indexOf(req['bug'])] = req.body;
    res.json(req.body);
});
router.delete('/:id', function (req, res) {
    bugs.splice(bugs.indexOf(req['bug']), 1);
    res.send(200);
});
module.exports = router;
