export enum RoleStatus {
  INACTIVE,
  ACTIVE,
}

export class MockRole {

  constructor(
    public id: number,
    public roleName: string,
    public description: string,
    public status: RoleStatus,
    public multiLogin: boolean,
    public noPasswordExpiry: boolean,
    public makerId: number,
    public makerDate: number,
  ) {}
}
