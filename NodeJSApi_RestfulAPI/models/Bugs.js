var Guid = require('guid');

var BugConstructor = function(description, priority, submittedBy) {
  this.description = description;
  this.priority = priority;
  this.submittedBy = submittedBy;
  this.created = new Date();
  this._id = Guid.create();
}

module.exports = BugConstructor;
