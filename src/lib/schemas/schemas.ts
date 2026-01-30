import { ExpenseCategoryEnum } from "@/types/api";
import z from "zod";

export const destinationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  country: z.string().min(1, "Country is required"),
  file: z.instanceof(FileList || File).optional(),
});

export type DestinationSchema = z.infer<typeof destinationSchema>;

export const tripSchema = z
  .object({
    title: z.string().min(1),
    startDate: z.string(),
    endDate: z.string(),
    destinations: z.string().array().optional(),
    expenses: z
      .array(
        z.object({
          amount: z.number().min(0),
          description: z.string().min(1),
          category: z.nativeEnum(ExpenseCategoryEnum),
          id: z.number().optional(),
        }),
      )
      .default([])
      .optional(),
  })
  .refine(({ startDate, endDate }) => new Date(startDate) < new Date(endDate), {
    path: ["endDate"],
    message: "End date must be after start date",
  });

export type TripSchema = z.infer<typeof tripSchema>;
