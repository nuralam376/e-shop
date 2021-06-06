const express = require("express");
const sequelize = require("./db/db");

const app = express();
const PORT = process.env.PORT || 5000;
const Product = require("./models/Product");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

sequelize
  .sync()
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  })
  .catch((err) => console.log(err));

module.exports = app;
