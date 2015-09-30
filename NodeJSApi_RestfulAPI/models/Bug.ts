import Guid = require('guid');


class Bug {
  constructor(
    public description:string,
    public priority:number,
    public submittedBy:string,
    public created?:Date,
    public _id?:string
  ) {}
}

export = Bug;
