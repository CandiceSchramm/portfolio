const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require('path')

app.use(bodyParser.json());
// support encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));

if (process.env.NODE_ENV === "production") {
  // Exprees will serve up production assets
  app.use(express.static("/client"));

  // Express serve up index.html file if it doesn't recognize route
  app.get("*", function(req, res) {
    const index = path.join(__dirname, "build", "index.html");
    res.sendFile(index);
  });
}

//dynamic port binding
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Express server istening on port ${PORT}`));
