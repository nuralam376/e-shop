const Sequelize = require("sequelize");

const sequelize = require("../db/db");

const Product = sequelize.define("product", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
});

module.exports = Product;
