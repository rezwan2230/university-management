import { Request, Response, NextFunction } from 'express';
import { UserServices } from './user.service';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = req.body;
    const result = await UserServices.createUserIntoDb(password, studentData);
    res.status(200).json({
      success: true,
      message: 'Student Create Successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const UserControllers = {
  createStudent,
};
