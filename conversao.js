var glpk = require("./node_modules/glpk.js");

function getVars(json) {
  let vars = [];
  let jsonKeys = Object.keys(json);
  for (let key of jsonKeys) {
    let item = { 
      name: key,
      coef: json[key]
    }
    vars.push(item);
  }
  return vars;
}

function getObjective(json) {
  var objective = {
    direction: glpk.GLP_MAX,
    name: 'objetiva',
    vars: getVars(json)
  };
  return objective;
}

function getBounds(limite) {
  let bnds = {
    type: glpk.GLP_UP,
    ub: limite,
    lb: 0.0,
  };
  return bnds;
}

function getSubjectTo(json) {
  let subjectTo = {
    name: key,
    vars: getVars(json), 
    bnds: getBounds(json), 
  }  
  return subjectTo;
}

module.exports = {
  getGlpkFormat: function(json) {
    let result = {
      name: 'Otimochila',
      objective: getObjective(json.objetiva),
      subjectTo: getSubjectTo(json.restricoes),
      generals: Object.keys(json.objetiva),
    }
    return result;
  },

  getRespostaFormat: function(json) {
    let result = {
      tempo: json.time,
      adicionados: json.result.vars,
      lucro: json.result.z,
      status: json.result.status 
    };
    return result;
  }
}