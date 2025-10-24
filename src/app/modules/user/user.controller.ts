import { Request, Response, NextFunction } from 'express';
import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import status from 'http-status';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = req.body;
    const result = await UserServices.createUserIntoDb(password, studentData);
    // res.status(200).json({
    //   success: true,
    //   message: 'Student Create Successfully',
    //   data: result,
    // });
    sendResponse(res, {
      success: true,
      statusCode: status.OK,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const UserControllers = {
  createStudent,
};
