import { readdirSync } from "fs";
import write from "../../../write.js";
import STATE from "../../../../STATE.js";
import newLine from "../../../newLine.js";
import writeError from "../../../writeError.js";


export default
function
showAll(buffer)
{
    try
    {
        const text = readdirSync(STATE.notePathUser);

        if (text.length)
        {
            newLine();
    
            text.forEach((value) => 
            {
                write(value);
                newLine();
            });

            buffer.clear();
            return;
        }

        newLine();
        write(`You don't have a notes.`);
        newLine();
        buffer.clear();
    }
    catch (error)
    {
        newLine();
        writeError(error.message);
    }
}
