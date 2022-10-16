import { join } from "path";
import { readFileSync } from "fs";
import write from "../../write.js";
import STATE from "../../../STATE.js";
import newLine from "../../newLine.js";
import buffer from "../../../BUFFER.js";


export default
function
markdown()
{
    const file = join(STATE.shellSource, "notes", "markdown.md");
    const text = readFileSync(file).toString("utf8");
    newLine();
    write(text);
    newLine();
    buffer.clear();
    return true;
}
