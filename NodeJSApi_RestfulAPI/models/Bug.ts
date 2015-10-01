import Uuid = require('uuid');

class Bug {
  public _id: string;
  public created: Date;
  constructor(
    public description:string,
    public priority:number,
    public submittedBy:string
  ) {
    this._id = Uuid.raw();
    this.created = new Date();
  }
}

export = Bug;
