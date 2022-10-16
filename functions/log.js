import { openSync, writeFileSync, existsSync, accessSync, constants, closeSync } from "fs";
import { TTY } from "./process.js";
import isTerminal from "./isTerminal.js";


const messageOpen = "\nOPEN FILE!\nWaiting for events...\n";
const messageClose = isTerminal(TTY) ? "CLOSE FILE!\nPress enter key." : "\n";

let permision = false;
let fileDescriptor = 0;


try 
{
    TTY && existsSync(TTY) && (accessSync(TTY, constants.W_OK) === undefined) && (permision = true);
    fileDescriptor = openSync(TTY, "w");
    writeFileSync(fileDescriptor, messageOpen);
} 
catch(error) 
{
    permision = false;
}


process.on("exit", () => 
{
    writeFileSync(fileDescriptor, messageClose);
    closeSync(fileDescriptor);
});


export default
function
log(value, buffer)
{   
    const message = `\nVALUE ->${JSON.stringify(value)}<-\nBUFFER ->${buffer.get()}<-\n`;
	return permision ? writeFileSync(fileDescriptor, message) : false;
}


export const __doc__ =
`
Note:
TTY - The file name of the terminal connected to standart input (linux tty command),
      or it's can be the path to text log file.

Parameters:
    1. value - Any data type that can be converted to a string type.
    2. buffer - Data that user typed in terminal.

Return:
    Depending on permision.
    Function call "writeFileSync" from "fs" module or "false" value.
`;


log.__doc__ = __doc__;
