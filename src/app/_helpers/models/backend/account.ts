export class MockAccount {

  constructor(
    public id: number,
    public username: string,
    public password: string,
    public access_token: string,
    public firstName: string,
    public lastName: string,
  ) { }

  validateLogin(username: string, password: string) {
    return ((this.username === username) && (this.password === password));
  }

  validateToken(token: string) {
    return this.token === token;
  }
}
