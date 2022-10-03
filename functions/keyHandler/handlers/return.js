import newLine from "../../newLine.js";
import commandHandler from "../../commandHandler/index.js";


export
default
function
returnEnter(bufferInput)
{
    if (commandHandler(bufferInput)) {
        return true;
    }

    newLine();
    bufferInput.clear();
    return false;
}