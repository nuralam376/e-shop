const Order = require("../models/Order");
const Product = require("../models/Order");

exports.postOrder = async (req, res) => {
  const products = req.body;
  try {
    const order = await Order.create();

    for (let product of products) {
      await order.addProduct(product.id, {
        through: { quantity: product.quantity },
      });
    }
    return res.json({ message: "Order Saved" });
  } catch (err) {
    console.log("err", err);
  }
};
