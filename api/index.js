import express from "express";
const Api = express();
Api.get("/", (req, res) => {
  console.log("This rest api works Log");
  res.json({
    status: true,
    message: "This rest api works"
  });
});

export { Api };
