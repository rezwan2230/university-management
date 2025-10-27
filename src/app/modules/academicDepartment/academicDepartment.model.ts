import { model, Schema } from 'mongoose';
import { TAcademicDepartment } from './academicDepartment.interface';

export const createAcademicDepartmentSchema = new Schema<TAcademicDepartment>(
  {
    name: {
      type: String,
      required: [true, 'Academic Department name is required!!'],
      unique: true,
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      required: [true, 'Academic Faculty name is required!!'],
      ref: 'AcademicFaculty',
    },
  },
  {
    timestamps: true,
  },
);

export const AcademicDepartment = model<TAcademicDepartment>(
  'academicDepartment',
  createAcademicDepartmentSchema,
);
