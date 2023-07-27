import express from "express";
import bp from "body-parser";
import { router } from "./routes/index.js";
import { config } from "dotenv";
import morgan from "morgan";
config();

const app = express();
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use("/v1/api/", router);

const { PORT } = process.env;

const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
  });
};

export { startServer };
