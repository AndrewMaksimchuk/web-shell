import write from "../../write.js";
import buffer from "../../../BUFFER.js";
import HISTORY from "../../../HISTORY.js";


export default
function
up()
{
    if (HISTORY.isAvailable())
    {
        const last = HISTORY.getOn();
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0); 
        write(last);
        buffer.change(last);
        return true;
    }

    return false;
}
