import { openSync, writeFileSync } from "fs";


const [ ,, tty ] = process.argv;


export default
function
log(value, buffer)
{   
	return tty ? writeFileSync(openSync(tty, "w+"), JSON.stringify(value) + "\n" + `${buffer ? buffer + "\n" : ""}`) : false;
}


export const __doc__ =
`
Parameters:
    1. tty - The file name of the terminal connected to standart input (linux tty command).
    2. value - Any data type that can be converted to a string type.
    3. buffer - Data that user typed in terminal.

Return:
    Function call "writeFileSync" from "fs" module.
`;


log.__doc__ = __doc__;
