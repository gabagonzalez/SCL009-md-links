
//Declaraciones
const chalk = require('chalk');
const log = console.log;
const mdLinks = require('../index.js');

mdLinks.saludar();
log(chalk.bold.bgMagenta(mdLinks.welcome));
// mdLinks.read ();