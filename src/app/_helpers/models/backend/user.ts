export class MockUser {

  constructor(
    private id: number,
    private username: string,
    private password: string,
    private token: string,
    private firstName: string,
    private lastName: string
  ) {}

  validateLogin(username: string, password: string) {
    return ((this.username === username) && (this.password === password));
  }

  validateToken(token: string) {
    return this.token === token;
  }

  getUsername() {
    return this.username;
  }

  getId() {
    return this.id;
  }

  getFirstName() {
    return this.firstName;
  }

  getLastName() {
    return this.lastName;
  }

  getToken() {
    return this.token;
  }
}
