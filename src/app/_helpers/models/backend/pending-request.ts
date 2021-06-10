export class MockPRRole {
  constructor(
    public requestNo: string,
    public roleName: string,
    public roleDescription: string,
    public unit: string,
    public roleType: string,
    public access: string,
    public requestType: string,
    public requestDate: string,
    public makerId: string,
    public requestStatus: string,
  ) {}
}

export class MockPRUser {
  constructor(
    public requestNo: string,
    public userId: string,
    public userName: string,
    public role: string,
    public expiryDate: string,
    public status: string,
    public requestType: string,
    public requestedDate: string,
    public makerId: string,
    public requestStatus: string,
  ) {}
}