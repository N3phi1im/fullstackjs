var Bug = (function () {
    function Bug(description, priority, submittedBy, created, _id) {
        this.description = description;
        this.priority = priority;
        this.submittedBy = submittedBy;
        this.created = created;
        this._id = _id;
    }
    return Bug;
})();
module.exports = Bug;
