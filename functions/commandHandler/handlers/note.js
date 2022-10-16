import write from "../../write.js";
import newLine from "../../newLine.js";
import show from "./noteFunctions/show.js";
import COMMANDS from "../../../COMMANDS.js";
import clear from "./noteFunctions/clear.js";
import writeError from "../../writeError.js";
import create from "./noteFunctions/create.js";
import remove from "./noteFunctions/remove.js";
import update from "./noteFunctions/update.js";
import search from "./noteFunctions/search.js";
import showAll from "./noteFunctions/showAll.js";
import getCommandArguments from "../../getCommandArguments.js";


const { subcommands } = COMMANDS.note;
const execute = 
{
    [subcommands.show.value]: show,
    [subcommands.create.value]: create,
    [subcommands.remove.value]: remove,
    [subcommands.update.value]: update,
    [subcommands.search.value]: search,
    [subcommands.clear.value]: clear,
}


export default
function
note(buffer)
{
    try
    {
        const args = getCommandArguments(buffer.get());

        if (Array.isArray(args) && args.length)
        {
            const [subcommand, note] = args;

            if (execute.hasOwnProperty(subcommand))
            {
                execute[subcommand](note);
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

        showAll(buffer);
        return true;
    }
    catch (error) {
        newLine();
        writeError(error.message);
        return true;
    }
}
