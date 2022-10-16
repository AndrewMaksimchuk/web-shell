import processExit from "../../processExit.js";


export default
function
ctrlC(_, ctrl)
{
    return ctrl ? processExit() : false;
}
