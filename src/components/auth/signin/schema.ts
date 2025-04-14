import { z } from 'zod';

export interface signInSchemaType extends z.infer<typeof signinSchema> {}

export const signinSchema = z.object({
  password: z.string(),
  username: z.string().min(4).max(50),
});
