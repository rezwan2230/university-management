import config from '../../config';
import { TStudent } from '../students/student.interface';
import { Student } from '../students/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';

const createUserIntoDb = async (password: string, studentdata: TStudent) => {
  //create a user object
  const userData: Partial<TUser> = {};
  // if password is not given, use default password;
  userData.password = password || (config.default_password as string);
  //set a student role
  userData.role = 'student';
  //set manually generated Id
  userData.id = '2030100001';
  //   create a user
  const newUser = await User.create(userData);

  //create a student
  if (Object.keys(newUser).length) {
    //set id, _id as user
    studentdata.id = newUser.id;
    studentdata.user = newUser._id; //referance _id
  }
  const newStudent = await Student.create(studentdata);
  return newStudent;
};

export const UserServices = {
  createUserIntoDb,
};
