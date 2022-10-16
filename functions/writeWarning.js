import write from "./write.js";


export default
function
writeWarning(message = "")
{
    return write(`\u001b[33m${message}\u001b[0m\n`);
}
