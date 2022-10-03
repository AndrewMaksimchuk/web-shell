import COMMANDS from "../../COMMANDS.js";
import exit from "./handlers/exit.js";
import npm from "./handlers/npm.js";
import template from "./handlers/template.js";


const 
handlers = 
{
    [COMMANDS.npm]: npm,
    [COMMANDS.exit]: exit,
    [COMMANDS.template.value]: template,
}


function
whatCommand(buffer = "")
{
    return Object.keys(handlers).filter((key) => buffer.startsWith(key)).toString();
}


export default
function
commandHandler(bufferInput) 
{
    const command = whatCommand(bufferInput.get());
    return command ? handlers[command](bufferInput) : false;
}
