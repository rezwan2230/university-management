import { model, Schema } from 'mongoose';
import {
  TAcademicSemester,
  TAcademicSemesterCode,
  TAcademicSemesterName,
  TMonths,
} from './academicSemester.interface';

const months: TMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const academicSemesterName: TAcademicSemesterName[] = [
  'Autumn',
  'Summar',
  'Fall',
];
const academicSemesterCode: TAcademicSemesterCode[] = ['01', '02', '03'];

const academicSemesterSchema = new Schema<TAcademicSemester>({
  name: {
    type: String,
    enum: academicSemesterName,
    required: [true, 'Academic Semester name is required'],
  },
  code: {
    type: String,
    enum: academicSemesterCode,
    required: [true, 'Semester Code is required'],
  },
  year: {
    type: Date,
    required: [true, 'Date is required'],
  },
  startMonth: {
    type: String,
    enum: months,
    required: [true, 'Start month is required'],
  },
  endMonth: {
    type: String,
    enum: months,
    required: [true, 'End month is required'],
  },
});

export const AcademicSemester = model<TAcademicSemester>(
  'academicSemester',
  academicSemesterSchema,
);
