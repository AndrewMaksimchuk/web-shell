import { readFileSync } from "fs";
import write from "../../write.js";
import COMMANDS from "../../../COMMANDS.js";
import fileNotFound from "../../fileNotFound.js";
import make from "../../commandHandler/handlers/make.js";


export default
function
tab(buffer)
{
    const inputText = buffer.get();


    if (inputText.startsWith(COMMANDS.npm))
    {
        if (fileNotFound("./package.json")) return true;

        const fsBuffer = readFileSync("./package.json").toString("utf8");
        const { scripts } = JSON.parse(fsBuffer);
        const keys = Object.keys(scripts);
        write(` ${keys}\n`);
        buffer.add(" run ");
        write(buffer.get());
        return true;
    }


    if (inputText.startsWith(COMMANDS.make))
    {
        make();
        return true;
    }


    if (buffer.getHint())
    {
        buffer.change(`${buffer.getHint()} `);
        process.stdout.clearLine(0);
        process.stdout.cursorTo(0);
        write(buffer.get());
        buffer.setHint();
        return true;
    }


    return false;
}
