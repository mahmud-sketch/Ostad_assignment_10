const express = require("express");
const router = express.Router();

const { addProduct, showProducts } = require("../Controllers/products");
const { generateToken, authenticateToken } = require("../Controllers/token");

// route for adding a product and showing all products

router.get("/products", showProducts);
router.post("/addProduct", addProduct);

// token

router.get("/generateToken", generateToken);
router.get("/authenticateToken", authenticateToken);

module.exports = router;
