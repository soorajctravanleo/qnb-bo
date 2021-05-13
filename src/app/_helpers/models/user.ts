export class User {

  constructor(
    public id: number,
    private username: string,
    private password: string,
    public token: string,
    public firstName: string,
    public lastName: string
  ) {}

  get fullName() {
    return `${this.firstName} ${this.lastName}`.trim();
  }
}