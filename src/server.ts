import express from "express";
;
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("This is My Fisrt Node... Back-End with CI/CD This is goni hales");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
