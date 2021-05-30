export class MockTransactionDesc {
  constructor(
    public id: number,
    public modelId: number,
    public name: string,
  ) {}
}

export class MockUnitModule {
  constructor(
    public id: number,
    public name: string,
    public code: string,
  ) {}
}
export class MockUnit {
  constructor(
    public code: string,
    public name: string,
  ) {}
}
