const express = require("express");
const router = require("./router");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(router);

app.listen(8000, () => {
  console.log("Server is running on port 3000");
});
