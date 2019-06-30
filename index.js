#!/usr/bin/env node // "strict use"

//1-Declaration Modules/libraries
const fs = require('fs');
const path = require('path');
// const fileHound = require('filehound');
// const marked = require("marked");
const chalk = require('chalk');
// const fetch = require('node-fetch');

//2-Declaraton of the Variables
let log = console.log;

//3-Declaration of the Route
let route = process.argv[2];
route = path.resolve(route);
route= path.normalize(route);

