import express = require('express')
import Bug = require('../models/Bug');

let router = express.Router();

let bugs = [];
bugs.push(new Bug('There is no angular yet!', 7, 'jeremy'));
bugs.push(new Bug('Where is the html?', 2, 'isaiah'));
bugs.push(new Bug('Why is there no css in this project?', 4, 'cody'));

router.use(function(req, res, next) {
  //should console.log(method : /api/bugs) most of the time
  console.log(req.method + " : " + req.originalUrl);
  next();
});

router.param('id', function(req, res, next, id) {
  for(var i = 0; i < bugs.length; i++) {
    //if the ID in the parameter is equal to this bug's id, then put it on the req object and break out of the function
    if(bugs[i]._id === id) {
      req['bug'] = bugs[i];
      return next();
    }
  }
  //if a bug has not been found with this id then send a message back to the client
  // var err = {
  //   status: 400,
  //   error: 'Could not find bug: ' + id
  // }
  // next(err);
  res.status(400).send({err: "Could not find that bug."});
});

// GET /api/bugs
router.get('/', function(req, res) {
  //needs to return an array for the $resource
  res.json(bugs);
});

// GET /api/bugs/:id
router.get('/:id', function(req, res) {
  res.json(req['bug']);
});

// POST /api/bugs
router.post('/', function(req, res) {
  if(!req.body.description || !req.body.priority || !req.body.submittedBy) {
    return res.status(400).send({error: 'Please fill out all fields.'})
  }
  var bug = new Bug(req.body.description, req.body.priority, req.body.submittedBy);
  bugs.push(bug);
  res.send({name: bug._id, created: bug.created});
});

// PUT /api/bugs/:id
router.put('/:id', function(req, res) {
  if(!req.body.description || !req.body.priority || !req.body.submittedBy) {
    return res.status(400).send({error: 'Please fill out all fields.'})
  }
  req['bug'].description = req.body.description;
  req['bug'].submittedBy = req.body.submittedBy;
  req['bug'].priority = req.body.priority;
  // bugs[bugs.indexOf(req['bug'])] = req.body;
  res.json(req['bug']);
});

// DELETE /api/bugs/:id
router.delete('/:id', function(req, res) {
  bugs.splice(bugs.indexOf(req['bug']), 1);
  res.sendStatus(200);
});

// router.use(function(err, req, res, next) {
//   //if I am passing back my custom err object, use it. Otherwise just send the whole error.
//   if(err.status && err.error) {
//     res.status(err.status).send(err.error);
//   } else {
//     console.log(err);
//     res.status(500).send(err);
//   }
// });

export = router;
