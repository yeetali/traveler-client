import z from "zod";

export const destinationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  country: z.string().min(1, "Country is required"),
  file: z.instanceof(FileList || File).optional(),
});

export type DestinationSchema = z.infer<typeof destinationSchema>;
