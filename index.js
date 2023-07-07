const app = require("./app");
require("dotenv").config({ path: "./config.env" });

app.listen(process.env.PORT, () => {
  console.log(`successs at ${process.env.PORT}`);
});
