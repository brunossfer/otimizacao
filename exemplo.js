var glpk = require('./node_modules/glpk.js');
var util = require("./util.js");

let exemplo = {
  name: 'magica',
  objective: {
    direction: glpk.GLP_MAX,
    name: 'otimochila',
    vars: [
      {name: 'a',coef: 150},
      {name: 'b',coef: 35},   
      {name: 'c',coef: 200},
      {name: 'd',coef: 60},
      {name: 'e',coef: 60},
      {name: 'g',coef: 45}, 
      {name: 'h',coef: 60},
      {name: 'i',coef: 40},   
      {name: 'j',coef: 30},
      {name: 'k',coef: 70},
      {name: 'l',coef: 10},
      {name: 'm',coef: 30},   
      {name: 'n',coef: 15},
      {name: 'o',coef: 10},   
      {name: 'p',coef: 40},
      {name: 'q',coef: 70},
      {name: 'r',coef: 75},
      {name: 's',coef: 80},
      {name: 't',coef: 20},
      {name: 'u',coef: 12},
      {name: 'v',coef: 50},
      {name: 'w',coef: 10},   
    ]
  },
  subjectTo: [
    {
      name: 'size',
      vars: [
        {name: 'a',coef: 9},
        {name: 'b',coef: 13},   
        {name: 'c',coef: 153},
        {name: 'd',coef: 50},
        {name: 'e',coef: 15},
        {name: 'g',coef: 68}, 
        {name: 'h',coef: 27},
        {name: 'i',coef: 39},   
        {name: 'j',coef: 23},
        {name: 'k',coef: 11},
        {name: 'l',coef: 52},
        {name: 'm',coef: 32},   
        {name: 'n',coef: 24},
        {name: 'o',coef: 48},   
        {name: 'p',coef: 73},
        {name: 'q',coef: 42},
        {name: 'r',coef: 43},
        {name: 's',coef: 23},   
        {name: 't',coef: 7},
        {name: 'u',coef: 18},
        {name: 'v',coef: 4},
        {name: 'w',coef: 30},
      ],
      bnds: { type: glpk.GLP_UP, ub: 450, lb: 0.0 }      
    },
  ],
  binaries: ['a', 'b', 'c', 'd', 'e', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w']
}

console.log(util.getRespostaFormat(glpk.solve(exemplo)));