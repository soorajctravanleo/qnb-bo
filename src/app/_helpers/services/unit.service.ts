import { Injectable } from '@angular/core';

import {
  MOCK_UNITS,
  MOCK_ACCOUNT_TRANSACTION_DESCS,
  MOCK_CHEQUES_TRANSACTION_DESCS,
  MOCK_CONTACT_BANK_TRANSACTION_DESCS,
  MOCK_IPO_TRANSACTION_DESCS,
} from '../mock';
import { MockResponse } from '../types/backend';

@Injectable({
  providedIn: 'root',
})

export class MockUnitService {
  getUnits(): MockResponse {
    return { res: [...MOCK_UNITS] };
  }

  getAccountTransactionDescs(): MockResponse {
    return { res: [...MOCK_ACCOUNT_TRANSACTION_DESCS] };
  }

  getChequesTransactionDescs(): MockResponse {
    return { res: [...MOCK_CHEQUES_TRANSACTION_DESCS] };
  }

  getContactBankTransactionDescs(): MockResponse {
    return { res: [...MOCK_CONTACT_BANK_TRANSACTION_DESCS] };
  }

  getIPOTransactionDescs(): MockResponse {
    return { res: [...MOCK_IPO_TRANSACTION_DESCS] };
  }
}
