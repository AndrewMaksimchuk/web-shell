import newLine from "../../newLine.js";
import HISTORY from "../../../HISTORY.js";
import commandHandler from "../../commandHandler/index.js";


export
default
function
returnEnter(buffer)
{
    HISTORY.add(buffer.get());

    if (commandHandler(buffer)) {
        return true;
    }

    newLine();
    buffer.clear();
    return true;
}
