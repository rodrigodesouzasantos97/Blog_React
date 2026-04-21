const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const conn = require("./db/conn");

conn();

const port = 3000;

const postRoutes = require("./routes");

app.use("/posts", postRoutes);

app.listen(port, function () {
  console.log(`O servidor iniciou na porta: ${port}`);
});
