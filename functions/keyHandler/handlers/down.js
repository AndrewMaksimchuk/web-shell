import write from "../../write.js";
import buffer from "../../../BUFFER.js";
import HISTORY from "../../../HISTORY.js";


export default
function
up()
{
    if (HISTORY.isAvailable())
    {
        const text = HISTORY.getOn("down");
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0); 
        write(text);
        buffer.change(text);
        return true;
    }

    return false;
}
