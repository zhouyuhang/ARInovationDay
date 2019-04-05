const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile( __dirname + "/public/index.html" );
});
app.use(express.static(__dirname + '/public')); 

app.listen(4000, () => console.log("Server listening on port 4000, open browser at 'localhost:4000'"));
