import KEYS from "../../KEYS.js";
import up from "./handlers/up.js";
import tab from "./handlers/tab.js";
import down from "./handlers/down.js";
import left from "./handlers/left.js";
import right from "./handlers/right.js";
import ctrlC from "./handlers/ctrlC.js";
import escape from "./handlers/escape.js";
import returnEnter from "./handlers/return.js";
import backspace from "./handlers/backspace.js";


const 
handlers = 
{
    [KEYS.backspace]: backspace,
    [KEYS.up]: up,
    [KEYS.down]: down,
    [KEYS.left]: left,
    [KEYS.right]: right,
    [KEYS.escape]: escape,
    [KEYS.return]: returnEnter,
    [KEYS.ctrl_c]: ctrlC,
    [KEYS.tab]: tab,
}


export default
function
keyHandler({ name, ctrl }, buffer) 
{
    return handlers[name] ? handlers[name](buffer, ctrl) : false;
}
