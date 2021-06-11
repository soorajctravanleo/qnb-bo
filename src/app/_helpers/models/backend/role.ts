export enum RoleStatus {
  INACTIVE,
  ACTIVE,
}

export interface MockRoleData {
  roleName: string;
  description: string;
  multiLogin: boolean;
  noPasswordExpiry: boolean;
  nokLogin: boolean;
  decentLogin: boolean;
  makerId: number;
}

export class MockRole {
  constructor(
    public id: number,
    public data: MockRoleData,
    public status = RoleStatus.ACTIVE,
    public makerDate = new Date().getTime(),
  ) { }
}

export class MmockRole {
  constructor(
    public role: string,
    public unit: string,
    public description: string,
    public type: string,
    public access_to: string,
  ) { }
}
