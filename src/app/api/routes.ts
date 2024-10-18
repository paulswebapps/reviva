import { Router, Request, Response } from "express";
import { router as bookingsRouter } from "./routes/bookings";

const router = Router();

router.use("/bookings", bookingsRouter);

// Define your routes
router.get("/health", (req: Request, res: Response) => {
  res.json({ message: `We're good!` });
});

export default router;
