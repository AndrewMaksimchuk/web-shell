#!/usr/bin/env node

import readline from 'readline';
import { copyFileSync, readFileSync, openSync, writeFileSync } from 'fs';
import { exec } from 'child_process';


// const keyWords = [
//     'template',
// ]

let bufferInput = ''
const cwd = process.cwd()
process.stdout.write(cwd + '\n')
console.log(process.stdout.isTTY)
console.log(`${process.stdout.columns}x${process.stdout.rows}`);

// Log to another separeted terminal window
// const terminal = openSync('/dev/cons1', 'w+')
// writeFileSync(terminal, 'START')


readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.setEncoding('utf8');

process.stdin.on('keypress', (str, key) => {
    // log(str, key)

    if (key.ctrl && key.name === 'c') {
      process.exit();
    }

    if (key.sequence === '\r') {
        // To do some stuff
        // Handler input command from bufferInput

        if (bufferInput === 'show buffer') {
            process.stdout.write('\n' + bufferInput + '\n')
            return
        }

        if (bufferInput.includes('template create')) {
            // bufferInput === 'template create'
            process.stdout.write(`\nCreate new template component!\n`)
            bufferInput = ''
            copyFileSync("./template/vue/composition.vue", `User.vue`);
            return
        }

        if (bufferInput === 'tty') {
            exec(`tty`, (error, stdout, stderr) => {
                if (error) return console.error(`error: ${error.message}`);
                process.stdout.write(stdout)
            });

        }

        if (bufferInput === 'exit') {
            process.exit()
        }

        process.stdout.write('\n')
        bufferInput = ''
        return
    }

    if (key.sequence === '\b') {
        bufferInput = bufferInput.slice(0, bufferInput.length - 1)
        readline.clearLine(process.stdout, -1)
        process.stdout.write('\r')
        process.stdout.write(bufferInput)
        return
    }

    if (key.sequence === '\t' && bufferInput === 'npm') {
        const fsBuffer = readFileSync('./package.json')
        const { scripts } = JSON.parse(fsBuffer)


        const keys = Object.keys(scripts)

        process.stdout.write(` ${keys}\n`)
        process.stdout.write(`${bufferInput} `)




        bufferInput += ' '
        return
    }

    // keyWords.filter((value, index) => {
    //     if (value.includes(bufferInput)) {
    //         // Show hint for keyword
    //         // process.stdout.write(value)
    //     }
    // })

    bufferInput += str
    process.stdout.write(String(str))

    // console.log(buf)
  });


  function log(str, key) {
    console.log(key)
    console.log(str)
    console.log(typeof str)
    console.log(bufferInput)
    console.log(bufferInput.length)
    console.log(typeof bufferInput)
  }


// let buf = ''
// process.stdin.setRawMode(true);
// process.stdin.setEncoding('utf8');
// process.stdin.on("data", function (data) {

//     // ctrl-c ( end of text )
//     if (data === 'E') {
//         process.exit();
//     }

//     if (data === "\t") {
//         const fsBuffer = readFileSync('./package.json')
//         const { scripts } = JSON.parse(fsBuffer)
//         console.log(scripts)
//         process.stdout.write(buf + "\n")
//     }
//     buf += data
//     // write the key to stdout all normal like
//     // process.stdout.write(data);
//     console.log(data)
// })





// const argv = process.argv;
// console.log(argv);
// copyFileSync("./template/vue/composition.vue", `User.vue`);
