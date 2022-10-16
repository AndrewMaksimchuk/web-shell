import { join, parse } from "path";
import { writeFileSync } from "fs";
import write from "../../../write.js";
import { CWD } from "../../../process.js";
import newLine from "../../../newLine.js";
import isExist from "../../../isExist.js";
import writeError from "../../../writeError.js";


export default
function
generate(filePath = "")
{
    const docPropName = "__doc__";

    if (Boolean(filePath) === false)
    {
        newLine();
        writeError(`Need path to file!`);
        return;
    }

    if (isExist(join(CWD, "documentation")) === false)
    {
        newLine();
        writeError(`"documentation" directory not exist!`);
        return;
    }

    const toFile = join(CWD, filePath);
    const fileName = `${parse(filePath).name}.md`;
    const toDocDirectory = join(CWD, "documentation", fileName);

    import(toFile)
    .then((value) =>
    {
        const docText = value[docPropName];
        if (docText)
        {
            writeFileSync(toDocDirectory, docText);
            return;
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
