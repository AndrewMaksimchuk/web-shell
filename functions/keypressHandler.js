import buffer from "../BUFFER.js";
import log from "./log.js";
import keyHandler from "./keyHandler/index.js";


export default
function
keypressHandler(str, key)
{	
	log(key, buffer);

	if(keyHandler(key, buffer)) return;

    buffer.add(str);
	process.stdout.write(String(str));
}
