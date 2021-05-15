export type ErrorTypes = ('unauthorized' | 'notFound' | 'general');

export interface MockResponse {
  errorType?: ErrorTypes;
  errorMessage?: string;
  res?: unknown;
}
