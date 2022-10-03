import KEYS from "../../KEYS.js";
import left from "./handlers/left.js";
import right from "./handlers/right.js";
import ctrlC from "./handlers/ctrlC.js";
import escape from "./handlers/escape.js";
import nothing from "./handlers/nothing.js";
import backspace from "./handlers/backspace.js";
import returnEnter from "./handlers/return.js";
import tab from "./handlers/tab.js";


const 
handlers = 
{
    [KEYS.backspace]: backspace,
    [KEYS.up]: nothing,
    [KEYS.down]: nothing,
    [KEYS.left]: left,
    [KEYS.right]: right,
    [KEYS.escape]: escape,
    [KEYS.return]: returnEnter,
    [KEYS.ctrl_c]: ctrlC,
    [KEYS.tab]: tab,
}


export default
function
keyHandler({ name, ctrl }, bufferInput) 
{
    return handlers[name] ? handlers[name](bufferInput, ctrl) : false;
}
