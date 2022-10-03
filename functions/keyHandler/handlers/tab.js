import { readFileSync } from "fs";
import COMMANDS from "../../../COMMANDS.js";


export default
function
tab(buffer)
{
    if (buffer.get().startsWith(COMMANDS.npm)) {
        const fsBuffer = readFileSync("./package.json");
        const { scripts } = JSON.parse(fsBuffer);
        const keys = Object.keys(scripts);
        process.stdout.write(` ${keys}\n`);
        buffer.add(" run ")
        process.stdout.write(buffer.toString());
        return true;
    }
}
