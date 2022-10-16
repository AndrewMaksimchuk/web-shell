import { existsSync, accessSync, constants } from "fs";


export default
function
isExist(path = "")
{
    return path && existsSync(path) && (accessSync(path, constants.R_OK | constants.W_OK) === undefined) ? true : false;
}
