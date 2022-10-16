#!/usr/bin/env node


import readline from "readline";
import header from "./functions/header.js";
import keypressHandler from "./functions/keypressHandler.js";


readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.setEncoding("utf8");


console.clear();
header();


process.stdin.on("keypress", keypressHandler);
