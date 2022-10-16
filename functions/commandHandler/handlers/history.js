import buffer from "../../../BUFFER.js";
import HISTORY from "../../../HISTORY.js";
import newLine from "../../newLine.js";
import write from "../../write.js";


export default
function
history()
{
    buffer.clear();
    HISTORY.getAll().forEach((text, index) =>
    {
        newLine();
        write(`${index} ${text}`);
    });
    newLine();
    return true;
}
