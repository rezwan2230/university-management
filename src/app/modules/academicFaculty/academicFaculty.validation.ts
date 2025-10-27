import z from 'zod';

const createAcademicFacultyValidationSchema = z.object({
  body: z.object({
    name: z.string('Faculty name is required!!'),
  }),
});

export const AcademicFacultyValidation = {
  createAcademicFacultyValidationSchema,
};
