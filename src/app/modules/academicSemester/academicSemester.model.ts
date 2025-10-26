import { model, Schema } from 'mongoose';
import { TAcademicSemester } from './academicSemester.interface';
import {
  academicSemesterCode,
  academicSemesterName,
  months,
} from './academicSemester.constant';

const academicSemesterSchema = new Schema<TAcademicSemester>(
  {
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
      type: String,
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
  },
  {
    timestamps: true,
  },
);

academicSemesterSchema.pre('save', async function (next) {
  const isSemesterExist = await AcademicSemester.findOne({
    name: this.name,
    year: this.year,
  });
  if (isSemesterExist) {
    throw new Error('Semester is already exist');
  }
  next();
});

export const AcademicSemester = model<TAcademicSemester>(
  'academicSemester',
  academicSemesterSchema,
);
