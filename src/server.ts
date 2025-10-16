import express from "express";
;
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("This is Node-Express Back-End with CI/CD with env");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
