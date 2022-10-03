import { constants, copyFileSync } from "fs";
import { execSync } from "child_process";
import newLine from "../../newLine.js";


export default
function
npm(buffer)
{
    const responseBuffer = execSync(buffer.get()).toString();
    buffer.clear();
    process.stdout.cursorTo(0);
    process.stdout.write(responseBuffer);
    newLine();
    return true;
}
