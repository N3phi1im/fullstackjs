var Guid = require('guid');
var Bug = (function () {
    function Bug(description, priority, submittedBy) {
        this.description = description;
        this.priority = priority;
        this.submittedBy = submittedBy;
        this._id = Guid.raw();
        this.created = new Date();
    }
    return Bug;
})();
module.exports = Bug;
