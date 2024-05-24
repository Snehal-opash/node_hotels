const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db"); 

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});



// Import the router files
const personRoutes = require("./routes/PersonRoute");
const menuItemRoutes = require("./routes/MenuItemRoutes");

// use the routers
app.use("/person", personRoutes);
app.use("/menu", menuItemRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
