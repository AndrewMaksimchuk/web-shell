import { join } from "path";
import { readFileSync } from "fs";
import write from "../../write.js";
import STATE from "../../../STATE.js";
import newLine from "../../newLine.js";
import writeError from "../../writeError.js";
import isRelativePath from "../../isRelativePath.js";


export default
function
read(buffer)
{
    const command = buffer.get().split("read");
    let filePath = command.at(-1)?.trim();

    if (Boolean(filePath) === false)
    {
        newLine();
        writeError("Need path to file.");
        write(buffer.get())
        return true;
    }

    if (isRelativePath(filePath))
    {
        filePath = join(STATE.shellSource, filePath);
    }

    try
    {
        const text = readFileSync(filePath).toString("utf8");
        newLine();
        write(text);
        newLine();
        buffer.clear();
        return true;
    }
    catch (error)
    {
        newLine();
        writeError(error.message);
        write(buffer.get())
        return true;
    }
}
