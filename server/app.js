const express = require("express");
const sequelize = require("./db/db");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
const Product = require("./models/Product");
const ProductRoutes = require("./routes/ProductRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/products", ProductRoutes);

sequelize
  .sync()
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

    // Inserted fake products
    // const fakeProducts = require("./fakeProducts");
    //   fakeProducts.forEach((product) => {
    //     Product.create(product)
    //       .then(() => console.log("Products data saved"))
    //       .catch((err) => console.log(err));
    //   });
  })
  .catch((err) => console.log(err));

module.exports = app;
