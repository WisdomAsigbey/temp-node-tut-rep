const name = require("./4-names");
const sayHi = require("./5-utils");
const random = Math.floor(Math.random() * name.length);

sayHi(name[random]);
