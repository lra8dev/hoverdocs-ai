import z from "zod";

export const authTokenSchema = z.object({
  token: z.string().refine(val => val.length > 0, { message: "Token cannot be empty" }),
});

export type AuthToken = z.infer<typeof authTokenSchema>;
