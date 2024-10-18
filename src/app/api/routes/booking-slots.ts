import z from "zod";

// body for POST /booking-slots/
const schemaCreate = z.object({
  clinicianId: z.string().min(1, "clinicianId is required."),
  roomId: z.string().min(1, "roomId is required."),
  notes: z.string(),
  treatmentId: z.string().min(1, "treatmentId is required."),
  startTime: z.string().refine((dateTime) => !isNaN(Date.parse(dateTime)), {
    message: "Invalid date-time format",
  }),
  endTime: z.string().refine((dateTime) => !isNaN(Date.parse(dateTime)), {
    message: "Invalid date-time format",
  }),
});

// body for PUT /bookings
export const schemaUpdate = schemaCreate.extend({
  id: z.string(),
});

export const schemaGet = schemaCreate.extend({
  id: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type BookingCreate = z.infer<typeof schemaCreate>;
export type BookingUpdate = z.infer<typeof schemaUpdate>;
export type BookingGet = z.infer<typeof schemaGet>;
