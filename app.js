import express from "express";
import { Api } from "./api/index.js";
const app = express();

app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded()); //
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", Api);
app.get("/", (req, res) => {
  console.log( "Welcome to Nodemcu Log");

  res.json({
    success: true,
    message: "Welcome to Nodemcu"
  });
});
app.listen(3000, function() {
  console.log(`Express app running on port 3000`);
});
