import bufferInput from "../BUFFER.js";
import log from "./log.js";
import keyHandler from "./keyHandler/index.js";


export default
function
keypressHandler(str, key)
{	
	log(key, bufferInput);

	if(keyHandler(key, bufferInput)) return;

	bufferInput.value += str;
	process.stdout.write(String(str));
}
