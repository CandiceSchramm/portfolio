const express = require("express");
const app = express();
const bodyParser =require("body-parser");

app.use(bodyParser.json());
// support encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'client/build')));


//dynamic port binding
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Express server istening on port ${PORT}`))
