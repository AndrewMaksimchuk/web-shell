import write from "./write.js";


export default
function
newLine(value = "") 
{
	return value ? write(`\n${value}\n`) : write("\n");
}