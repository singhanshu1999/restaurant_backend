const express = require("express");
const menuApi = require("./routes/menuRoute");
const orderApi = require("./routes/orderRoute");
const userApi = require("./routes/userRoute");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandling");

connectDb();
const app = express();

const port = 3000;

app.use(express.json());
app.use("/menuapi/restaurant", menuApi);
app.use("/orderapi/restaurant", orderApi);
app.use("/userapi/restaurant", userApi);
app.use(errorHandler);

app.listen(port, () => {
  console.log("server is running on port: ", port);
});
