import { z } from 'zod';
import { UserType } from '@/lib/constants';

export interface signUpSchemaType extends z.infer<typeof signupSchema> {}

export const signupSchema = z
  .object({
    name: z.string().min(3).max(50),
    lastname: z.string().min(3).max(50),
    email: z.string().email(),
    password: z
      .string()
      .min(6)
      .max(50)
      .refine(
        (password) =>
          RegExp(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/).test(
            password
          ),
        'Password is too weak'
      ),
    username: z.string().min(4).max(50),
    userType: z.nativeEnum(UserType),
    agency: z.string().optional(),
    mobile: z
      .string()
      .min(11)
      .max(11)
      .refine((mobile) => {
        return RegExp(/^[0-9]{11}$/).test(mobile);
      }, 'Invalid mobile number'),
  })
  .refine(
    (data) => {
      if (data.userType === UserType.AGENCY) {
        return !!data.agency && data.agency.trim() !== '';
      }
      return true;
    },
    {
      message: 'Agency is required for agency user type',
      path: ['agency'], // this shows the error on the `agency` field
    }
  );
