import express from "express";
import { Api } from "./api/index.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.APP_PORT || 3001;

app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded()); //
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {
  console.log( "Welcome to Nodemcu Log");

  res.json({
    success: true,
    message: "Welcome to Nodemcu"
  });
});
app.use("/api", Api);

app.listen(port, () => {
  console.log(`Express app running on port ${port}`);
});
