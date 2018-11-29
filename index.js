var express = require("express");
var glpk = require("./node_modules/glpk.js");
var util = require("./conversao.js");
var data = require("./exemplo.js");
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

var port = 3001;

app.listen(port, () => {
  console.log("Server rodando na porta " + port);
});

app.post("/opt", (req, res, next) => {
  let fazerParse = util.getGlpkFormatt(req.body);
  let resolucao = glpk.solve(parsed, glpk.GPL_MSG_ALL);
  let resposta = util.getRespostaFormat(optm);
  res.send(resposta);
});