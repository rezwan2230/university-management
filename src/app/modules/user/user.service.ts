import config from '../../config';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { TStudent } from '../students/student.interface';
import { Student } from '../students/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';
import { generatedStudentId } from './user.utils';

const createUserIntoDb = async (password: string, payload: TStudent) => {
  //For user
  const userData: Partial<TUser> = {};
  userData.password = password || (config.default_password as string);
  userData.role = 'student';

  //find  academic Semester Info
  const admissionSemester = await AcademicSemester.findById(
    payload.admissionSemester,
  );
  if (admissionSemester) {
    userData.id = await generatedStudentId(admissionSemester);
  }

  //   create a user
  const newUser = await User.create(userData);

  //create a student
  if (Object.keys(newUser).length) {
    payload.id = newUser.id;
    payload.user = newUser._id; //referance _id
  }

  const newStudent = await Student.create(payload);
  return newStudent;
};

export const UserServices = {
  createUserIntoDb,
};
