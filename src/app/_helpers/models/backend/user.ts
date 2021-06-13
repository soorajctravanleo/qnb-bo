export enum MockUserTypeId {
  CONTRACT = 1,
  FULLTIME,
}

export interface MockUserProfileData {
  userId: number;
  name?: string;
  nickName?: string;
  firstName?: string;
  lastName?: string;
  dob?: string;
  userStatus?: string;
  userType?: MockUserTypeId;
  entity?: number;
  role: any;
  mobile?: string;
  email?: string;
  expiryDate?: string;
  expiry_Date?: any;
  timezone?: number;
  language?: number;
  sendPasswordOnEmail?: boolean;
}

export interface MockUserAdditionalInfoData {
  ttl: string;
  country: number;
  startDate: string;
  attr1: string;
  attr2: string;
  attr3: string;
  attr4: string;
  macId: string;
}

export interface MockUserLoginRestrictionData {
  userId: number;
  firstName: string;
  loginRestriction: boolean;
}

export interface MockUserData {
  profile: MockUserProfileData;
  additionalInfo: MockUserAdditionalInfoData;
  loginRestriction: MockUserLoginRestrictionData;
}

export class MockUser {
  constructor(
    public id: number,
    public data: MockUserData,
  ) { }
}

export class MockUserType {
  constructor(
    public id: number,
    public name: string,
  ) { }
}
