import express from "express";
const PORT = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello, test from cicd",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
