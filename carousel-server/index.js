import express from "express";
import cors from "cors"; 
import dotenv from "dotenv";
import carouselRouter from "./routes/carouselRouter.js";
dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use("/api", carouselRouter);
app.listen(port, () => {
  console.log(`Server is connected at ${port}`);
});
