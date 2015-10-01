import Guid = require('guid');

class Bug {
  public _id: string;
  public created: Date;
  constructor(
    public description:string,
    public priority:number,
    public submittedBy:string
  ) {
    this._id = Guid.raw();
    this.created = new Date();
  }
}

export = Bug;
