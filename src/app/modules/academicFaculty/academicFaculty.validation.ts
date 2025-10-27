import z from 'zod';

const createAcademicFacultyValidationSchema = z.object({
  body: z.object({
    name: z.string('Faculty name is required!!'),
  }),
});

const updateAcademicFacultyValidationSchema = z.object({
  body: z
    .object({
      name: z.string('Faculty name is required!!'),
    })
    .optional(),
});

export const AcademicFacultyValidation = {
  createAcademicFacultyValidationSchema,
  updateAcademicFacultyValidationSchema,
};
