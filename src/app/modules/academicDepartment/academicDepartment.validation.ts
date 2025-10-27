import { z } from 'zod';

const createAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z
      .string()
      .trim()
      .min(1, { message: 'Name is required' })
      .refine((val) => typeof val === 'string', {
        message: 'Name must be a string',
      }),

    academicFaculty: z
      .string()
      .trim()
      .min(1, { message: 'Faculty is required' })
      .regex(/^[0-9a-fA-F]{24}$/, { message: 'Invalid Faculty ID format' }),
  }),
});

const updateAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z
      .string()
      .trim()
      .min(1, { message: 'Name is required' })
      .refine((val) => typeof val === 'string', {
        message: 'Name must be a string',
      })
      .optional(),

    academicFaculty: z
      .string()
      .trim()
      .min(1, { message: 'Faculty is required' })
      .regex(/^[0-9a-fA-F]{24}$/, { message: 'Invalid Faculty ID format' })
      .optional(),
  }),
});

export const AcademicDepartmentValidationsSchemas = {
  createAcademicDepartmentValidationSchema,
  updateAcademicDepartmentValidationSchema,
};
