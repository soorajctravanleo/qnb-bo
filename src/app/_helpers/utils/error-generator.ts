import { throwError } from 'rxjs';

type ErrorTypes = ('unauthorized' | 'notFound' | 'general');

export const generateError = (type: ErrorTypes, message: any) => {
  let status = 0;

  switch (type) {
    case 'unauthorized':
      status = 401;
      break;

    case 'notFound':
      status = 404;
      break;
  }

  return throwError({
    status,
    error: { message }
  });
};