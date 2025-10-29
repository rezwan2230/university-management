/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { ErrorRequestHandler } from 'express';
import z, { length, ZodError, ZodIssue } from 'zod';
import config from '../config';
import handleZodError from '../errors/handleZodError';
import { TErrorSources } from '../interface/error';
import handleValidationError from '../errors/handleValidationError';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  //setting default values
  let statusCode = err.statusCode || 500;
  let message = err.message || 'something went wrong';
  let errorSources: TErrorSources = [
    {
      path: '',
      message: 'something went wrong',
    },
  ];

  if (err instanceof z.ZodError) {
    const simplefiedError = handleZodError(err);
    statusCode = simplefiedError?.statusCode;
    message = simplefiedError?.message;
    errorSources = simplefiedError?.errorSources;
  } else if (err?.name == 'ValidationError') {
    const simplefiedError = handleValidationError(err);
    statusCode = simplefiedError?.statusCode;
    message = simplefiedError?.message;
    errorSources = simplefiedError?.errorSources;
  }

  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    stack: config.NODE_ENV == 'development' ? err.stack : null,
  });
};

export default globalErrorHandler;

/* pattern
success
message
errorSources : [
  path: "",
  message: ""
]
stack
*/
