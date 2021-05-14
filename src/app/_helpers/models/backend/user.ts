export enum MockUserType {
  FULLTIME,
  CONTRACT,
}

export class MockUserProfile {
  constructor(
    public userId: number,
    public nickName: string,
    public firstName: string,
    public lastName: string,
    public dob: string,
    public userType: MockUserType,
    public entity: number,
    public role: number,
    public mobile: string,
    public email: string,
    public expiryDate: string,
    public timezone: number,
    public language: number,
    public sendPasswordOnEmail: boolean,
  ) { }
}

export class MockUserAdditionalInfo {
  constructor(
    public ttl: string,
    public country: number,
    public startDate: string,
    public attr1: string,
    public attr2: string,
    public attr3: string,
    public attr4: string,
    public macId: string,
  ) { }
}

export class MockUserLoginRestriction {
  constructor(
    public userId: number,
    public firstName: string,
    public loginRestriction: boolean,
  ) { }
}

export class MockUser {
  constructor(
    public id: number,
    public profile: MockUserProfile,
    public additionalInfo: MockUserAdditionalInfo,
    public loginRestriction: MockUserLoginRestriction,
  ) { }
}
