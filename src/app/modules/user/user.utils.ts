import { TAcademicSemester } from '../academicSemester/academicSemester.interface';
import { User } from './user.model';

//! year semesterCode 4 digit number

const findLastStudentId = async () => {
  const lastStudent = await User.findOne(
    {
      role: 'student',
    },
    { id: 1, _id: 0 },
  )
    .sort({ createdAt: -1 })
    .lean();

  return lastStudent?.id ? lastStudent.id : undefined;
};

export const generatedStudentId = async (payload: TAcademicSemester) => {
  //first time
  let currentId = (0).toString();
  //2030 03 0001
  const lastStudentId = await findLastStudentId();
  const lastStudentSemesterYear = lastStudentId?.substring(0, 4);
  const lastStudentSemesterCode = lastStudentId?.substring(4, 6);

  const currnentSemesterCode = payload.code;
  const currnentSemesterYear = payload.year;

  if (
    lastStudentId &&
    lastStudentSemesterCode === currnentSemesterCode &&
    lastStudentSemesterYear === currnentSemesterYear
  ) {
    currentId = lastStudentId.substring(6);
  }
  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
  incrementId = `${payload.year}${payload.code}${incrementId}`;
  return incrementId;
};
