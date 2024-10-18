import express from "express";
import routes from "./routes";
import errorHandler from "./middleware/error-handler";

const port = 4000;
const app = express();

app.use(express.json());

app.use(routes);

// Ran out of time to figure out this Typescript error
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
