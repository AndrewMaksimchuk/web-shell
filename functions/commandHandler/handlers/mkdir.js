import { join } from "path";
import { mkdirSync } from "fs";
import write from "../../write.js";
import STATE from "../../../STATE.js";
import newLine from "../../newLine.js";
import writeError from "../../writeError.js";
import isRelativePath from "../../isRelativePath.js";
import getCommandArguments from "../../getCommandArguments.js";


export default
function
mkdir(buffer) 
{
    const commandArguments = getCommandArguments(buffer.get());

    try
    {
        if (Array.isArray(commandArguments))
        {
            if (commandArguments.length === 0)
            {
                newLine();
                writeError("Need directory name/path!");
                write(buffer.get());
                return true;
            }

            commandArguments.forEach(argument => 
                {
                    if (isRelativePath(argument))
                    {
                        const path = join(STATE.shellSource, argument);
                        mkdirSync(path, { recursive: true });
                        return;
                    }
    
                    if (argument.includes("/"))
                    {
                        mkdirSync(argument, { recursive: true });
                        return;
                    }
    
                    mkdirSync(argument);
                }
            );
        }
    }
    catch (error)
    {
        newLine();
        writeError(error.message);
        buffer.clear();
        return true;
    }

    newLine();
    buffer.clear();
    return true;
}
