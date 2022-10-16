import { join } from "path";
import { readFileSync } from "fs";
import { pid, CWD, columns, rows } from "./process.js";
import write from "./write.js";
import STATE from "../STATE.js";


const packagePath = join(STATE.shellSource, "package.json").replace("file:", "");


const packageJson = readFileSync(packagePath).toString("utf8");
const { name, version } = JSON.parse(packageJson);


export default
function
header()
{
    process.title = name;
    write(`${name} ${version} ${pid} ${CWD} ${columns}x${rows}\n`);
}
