import write from "../../write.js";
import newLine from "../../newLine.js";
import { execSync } from "child_process";
import writeError from "../../writeError.js";
import getCommandArguments from "../../getCommandArguments.js";


export default
function
npm(buffer)
{
    try
    {
        const inputText = buffer.get();
        const args = getCommandArguments(inputText);
    
        if (Array.isArray(args) && args.length)
        {
            const responseBuffer = execSync(inputText).toString();
            buffer.clear();
            process.stdout.cursorTo(0);
            write(responseBuffer);
            newLine();
            return true;
        }
    
        return false;       
    }
    catch (error)
    {
        newLine();
        writeError(error.message);
        return true;
    }
}
