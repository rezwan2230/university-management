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

createAcademicDepartmentSchema.pre('save', async function (next) {
  const isDepartmentExist = await AcademicDepartment.findOne({
    name: this.name,
  });
  if (isDepartmentExist) {
    throw new Error('The department is already exists!!');
  }
  next();
});

createAcademicDepartmentSchema.pre('findOneAndUpdate', async function (next) {
  const query = this.getQuery();
  const isDepartmentExist = await AcademicDepartment.findOne(query);
  if (!isDepartmentExist) {
    throw new Error("The department doesn't exists!!");
  }
  next();
});

export const AcademicDepartment = model<TAcademicDepartment>(
  'academicDepartment',
  createAcademicDepartmentSchema,
);
