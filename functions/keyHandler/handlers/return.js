import newLine from "../../newLine.js";
import commandHandler from "../../commandHandler/index.js";


export
default
function
returnEnter(buffer)
{
    if (commandHandler(buffer)) {
        return true;
    }

    newLine();
    buffer.clear();
    return false;
}
