/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { ErrorRequestHandler } from 'express';
import z, { length, ZodError, ZodIssue } from 'zod';
import { TErrorSouces } from '../interface/error';
import config from '../config';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  //setting default values
  let statusCode = err.statusCode || 500;
  let message = err.message || 'something went wrong';

  let errorSources: TErrorSouces = [
    {
      path: '',
      message: 'something went wrong',
    },
  ];

  const handleZodError = (err: ZodError) => {
    const errorSources: TErrorSouces = err.issues.map((issue: ZodIssue) => {
      return {
        path: issue?.path[issue.path.length - 1]?.toString() || '',
        message: issue.message,
      };
    });
    statusCode = 400;

    return {
      statusCode,
      message: 'Validation Error',
      errorSources,
    };
  };

  if (err instanceof z.ZodError) {
    const simplefiedError = handleZodError(err);
    statusCode = simplefiedError?.statusCode;
    message = simplefiedError?.message;
    errorSources = simplefiedError?.errorSources;
  }

  //ultimate return
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
