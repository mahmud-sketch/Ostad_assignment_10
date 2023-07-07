const productsModel = require("../Models/ProductsModel");

exports.showProducts = (req, res) => {
  let query = {};
  let projection = "Name Price";
  productsModel
    .find(query, projection)
    .then((data) => {
      res.status(201).json({ status: "success", data: data });
    })
    .catch((err) => res.status(401).json({ status: "fail", data: err }));
};

exports.addProduct = (req, res) => {
  let reqBody = req.body;
  productsModel
    .create(reqBody)
    .then((data) => {
      res.status(201).json({ status: "success", data: data });
    })
    .catch((err) => res.status(401).json({ status: "fail", data: err }));
};
