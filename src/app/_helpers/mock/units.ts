import {
  MockUnit,
  // MockUnitModule,
  MockAccountsTransactionDesc,
  MockChequesTransactionDesc,
  MockContactBankTransactionDesc,
  MockIPOTransactionDesc,
} from '../models/backend';

export const MOCK_UNITS: MockUnit[] = [
  new MockUnit('IN', 'India'),
  new MockUnit('US', 'United States'),
  new MockUnit('QA', 'Qatar'),
  new MockUnit('FR', 'France'),
  new MockUnit('AE', 'United Arab Emirates'),
];

export const MOCK_ACCOUNT_TRANSACTION_DESCS: MockAccountsTransactionDesc[] = [
  new MockAccountsTransactionDesc(1, 'Account Statement'),
  new MockAccountsTransactionDesc(2, 'Account Summary'),
  new MockAccountsTransactionDesc(42, 'Add Account Delegation'),
  new MockAccountsTransactionDesc(3, 'Cancel Auto Renew Fixed'),
  new MockAccountsTransactionDesc(4, 'Cheque Book Request'),
  new MockAccountsTransactionDesc(5, 'Cheque Book Request Statement'),
  new MockAccountsTransactionDesc(6, 'Cheque History'),
  new MockAccountsTransactionDesc(7, 'Delete Account Delegatioin'),
  new MockAccountsTransactionDesc(8, 'E-statement'),
  new MockAccountsTransactionDesc(10, 'Open E-saving Account'),
  new MockAccountsTransactionDesc(11, 'Open a New Deposit'),
  new MockAccountsTransactionDesc(12, 'Pay Bill'),
  new MockAccountsTransactionDesc(13, 'Transfer money'),
  new MockAccountsTransactionDesc(14, 'View more than 6 month transactions'),
];

export const MOCK_CHEQUES_TRANSACTION_DESCS: MockChequesTransactionDesc[] = [
  new MockChequesTransactionDesc(15, 'Cheque Book Request'),
  new MockChequesTransactionDesc(16, 'Cheque Book Request Status'),
  new MockChequesTransactionDesc(17, 'Cheque History'),
];

export const MOCK_CONTACT_BANK_TRANSACTION_DESCS: MockContactBankTransactionDesc[] = [
  new MockContactBankTransactionDesc(18, 'Apply for Product'),
  new MockContactBankTransactionDesc(19, 'Contact Bank'),
  new MockContactBankTransactionDesc(20, 'Flexi'),
  new MockContactBankTransactionDesc(21, 'Hala Top Up'),
  new MockContactBankTransactionDesc(22, 'Kahramaa Bill Payment'),
  new MockContactBankTransactionDesc(23, 'Ocard'),
  new MockContactBankTransactionDesc(24, 'Ooredoo'),
  new MockContactBankTransactionDesc(25, 'Ooredoo Bills'),
  new MockContactBankTransactionDesc(26, 'QCool'),
  new MockContactBankTransactionDesc(27, 'Qcool Bills'),
  new MockContactBankTransactionDesc(28, 'Qpost Bills'),
  new MockContactBankTransactionDesc(29, 'Save Bill'),
  new MockContactBankTransactionDesc(30, 'School'),
  new MockContactBankTransactionDesc(31, 'School Payment'),
  new MockContactBankTransactionDesc(31, 'School Payment Soft Launch'),
  new MockContactBankTransactionDesc(32, 'Test New Partner'),
  new MockContactBankTransactionDesc(33, 'View paiment history'),
  new MockContactBankTransactionDesc(34, 'Voda bill pay'),
  new MockContactBankTransactionDesc(35, 'Vodafone'),
  new MockContactBankTransactionDesc(36, 'WOQOD'),
];

export const MOCK_IPO_TRANSACTION_DESCS: MockIPOTransactionDesc[] = [
  new MockIPOTransactionDesc(37, 'IPO Subscription'),
];

