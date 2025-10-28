import mongoose from 'mongoose';
import config from '../../config';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { TStudent } from '../students/student.interface';
import { Student } from '../students/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';
import { generatedStudentId } from './user.utils';
import AppError from '../../errors/AppError';
import status from 'http-status';

const createUserIntoDb = async (password: string, payload: TStudent) => {
  //For user
  const userData: Partial<TUser> = {};
  userData.password = password || (config.default_password as string);
  userData.role = 'student';

  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    //find  academic Semester Info
    const admissionSemester = await AcademicSemester.findById(
      payload.admissionSemester,
    );
    if (admissionSemester) {
      userData.id = await generatedStudentId(admissionSemester);
    }
    //   create a user
    const newUser = await User.create([userData], { session });
    //create a student
    if (!newUser.length) {
      throw new AppError(status.BAD_REQUEST, 'Failed to create User');
    }
    payload.id = newUser[0]!.id;
    payload.user = newUser[0]!._id;

    const newStudent = await Student.create([payload], { session });

    if (!newStudent.length) {
      throw new AppError(status.BAD_REQUEST, 'Failed to create Student');
    }
    await session.commitTransaction();
    await session.endSession();
    return newStudent;
  } catch (error: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new AppError(status.EXPECTATION_FAILED, 'Failed to create');
  }
};

export const UserServices = {
  createUserIntoDb,
};
