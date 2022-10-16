import { join } from "path";
import { readFileSync } from "fs";
import { execSync } from "child_process";
import { CWD } from "../../process.js";
import write from "../../write.js";
import buffer from "../../../BUFFER.js";
import newLine from "../../newLine.js";
import fileNotFound from "../../fileNotFound.js";


export default
function
make(execCommand)
{
    if (execCommand)
    {
        const responseBuffer = execSync(buffer.get()).toString();
        buffer.clear();
        process.stdout.cursorTo(0);
        process.stdout.write(responseBuffer);
        newLine();
        return true;
    }


    if (fileNotFound("./Makefile")) return true;


    const commands = readFileSync(join(CWD, "Makefile"))
        .toString("utf8")
        .split("\n")
        .filter((line) => line.includes(":"))
        .map((command) => command.replace(":", ""));
    write("\nMakefile commands:\n");
    commands.forEach((command) => write(`${command}\n`));
    buffer.add(" ");
    write(buffer.get());
    return true;
}
