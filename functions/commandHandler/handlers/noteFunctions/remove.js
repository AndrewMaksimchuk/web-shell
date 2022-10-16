import { join } from "path";
import { unlinkSync } from "fs";
import STATE from "../../../../STATE.js";
import newLine from "../../../newLine.js";
import writeError from "../../../writeError.js";


export default
function
remove(note = "")
{
    try
    {
        if (Boolean(note) === false)
        {
            newLine();
            return writeError(`Need note name!`);
        }

        const removedNote = join(STATE.notePathUser, note);
        unlinkSync(removedNote);
    }
    catch (error)
    {
        newLine();
        writeError(error.message);
    }
}
