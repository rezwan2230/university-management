import z from 'zod';

const createAcademicSemesterValidationSchema = z.object({
  body: z.object({
    name:z.enum(['Autumn', 'Summer', 'Fall']),
    code: z.enum(['01','02','03']),
    year: z.date().

  })
});

export const academicSemesterValidations = {
  createAcademicSemesterValidationSchema,
};
