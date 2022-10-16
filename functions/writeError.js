import write from "./write.js";


export default
function
writeError(message = "An unknown error has occurred!")
{
    return write(`\u001b[31m${message}\u001b[0m\n`);
}
