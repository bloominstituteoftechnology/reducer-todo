import express from "express";
import { json } from "body-parser";
import cors from "cors"; //allows AJAX to skip CORS policy
import helmet from "helmet"; // helps secure Express apps by setting various HTTP headers
import morgan from "morgan"; // logs request details
import toTosRouter from "./routes/todos.router";

const app = express();

app.use(cors());
app.use(helmet());
app.use(json());
app.use(morgan("dev"));

app.use("/api/todos", toTosRouter);

app.listen(5000, () => {
  console.log("Server is on 5000");
});
