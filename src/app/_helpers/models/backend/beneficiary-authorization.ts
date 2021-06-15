export class MockBeneficiaryAuthorization {
  constructor(
    public requestDate: string,
    public customerName: string,
    public transactionName: string,
    public unit: string,
    public profile: string,
    public lastViewedBy: string,
    public lastViewedDateOrTime: string,
    public channel: string,
    public bankName: string,
    public branch: string,
    public city: string,
    public beneficiaryName: string,
    public beneficiaryAccountNo: string,
    public currencyOfBeneficiaryAcc: string,
    public intermediateBankSwiftAcc: string,
    public swiftCode: string,
    public routing: string,
    public sortOrChips: number,
    public mobileNo: number,
    public customerNationalId: string
  ) {}
}
