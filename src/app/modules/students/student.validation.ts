import { z } from 'zod';

const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .nonempty({ message: 'First name is required' })
    .max(20, { message: 'First name can not be more than 20 characters' }),
  middleName: z.string().optional(),
  lastName: z
    .string()
    .nonempty({ message: 'Last name is required' })
    .max(20, { message: 'Last name can not be more than 20 characters' }),
});

const guardianValidationSchema = z.object({
  fatherName: z.string().nonempty({ message: 'Father name is required' }),
  fatherOccupation: z
    .string()
    .nonempty({ message: 'Father occupation is required' }),
  fatherContactNo: z
    .string()
    .nonempty({ message: 'Father contact number is required' }),
  motherName: z.string().nonempty({ message: 'Mother name is required' }),
  motherOccupation: z
    .string()
    .nonempty({ message: 'Mother occupation is required' }),
  motherContactNo: z
    .string()
    .nonempty({ message: 'Mother contact number is required' }),
});

const localGuardianValidationSchema = z.object({
  name: z.string().nonempty({ message: 'Local guardian name is required' }),
  occupation: z
    .string()
    .nonempty({ message: 'Local guardian occupation is required' }),
  contactNo: z
    .string()
    .nonempty({ message: 'Local guardian contact number is required' }),
  address: z
    .string()
    .nonempty({ message: 'Local guardian address is required' }),
});

export const studentValidationSchema = z.object({
  id: z.string().nonempty({ message: 'Student ID is required' }),

  name: userNameValidationSchema,

  gender: z.enum(['male', 'female', 'other']),
  dateOfBirth: z.string().optional(),

  email: z.string().email({ message: 'Valid email is required' }),

  contactNo: z.string().nonempty({ message: 'Contact number is required' }),

  emergencyContactNo: z
    .string()
    .nonempty({ message: 'Emergency contact number is required' }),

  bloogGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    .optional(),

  presentAddress: z
    .string()
    .nonempty({ message: 'Present address is required' }),

  permanentAddress: z
    .string()
    .nonempty({ message: 'Permanent address is required' }),

  guardian: guardianValidationSchema,

  localGuardian: localGuardianValidationSchema,

  profileImg: z.string().optional(),

  isDeleted: z.boolean().optional().default(false),
});
