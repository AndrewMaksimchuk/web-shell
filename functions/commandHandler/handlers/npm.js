import { constants, copyFileSync } from "fs";
import { execSync } from "child_process";
import newLine from "../../newLine.js";


export default
function
npm(bufferInput)
{
    const responseBuffer = execSync(bufferInput.get()).toString();
    bufferInput.clear();
    process.stdout.cursorTo(0);
    process.stdout.write(responseBuffer);
    newLine();
    return true;
}
