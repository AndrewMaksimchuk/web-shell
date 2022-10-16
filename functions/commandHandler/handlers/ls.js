import { readdirSync } from "fs";
import write from "../../write.js";
import newLine from "../../newLine.js";
import writeError from "../../writeError.js";
import getCommandArguments from "../../getCommandArguments.js";


export default
function
ls(buffer)
{
    try
    {
        let content = [];
        const text = buffer.get();
        const path = getCommandArguments(text).toString() || ".";

        content = readdirSync(path);
        content.sort().forEach((item) => 
        {
            newLine();
            write(item);
        });

        newLine();
        buffer.clear();
        return true;
    } 
    catch (error)
    {
        newLine();
        buffer.clear();
        writeError(error.message);
        return true;
    }
}
