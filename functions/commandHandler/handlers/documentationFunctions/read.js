import { join } from "path";
import write from "../../../write.js";
import { CWD } from "../../../process.js";
import newLine from "../../../newLine.js";
import writeError from "../../../writeError.js";


export default
function
read(filePath = "")
{
    const docPropName = "__doc__";

    if (Boolean(filePath) === false)
    {
        newLine();
        writeError(`Need path to file!`);
        return;
    }

    const toFile = join(CWD, filePath);

    import(toFile)
    .then((value) =>
    {
        if (value[docPropName])
        {
            write(value[docPropName]);
        }

        write(`Documentation is not written in the specified module.`);
        newLine();
    })
    .catch((reason) => 
    {
        newLine();
        writeError(reason);
    });
}