import { join } from "path";
import { CWD } from "../../process.js";
import { constants, copyFileSync, unlinkSync } from "fs";
import STATE from "../../../STATE.js";
import newLine from "../../newLine.js";
import COMMANDS from "../../../COMMANDS.js";
import writeError from "../../writeError.js";


function
pathToComponent(componentName)
{
    return join(STATE.shellSource, "components", componentName);
}


function
pathToTemplate(template)
{
    return join(STATE.shellSource, "templates", "vue", template);
}


const vueOption = pathToTemplate(COMMANDS.template.subcommands.create.options.option.template);
const vueComposition = pathToTemplate(COMMANDS.template.subcommands.create.options.composition.template);


export default
function
template(buffer)
{
    const input = buffer.get();

    if (input.includes(COMMANDS.template.subcommands.create.value))
    {
        try
        {
            const words = input.trim().split(" ");
            const componentName = words.filter((word) => word.includes(".vue")).toString() || "Default.vue";
            const saveTo = words.filter((word) => word.includes(COMMANDS.template.subcommands.create.options.path))?.toString()?.split("=")?.at(-1)?.trim() || join(CWD, "components");
            newLine();
            
            if (input.includes(COMMANDS.template.subcommands.create.options.option.value))
            {
                buffer.clear();
                copyFileSync(vueOption, join(saveTo, componentName), constants.COPYFILE_EXCL);
                return true;
            }
            else
            {
                buffer.clear();
                copyFileSync(vueComposition, join(saveTo, componentName), constants.COPYFILE_EXCL);
                return true;
            }
        }
        catch (error)
        {
            writeError(`\n${error.message}`);
            buffer.clear();
            return true;
        }
    }

    if (input.includes(COMMANDS.template.subcommands.remove))
    {
        try 
        {
            const componentName = input.split(COMMANDS.template.subcommands.remove).at(-1).trim();
            unlinkSync(pathToComponent(componentName));
            newLine();
            buffer.clear();
            return true;
            
        } 
        catch (error) 
        {
            writeError(`\n${error.message}`);
            buffer.clear();
            return true;
        }
    }
}
