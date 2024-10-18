import express, { Request, Response } from "express";
import z from "zod";

// body for POST /bookings
const schemaCreate = z.object({
  patientId: z.string().min(1, "patientId is required."),
  notes: z.string(),
  bookingSlotId: z.string().min(1, "timeSlotId is required."),
});

// body for PUT /bookings
export const schemaUpdate = schemaCreate.extend({
  id: z.string(),
});

export const schemaGetParams = z.object({
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

export const router = express.Router();

// In-memory storage for demonstration (replace with your database logic)
let bookings: BookingGet[] = [
  {
    id: "test-id",
    bookingSlotId: "33lk3j4",
    patientId: "kjkjkj",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    notes: "First time visitor",
  },
];

router.post(`/`, (req: Request, res: Response) => {
  const validatedData = schemaCreate.parse(req.body);
  // Simulate storing booking (replace with actual DB logic)
  const newBooking = {
    ...validatedData,
    id: `${bookings.length + 1}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  bookings.push(newBooking);
  res
    .status(201)
    .json({ message: "Booking created successfully!", booking: newBooking });
});

router.get(`/:id`, (req: Request<{ id: string }>, res: Response) => {
  schemaGetParams.parse(req.params);
  const { id } = req.params;

  const booking = bookings.find((b) => b.id === id);
  if (!booking) {
    return res.status(404).json({ message: "Booking not found" });
  }
  res.json({ booking });
});
