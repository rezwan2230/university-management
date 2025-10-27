import { model, Schema } from 'mongoose';
import { TAcademicFaculty } from './academicFaculty.interface';

const createAcademicFacultySchema = new Schema<TAcademicFaculty>(
  {
    name: {
      type: String,
      requird: [true, 'Academic Faculty name is required!!'],
    },
  },
  {
    timestamps: true,
  },
);

export const AcademicFaculty = model<TAcademicFaculty>(
  'academicFaculty',
  createAcademicFacultySchema,
);
