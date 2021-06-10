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
  ) {}
}
