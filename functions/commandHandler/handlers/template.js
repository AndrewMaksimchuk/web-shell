import { join } from "path";
import { constants, copyFileSync } from "fs";
import COMMANDS from "../../../COMMANDS.js";
import newLine from "../../newLine.js";


export default
function
template(bufferInput)
{
    if (bufferInput.get().includes(COMMANDS.template.children.create.value)) {
        try {
            const CWD = process.cwd();
            const words = bufferInput.get().trim().split(" ");
            const componentName = words.filter((word) => word.includes(".vue")).toString() || "Default.vue";
            const saveTo = words.filter((word) => word.includes(COMMANDS.template.children.create.options.path))?.toString()?.split("=")?.at(-1)?.trim() || join(CWD, "components");
            newLine();
            
            if (bufferInput.get().includes(COMMANDS.template.children.create.options.option.value)) {
                bufferInput.clear();
                return copyFileSync(`./template/vue/${COMMANDS.template.children.create.options.option.template}`, join(saveTo, componentName), constants.COPYFILE_EXCL);
            } else {
                bufferInput.clear();
                return copyFileSync(`./template/vue/composition.vue`, join(saveTo, componentName), constants.COPYFILE_EXCL);
            }
        } catch (error) {
            process.stdout.write(`\n${error.message}`);
        }
    }

    if (bufferInput.get().includes(COMMANDS.template.children.remove)) {
        return; // todo
    }
}

/*
template create NewUser.vue
template create NewUser.vue --option
template create NewUser.vue --composition
template create NewUser.vue path=absolute_path
*/
