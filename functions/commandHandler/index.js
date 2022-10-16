import cd from "./handlers/cd.js";
import ls from "./handlers/ls.js";
import npm from "./handlers/npm.js";
import css from "./handlers/css.js";
import note from "./handlers/note.js";
import exit from "./handlers/exit.js";
import help from "./handlers/help.js";
import make from "./handlers/make.js";
import read from "./handlers/read.js";
import html from "./handlers/html.js";
import mkdir from "./handlers/mkdir.js";
import COMMANDS from "../../COMMANDS.js";
import history from "./handlers/history.js";
import template from "./handlers/template.js";
import markdown from "./handlers/markdown.js";
import documentation from "./handlers/documentation.js";


const 
handlers = 
{
    [COMMANDS.cd]: cd,
    [COMMANDS.ls]: ls,
    [COMMANDS.npm]: npm,
    [COMMANDS.exit]: exit,
    [COMMANDS.help]: help,
    [COMMANDS.make]: make,
    [COMMANDS.read]: read,
    [COMMANDS.html]: html,
    [COMMANDS.css]: css,
    [COMMANDS.mkdir]: mkdir,
    [COMMANDS.history]: history,
    [COMMANDS.note.value]: note,
    [COMMANDS.markdown]: markdown,
    [COMMANDS.template.value]: template,
    [COMMANDS.documentation.value]: documentation,
}


function
whatCommand(buffer = "")
{
    return Object.keys(handlers).filter((key) => buffer.startsWith(key)).toString();
}


export default
function
commandHandler(buffer) 
{
    const command = whatCommand(buffer.get());
    return command ? handlers[command](buffer) : false;
}
