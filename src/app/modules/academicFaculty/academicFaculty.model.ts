import { model, Schema } from 'mongoose';
import { TAcademicFaculty } from './academicFaculty.interface';

const createAcademicFacultySchema = new Schema<TAcademicFaculty>(
  {
    name: {
      type: String,
      required: [true, 'Academic Faculty name is required!!'],
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

export const AcademicFaculty = model<TAcademicFaculty>(
  'AcademicFaculty',
  createAcademicFacultySchema,
);
