import { join } from "path";
import STATE from "../../../../STATE.js";
import { spawnSync } from "child_process";
import newLine from "../../../newLine.js";
import isExist from "../../../isExist.js";
import writeError from "../../../writeError.js";


export default
function
update(note = "")
{
    try
    {
        if (Boolean(note) === false)
        {
            newLine();
            return writeError(`Expect name of note!`);
        }

        const newNote = join(STATE.notePathUser, note);

        if (isExist(newNote) === false)
        {
            newLine();
            return writeError(`This note not exist!`);
        }

        const { status } = spawnSync("vi", [newNote], { stdio: "inherit" });

        if (status != 0)
        {
            newLine();
            return writeError(`Unable to write file. Exit status code is ${status}`);
        }
    }
    catch (error)
    {
        newLine();
        writeError(error.message);
    }
}
