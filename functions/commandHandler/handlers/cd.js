import write from "../../write.js";
import newLine from "../../newLine.js";
import writeError from "../../writeError.js";
import getCommandArguments from "../../getCommandArguments.js";


export default
function
cd(buffer)
{
    const to = getCommandArguments(buffer.get()).toString();
    
    try
    {
        process.chdir(to);
        newLine();
        write(process.cwd());
        newLine();
        buffer.clear();
        return true;
    }
    catch (error)
    {
        newLine();
        writeError(error.message);
        newLine();
        return true;
    }
}
