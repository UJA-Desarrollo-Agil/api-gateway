const express = require("express");
const {routes} = require("./proxy-routes");
const {setupProxies} = require("./proxy");
const app = express();
const port = 8001;

setupProxies(app, routes);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

module.exports=app
