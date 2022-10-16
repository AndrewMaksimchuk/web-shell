import log from "./log.js";
import hint from "./hint.js";
import write from "./write.js";
import buffer from "../BUFFER.js";
import keyHandler from "./keyHandler/index.js";
import normalizeInput from "./normalizeInput.js";


export default
function
keypressHandler(str, key)
{	
	log(key, buffer);

	if(keyHandler(key, buffer)) return;

	write(str);
    buffer.add(str);
	normalizeInput(buffer);
	hint();
}
