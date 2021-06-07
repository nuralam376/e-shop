const Order = require("../models/Order");
const Product = require("../models/Order");

exports.postOrder = async (req, res) => {
  const products = req.body;
  try {
    const order = await Order.create();

    order.addProducts(
      products.map((product) => {
        product.orderItem = { quantity: product.quantity };
        return product;
      })
    );
    return res.json({ message: "Order Saved" });
  } catch (err) {
    console.log("err", err);
  }
};
