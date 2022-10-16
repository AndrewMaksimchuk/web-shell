import { readdirSync } from "fs";
import write from "../../../write.js";
import STATE from "../../../../STATE.js";
import newLine from "../../../newLine.js";
import writeError from "../../../writeError.js";


export default
function
search(value = "")
{
    try
    {
        if (Boolean(value) === false)
        {
            newLine();
            return writeError(`Need search value!`);
        }

        const entities = readdirSync(STATE.notePathUser);

        if (entities.length)
        {
            const result = entities.filter((entity) => entity.includes(value));
            result.forEach((entity) =>
            {
                newLine();
                write(entity);
            });
        }
    }
    catch (error)
    {
        newLine();
        writeError(error.message);
    }
}
