var Uuid = require('uuid');
var Bug = (function () {
    function Bug(description, priority, submittedBy) {
        this.description = description;
        this.priority = priority;
        this.submittedBy = submittedBy;
        this._id = Uuid.v4();
        this.created = new Date();
    }
    return Bug;
})();
module.exports = Bug;
