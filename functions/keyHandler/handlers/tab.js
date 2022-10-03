import { readFileSync } from "fs";
import COMMANDS from "../../../COMMANDS.js";


export default
function
tab(bufferInput)
{
    if (bufferInput.get().startsWith(COMMANDS.npm)) {
        const fsBuffer = readFileSync("./package.json");
        const { scripts } = JSON.parse(fsBuffer);
        const keys = Object.keys(scripts);
        process.stdout.write(` ${keys}\n`);
        bufferInput.add(" run ")
        process.stdout.write(bufferInput.toString());
        return true;
    }
}
