import { ZodObject } from 'zod';
import { Request, Response, NextFunction } from 'express';

const validateRequest = (schema: ZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    //validation
    try {
      await schema.parseAsync({
        body: req.body,
      });
      next();
    } catch (error) {
      next(error);
    }
  };
};

export default validateRequest;
