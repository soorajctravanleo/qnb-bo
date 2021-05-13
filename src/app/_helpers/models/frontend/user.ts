export class User {

  constructor(
    private _id: number,
    private usrname: string,
    private tkn: string,
    private fName: string,
    private lName: string
  ) {}

  get fullName() {
    return `${this.fName} ${this.lName}`.trim();
  }

  get username() {
    return this.usrname;
  }

  get id() {
    return this._id;
  }

  get firstName() {
    return this.fName;
  }

  get lastName() {
    return this.lName;
  }

  get token() {
    return this.tkn;
  }
}