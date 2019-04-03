const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile( __dirname + "/" + "index.html" );
});

app.listen(4000, () => console.log("Server listening on port 4000, open browser at 'localhost:4000'"));
