"use strict";
var express = require('express');
var Bug = require('../models/Bug');
var router = express.Router();
var bugs = [];
bugs.push(new Bug('There is no angular yet!', 7, 'jeremy'));
bugs.push(new Bug('Where is the html?', 2, 'isaiah'));
bugs.push(new Bug('Why is there no css in this project?', 4, 'cody'));
router.use(function (req, res, next) {
    console.log(req.method + " : " + req.originalUrl);
    next();
});
router.param('id', function (req, res, next, id) {
    for (var i = 0; i < bugs.length; i++) {
        if (bugs[i]._id === id) {
            req['bug'] = bugs[i];
            return next();
        }
    }
    res.status(400).send({ err: "Could not find that bug." });
});
router.get('/', function (req, res) {
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
    if (!req.body.description || !req.body.priority || !req.body.submittedBy) {
        return res.status(400).send({ error: 'Please fill out all fields.' });
    }
    req['bug'].description = req.body.description;
    req['bug'].submittedBy = req.body.submittedBy;
    req['bug'].priority = req.body.priority;
    res.json(req['bug']);
});
router.delete('/:id', function (req, res) {
    bugs.splice(bugs.indexOf(req['bug']), 1);
    res.sendStatus(200);
});
module.exports = router;
