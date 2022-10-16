import { spawn } from 'child_process';
import STATE from "../../../STATE.js";
import newLine from "../../newLine.js";
import writeError from "../../writeError.js";
import getCommandArguments from '../../getCommandArguments.js';


export default
function
html(buffer = {})
{
    try
    {
        const args = getCommandArguments(buffer.get());

        if (Array.isArray(args) && args.length)
        {
            newLine();
            buffer.clear();
            args.forEach((value) =>
            {
                spawn(`open`, [`${STATE.urlMdnHtmlElement}${value}`]);
            });
            return true;
        }
        
        newLine();
        buffer.clear();
        spawn(`open`, [STATE.urlMdnHtml]);
        return true;
    }
    catch (error)
    {
        newLine();
        buffer.clear();
        writeError(error.message);
        return true;
    }
}
