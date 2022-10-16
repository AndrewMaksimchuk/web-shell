import write from "../../write.js";
import newLine from "../../newLine.js";
import COMMANDS from "../../../COMMANDS.js";
import writeError from "../../writeError.js";
import read from "./documentationFunctions/read.js";
import generate from "./documentationFunctions/generate.js";
import getCommandArguments from "../../getCommandArguments.js";


const { subcommands } = COMMANDS.documentation;
const execute = 
{
    [subcommands.read.value]: read,
    [subcommands.generate.value]: generate,
}


export default
function
documentation(buffer)
{
    try
    {
        const args = getCommandArguments(buffer.get());

        if (Array.isArray(args) && args.length)
        {
            const [subcommand, filePath] = args;

            if (execute.hasOwnProperty(subcommand))
            {
                execute[subcommand](filePath);
                newLine();
                buffer.clear();
                return true;
            }

            newLine();
            write(`"${subcommand}" subcommand does not exist!`);
            newLine();
            buffer.clear();
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
