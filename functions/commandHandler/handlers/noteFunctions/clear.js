import { join } from "path";
import STATE from "../../../../STATE.js";
import newLine from "../../../newLine.js";
import { readdirSync, unlinkSync } from "fs";
import writeError from "../../../writeError.js";


export default
function
clear()
{
    try
    {
        const notes = readdirSync(STATE.notePathUser);
        notes.forEach((note) => unlinkSync(join(STATE.notePathUser, note)));
    }
    catch (error)
    {
        newLine();
        writeError(error.message);
    }
}
