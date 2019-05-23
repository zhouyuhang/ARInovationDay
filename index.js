const chalk = require('chalk');
const ip = require('ip');
const divider = chalk.gray('\n-----------------------------------');
const host = 'localhost';
const port = 4000;

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile( __dirname + "/public/index.html" );
});
app.use(express.static(__dirname + '/public'));

var log_text = `${chalk.bold('Access URLs:')}${divider}
  Localhost: ${chalk.magenta(`http://${host}:${port}`)}
  LAN: ${chalk.magenta(`http://${ip.address()}:${port}`)}
  Access the LAN address at Magic Leap Helio Browser
  ${divider}
${chalk.blue(`Press ${chalk.italic('CTRL-C')} to stop`)}`;

app.listen(port, () => console.log(log_text) );
