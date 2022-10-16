import COMMANDS from "../COMMANDS.js";
import write from "./write.js";
import buffer from "../BUFFER.js";


const commands = Object.keys(COMMANDS).sort();


export default
function
hint() 
{
	return commands.filter((command) => {
        if (command.includes(buffer.get()))
        {
            process.stdout.clearLine(0);
            process.stdout.cursorTo(0);
            write('\u001b[34m' + command + '\u001b[0m');
            process.stdout.cursorTo(0);
            write(buffer.get())
            buffer.setHint(command);
		}
	});
}
