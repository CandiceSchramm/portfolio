const express = require("express");
const app = express();

//dynamic port binding
const PORT = process.env.PORT || 3001;
app.listen(PORT);
