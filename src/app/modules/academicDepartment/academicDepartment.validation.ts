import { z } from 'zod';

const createAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z
      .string({ error: 'Department Name is required' })
      .trim()
      .min(2, { error: 'Department Name must be at least 2 characters long' }),
    academicFaculty: z
      .string({ error: 'Faculty is required' })
      .trim()
      .regex(/^[0-9a-fA-F]{24}$/, { message: 'Invalid Faculty ID format' }),
  }),
});

const updateAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z
      .string({ error: 'Department Name is required' })
      .trim()
      .min(2, { error: 'Department Name must be at least 2 characters long' })
      .optional(),

    academicFaculty: z
      .string()
      .trim()
      .nonempty('Faculty is required')
      .optional(),
  }),
});

export const AcademicDepartmentValidationsSchemas = {
  createAcademicDepartmentValidationSchema,
  updateAcademicDepartmentValidationSchema,
};
