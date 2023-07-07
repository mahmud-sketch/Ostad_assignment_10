var jwt = require("jsonwebtoken");

exports.generateToken = (req, res) => {
  let payLoad = {
    exp: Math.floor(Date.now() / 100) + 60 * 60,
    data: { name: "OSTAD" },
  };
  let token = jwt.sign(payLoad, "SecretKey123");
  res.send(token);
};

exports.authenticateToken = (req, res, next) => {
  let token = req.headers.token;
  jwt.verify(token, "SecretKey123", (err, decoded) => {
    if (err) {
      res.status(401).json({ status: "invalid token", data: err });
    } else {
      console.log(decoded);
      next();
      // res.status(200).json({ status: "valid token", data: decoded });
    }
  });
};
