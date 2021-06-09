export class Mock_Pending_Role_Approvals {
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
    public comments: string,
    public requestStatus: string
  ) {}
}

export class Mock_Pending_User_Approvals {
  constructor(
    public requestNo: string,
    public userId: string,
    public userName: string,
    public role: string,
    public type: string,
    public expiryDate: string,
    public status: string,
    public requestType: string,
    public requestedDate: string,
    public makerId: string,
    public comments: string
  ) {}
}
