#!/usr/bin/env node


import readline from "readline";
import keypressHandler from "./functions/keypressHandler.js";


readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.setEncoding("utf8");


process.stdout.write(`${process.cwd()} ${process.stdout.columns}x${process.stdout.rows}\n\n`);


process.stdin.on("keypress", keypressHandler);
