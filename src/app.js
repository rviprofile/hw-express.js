const express = require("express");
const app = express();
const dotenv = require("dotenv");
const userRouter = require("./routes/users.js");
const bookRouter = require("./routes/books");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const logger = require("./middlewares/logger.js");

dotenv.config();

const {
  PORT = 3006,
  API_URL = "http://127.0.0.1",
  MONGO_URL = "mongodb://localhost:27017/backend",
} = process.env;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log(`Connected to MongoDb: ${MONGO_URL}`);
  })
  .catch((error) => {
    console.log(error);
  });

app.use(cors());
app.use(logger);
app.use(bodyParser.json());
app.use(userRouter);
app.use(bookRouter);
app.listen(PORT, () =>
  console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`)
);
