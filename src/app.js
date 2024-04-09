const express = require("express");
const app = express();
const dotenv = require("dotenv");
const userRouter = require("./routes/users.js");
const bookRouter = require("./routes/books");
const bodyParser = require("body-parser");
// const loggerOne = require("./middlewares/loggerOne.js");
// const loggerTwo = require("./middlewares/loggerTwo.js");
const cors = require("cors");
const mongoose = require("mongoose");

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
// app.use(logger);
app.use(bodyParser.json());
app.use(userRouter);
app.use(bookRouter);
app.listen(PORT, () =>
  console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`)
);

// app.get("/", (request, response) => {
//   response.status(200);
//   response.send("Hello, World!");
// });

// app.use(loggerOne);
// app.use(loggerTwo);

// app.post("/", (request, response) => {
//   response.status(200);
//   response.send("Hello from POST!");
// });

// // app.get("/users/:id", (request, response) => {
// //   const { id } = request.params;
// //   response.status(200);
// //   response.send(`User ID is ${id}`);
// // });

// app.use(userRouter);
// app.use(booksRouter);

// app.listen(PORT, () => {
//   console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`);
// });

// // // Or:
// // try {
// //   await mongoose.connect("mongodb://127.0.0.1:27017/test");
// // } catch (error) {
// //   handleError(error);
// // }

// app.use(cors);
// app.use(bodyParser.json());
