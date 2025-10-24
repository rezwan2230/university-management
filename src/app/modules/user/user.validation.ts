import z from 'zod';

const userValidationSchema = z.object({
  password: z
    .string('Password must be a string')
    .max(20, { message: "password can't be more than 20 characters" })
    .min(4, { message: "password can't be less than 4 characters" })
    .optional(),
});

export const UserValidation = {
  userValidationSchema,
};
