import STATE from "../../../../STATE.js";
import { join } from "path";
import { readFileSync } from "fs";
import write from "../../../write.js";
import newLine from "../../../newLine.js";
import writeError from "../../../writeError.js";


export default
function
show(note = "")
{
    try
    {
        if (Boolean(note) === false)
        {
            newLine();
            return writeError(`Need note name!`);
        }

        const showedNote = join(STATE.notePathUser, note);
        const text = readFileSync(showedNote).toString("utf8");
        newLine();
        write(text);
    }
    catch (error)
    {
        newLine();
        writeError(error.message);
    }
}
