const express = require("express");
const app = express();
const bodyParser =require("body-parser");

app.use(bodyParser.json());
// support encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));

if (process.env.NODE_ENV === 'production') {
    // Exprees will serve up production assets
    app.use(express.static('/client/build'));
  
    // Express serve up index.html file if it doesn't recognize route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }

//dynamic port binding
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Express server istening on port ${PORT}`))
