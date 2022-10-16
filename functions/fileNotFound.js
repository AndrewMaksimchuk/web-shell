import { basename } from "path";
import write from "./write.js";
import buffer from "../BUFFER.js";
import isExist from "./isExist.js";


export default
function
fileNotFound(path ="")
{
    if (isExist(path))
    {
        return false;
    }

    write(`\n${basename(path)} not found!\n`);
    buffer.clear();
    return true;
}
