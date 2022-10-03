export default
function
ctrlC(bufferInput, ctrl)
{
    return ctrl ? process.exit() : false;
}
