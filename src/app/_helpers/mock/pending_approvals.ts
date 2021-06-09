import {
  Mock_Pending_Role_Approvals,
  Mock_Pending_User_Approvals,
} from "../models/backend";

export const MOCK_PENDING_ROLE_APPROVALS: Mock_Pending_Role_Approvals[] = [
  new Mock_Pending_Role_Approvals(
    "qb12489914",
    "Test1",
    "This is a test Role",
    "QATAR",
    "MAKER",
    "Enabled",
    "ADD",
    "29-12-2020",
    "UD1001",
    "test comment",
    "PENDING"
  ),
  new Mock_Pending_Role_Approvals(
    "qb12489914",
    "Test2",
    "This is a another test",
    "QATAR",
    "MAKER",
    "Enabled",
    "ADD",
    "29-12-2020",
    "UD1001",
    "test comment",
    "PENDING"
  ),
];

export const MOCK_PENDING_USER_APPROVALS: Mock_Pending_User_Approvals[] = [
  new Mock_Pending_User_Approvals(
    "qb12489912",
    "131asp",
    "Mahesh",
    "Maker",
    "Test",
    "29/12/2021",
    "Enabled",
    "ADD",
    "29/12/2020",
    "UD1001",
    "test comment0"
  ),
  new Mock_Pending_User_Approvals(
    "qb12489913",
    "131asp",
    "Hasif",
    "Maker",
    "Test",
    "20/12/2021",
    "Enabled",
    "ADD",
    "29/12/2020",
    "UD1001",
    "test comment10"
  ),
  new Mock_Pending_User_Approvals(
    "qb12489914",
    "131asp",
    "Francis",
    "Maker",
    "Test",
    "29/12/2021",
    "Enabled",
    "MODIFY",
    "29/12/2020",
    "UD1001",
    "test comment 4"
  ),
];
